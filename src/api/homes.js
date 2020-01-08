import axios from 'axios';

export const getList = () => {
    return axios.get('/list')
};

export const getFolder = () => {
    return axios.get('/folderArray')
}

export const createFolder = ({name, star}) => {
    return axios.post('/folderArray', {
        name,
        star
    })
};