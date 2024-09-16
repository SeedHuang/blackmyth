import { useState } from 'react';
import DialogBg from './dialogBg';
import classes from './halfScreenDialog.module.scss';

export default function HalfScreen(props) {
    const { isShow } = props;

    return (
        <DialogBg isShow={isShow}>
            <div className={classes.dialog__halfscreen}>
                { props.children }
            </div>
        </DialogBg>        
    );
}