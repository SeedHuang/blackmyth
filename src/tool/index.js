import axios from 'axios';

export const sendPost = async (url, parameter) => {
    return new Promise((resolve, reject) => {
        axios.post(url, parameter).then((result)=>{
            if(result.data.code === 200) {
                resolve(result.data);
            } else {
                console.log('on error branch');
                reject(result.data);
            }
        }).catch((error)=> {
            reject(error);
        })
    });
}

export const sendGet = async (url, parameter = {}) => {
    return new Promise((resolve, reject) => {
        axios.get(url, parameter).then((result)=>{
            if(result.data.code === 200) {
                resolve(result.data);
            } else {
                console.log('on error branch');
                reject(result.data);
            }
        }).catch((error)=> {
            reject(error);
        })
    });
}