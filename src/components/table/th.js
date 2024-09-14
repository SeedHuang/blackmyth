import classes from './th.module.scss';

export default function th(props) {
    const { width, field, fieldName, type } = props;
    const style = {};
    if(width) {
        if(width !== 'auto') {
            style.flexBasis = width;
            style.flexShrink = 0;
        } else {
            style.flexGrow = 1;
            style.flexShrink = 1;
        }
    }
    if(type === 'option') {
        return (
            <div 
                key={`columns_key_option}`} 
                className={classes.table__header__th}
                style={style}
            >
                {fieldName}
            </div>);
    } else {
        return (
            <div
                key={`columns_key_${field}`}
                className={classes.table__header__th}
                style={style}
            >
                {fieldName}
            </div>);
    }
}