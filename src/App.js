import { RouterProvider, BrowserRouter, Routes, Route } from 'react-router-dom';
import routerConfig from '@router';
import { createContext, useState, lazy, Suspense, useCallback } from 'react';
import classes from './app.module.scss';
import Alert from '@components/dialog/alert';
import Menu from '@components/menu';
import Loading from '@pages/loading';


export const GlobalContext = createContext();

const AsyncHome = lazy(()=>{ return import('@pages/home')});
const AsyncEditor = lazy(()=>{ return import('@pages/editor')});
const AsyncUnits = lazy(()=>{ return import('@pages/units')});


function App() {
    const [ isShow, setIsShow ] = useState(false);
    const [ dialogContent, setDialogContent ] = useState([]);
    const [ dialogMethods, setDialogMethods ] = useState({});
    const { onConfirmHandler, onCancelHandler } = dialogMethods;
    const [ routeComponents, setRouteComponents ] = useState([]);
    const globalValue = {
        // AlertDialog.show({
        //     content: (<div>Hello World</div>),
        //     onConfirmHandler: () => {
        //         console.log('confirm...');
        //         AlertDialog.hide();
        //     },
        //     onCancelHandler: () => {
        //         console.log('cancel...');
        //         AlertDialog.hide();
        //     }
        // });
        AlertDialog : {
            show ({content = [], onConfirmHandler = null, onCancelHandler = null}) {
                setIsShow(true);
                setDialogContent(content);
                setDialogMethods({
                    onConfirmHandler,
                    onCancelHandler
                });
            },
            hide () {
                setIsShow(false);
            }
        }
    };
    const onRouterFetched = useCallback((_routeComponents)=> {
        setRouteComponents(_routeComponents);
    }, [routeComponents]);
    return (
        <GlobalContext.Provider value={globalValue}>
            <BrowserRouter>
            <div className={classes.container}>
                <div className={classes.container__menu}>
                    <Menu onRouterFetched={onRouterFetched}/>
                </div>
                <div className={classes.container__content}>
                    <Suspense fallback={<Loading/>}>
                        <Routes>
                                {routeComponents}
                        </Routes>
                    </Suspense>
                </div>  
                <Alert
                    isShow={isShow}
                    onConfirmClick={onConfirmHandler}
                    onCancelClick={onCancelHandler}>
                    { dialogContent }
                </Alert>
            </div>
            </BrowserRouter>
        </GlobalContext.Provider>
        
    );
}
export default App;
