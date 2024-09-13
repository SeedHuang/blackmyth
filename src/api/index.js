import axios from 'axios';


export const addUnitInfo = (parameters) => {
    console.log(parameters, '>>>>>>');
    axios.post('//localhost:4000/write/unitInfo', {
        ...parameters
    }).then((response) => {
        console.log(response);
    }).catch((error)=> {
        console.log(error);
    })
}