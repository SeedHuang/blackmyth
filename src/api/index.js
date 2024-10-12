import { sendPost, sendGet } from "@tool";

function localPath( pathName ) {
    return `//localhost:4000/${pathName}`;
}

export const addUnitInfo = async (parameters) => {
    return sendPost(localPath('write/addUnitInfo'), {
        ...parameters
    });
}

export const updateUnitInfo = (parameters) => {
    return sendPost(localPath('write/updateUnitInfo'), {
        ...parameters
    });
}

export const getCategories = async () => {
    return sendGet(localPath('get/categories'));
}

export const getUnits = async () => {
    return sendGet(localPath('get/units'));
}

export const getUnitById = async (id) => {
    return sendGet(localPath('get/unitById'), {id});
}

export const getRouters = async () => {
    return sendGet(localPath('get/routers'));
}