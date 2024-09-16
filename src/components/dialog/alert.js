import WindowDialog from './windowDialog';
import Button from '@components/button';
import classes from './alert.module.scss';

export default function Alert(props) {
    const { onConfirmClick = null, onCancelClick = null, isShow = false } = props;
    function _onConfirmClick () {
        onConfirmClick && onConfirmClick();
    }

    function _onCancelClick () {
        onCancelClick && onCancelClick();
    }
    return (
        
        <WindowDialog isShow={isShow}  footer={
            [
                <Button key="key_button_confirm" text="确认" onClick={_onConfirmClick}/>,
                <Button key="key_button_cancel" text="取消" onClick={_onCancelClick}/>,
            ]
        }>
            { props.children }
        </WindowDialog>
    );
}