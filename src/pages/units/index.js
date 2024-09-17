import { useEffect, useState } from 'react';
import { getUnits } from '@api';
import columns from './columns';
import Table from "@components/table";
import ToolBar from '@components/toolBar';
import Button from '@components/button';
import Dialog from '@components/dialog';
import Editor from '@pages/editor';
import PageView from '@components/pageView'
import { useContext } from 'react';
import { GlobalContext } from '@src/App';
import { useFetchUnit } from '@hooks/fetchs/units'




export default function Units() {
    const { AlertDialog } = useContext(GlobalContext);
    
    const [showEditor, setShowEditor] = useState(false);
    const { rows } = useFetchUnit();

    function onAddClick () {
        setShowEditor(true);
    }

    function onEditorConfirmClick() {
        setShowEditor(false);
    }

    function onEditroCancelClick() {
        setShowEditor(false);
    }
    return (
        <PageView>
            <ToolBar>
                <Button text="添加" onClick={onAddClick}/>
            </ToolBar>
            <Table columns={columns} rows={rows} />
            <Dialog mode="halfScreen" isShow={showEditor}>
                <Editor onConfirmClick={onEditorConfirmClick} onCancelClick={onEditroCancelClick}/>
            </Dialog>
        </PageView>
    );
}