import classes from './td.module.scss';

export default function td(props) {
    const { row, column } = props;
    const style = {};
    if(column.width) {
        if(column.width !== 'auto') {
            style.flexBasis = column.width;
            style.flexShrink = 0
        } else {
            style.flexGrow = 1;
            style.flexShrink = 1;
        }
    }
    if(column.type === 'option') {
        return (
            <div
                className={classes.table__body__row__td}
                style={style}>
                { (column.setChildren && column.setChildren({row, column}))|| []}
            </div>
        );
    } else {
        return (
            <div
                className={classes.table__body__row__td}
                style={style}>{row[column.field]}</div>
        );
    }
}