import Header from './header';
import Tbody from './tbody';
import classes from './index.module.scss';
export default function Table(props) {
    const { columns = [], rows = [] } = props;
    console.log(classes, '>>>>')
    return (
        <div className={classes.table}>
            <Header columns={columns}/>
            <Tbody columns={columns} rows={rows}/>
        </div>
    );
}