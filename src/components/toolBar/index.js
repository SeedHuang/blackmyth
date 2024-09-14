import classes from './index.module.scss';

function toolbar (props) {
    // const { children } = props;
    const leftChildren = [];
    const rightChildren = [];
    console.log(this);
    // children.forEach((child)=>{
    //     console.log(child);
    // })
    return (
        <div className={classes.toolbar}>
            <div className={classes.toolbar__left}>
                { leftChildren }
            </div>
            <div className={classes.toolbar__right}>
                { rightChildren }
            </div>
        </div>
    );
}

export default toolbar;