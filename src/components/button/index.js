import classNames from 'classnames';
import { combineComponentClass } from '@tool';
import classes from './index.module.scss';


export default function Button(props) {
    const classnames = combineComponentClass(props, classes.button)
    return <button className={classNames(classnames)} onClick={props.onClick}>{props.text}</button>
}