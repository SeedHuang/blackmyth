import { useState, useEffect } from "react";
import { getUnits } from "@api";
export const useFetchUnit = () => {
    const [ rows , setRows ] = useState([]);
    
    async function fetchData() {
        const { data } = await getUnits();
        setRows(data.rows);
    }
    console.count('useFetchUnit');
    useEffect(()=>{
        console.count('useFetchUnit_FetchData');
        fetchData();
    }, []);
    return {
        rows
    }
}