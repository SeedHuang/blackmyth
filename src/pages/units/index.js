import { useEffect, useState } from 'react';
import { getUnits } from '@api';
import columns from './columns';
import Table from "@components/table";
import ToolBar from '@components/toolBar';
import Button from '@components/button';
export default function Units() {
    const [rows, setRows] = useState([]);
    async function fetchUnitData() {
        const { data: { rows } } = await getUnits();
        setRows(rows);
    }
    useEffect(function() {
        fetchUnitData();
    }, []);

    return (
        <div>
            <ToolBar>
                <Button>添加</Button>
            </ToolBar>
            <Table columns={columns} rows={rows} />
        </div>
    );
}