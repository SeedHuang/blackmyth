import { memo, useCallback, useEffect, useMemo, useState, lazy } from "react";
import { Route, useNavigate } from "react-router-dom";
import { getRouters } from '@api';
import classNames from "classnames";
import classes from './index.module.scss';

function TMenu (props) {
    const [ routers, setRouters ] = useState([]);
    const [ selecctedPath, setSelectedPath ] = useState();
    const navigate = useNavigate();
    const onMenuClick = useCallback((pathName)=> {
        navigate(`/${pathName}`);
        setSelectedPath(pathName);
    }, []);
    const renderMenuItems = useMemo(function() {
        const result = [];
        const routes = [];
        routers.forEach(({showInMenu, pathName, text}) => {
            (function() {
                const AsyncPage = lazy(() => import(`@pages/${pathName}`));
                routes.push(
                    <Route key={`route+${pathName}`} path={`/${pathName}`} element={<AsyncPage/>}/>
                );
            })();
            if(showInMenu) {
                const _classNames = {};
                _classNames[classes.menu__item] = true;
                console.log(selecctedPath, pathName)
                _classNames[classes['menu__item--selected']] = selecctedPath === pathName;
                
                result.push ((
                    <div key={pathName} className={classNames(_classNames)} onClick={ () => { onMenuClick(pathName)} }>
                        {text}
                    </div>
                ));
            }
        });
        if(props.onRouterFetched) {
            props.onRouterFetched(routes);
        }
        return result;
    }, [routers, selecctedPath]);
    useEffect(function() {
        (async function () {
            try {
                const result = await getRouters();
                setRouters(result.data.routers);
            } catch(e) {
                console.log(e, '>>>');
            }
        })();
        const { defaultSelectedPath } = props;
        setSelectedPath(defaultSelectedPath);
    }, []);
    return (
        <div className={classes.menu}>
            {renderMenuItems}
        </div>
    )
}

export default memo(TMenu);