import axios from 'axios';

export const getList = () => {
    return axios.get('/list')
};

export const getFolder = () => {
    return axios.get('/folderArray')
}

export const createFolder = ({name}) => {
    return axios.post('/folderArray', {
        name,
        star: false
    })
};

export const createFiles = ({name, local, time, size, fileType}) => {
    return axios.post('/list', {
        name,
        local: 'my drive',
        time,
        size,
        icon: `assets/img/${fileType}`
    })
};