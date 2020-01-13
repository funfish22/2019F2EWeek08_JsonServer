export const Types = {
    ADVANCED_OPEN: 'toolBar/advanced_open',
    ADVANCED_CLOSE: 'toolBar/advanced_close',

    TARGET_FOLDER: 'toolbar/target_folder',

    SORT_FILES: 'toolbar/sort_files',
    SEARCH_FILES: 'toolbar/search_files',

    ADD_STAR: 'toolbar/add_star',

    DRAG: 'drag/drag',
    DRAG_ROOT: 'drag/drag_root',

    GET_LIST_REQUEST: 'list/get_list_request',
    GET_LIST_SUCCESS: 'list/get_list_success',

    GET_FOLDER_SUCCESS: 'folder/get_folder_success',

    CREATE_FOLDER_REQUEST: 'folder/create_folder_request',
    CREATE_FILES_REQUEST: 'list/create_files_request',

    REMOVE_FOLDER_REQUEST: 'folder/remove_folder_request'
}

export const advanced_open = (advanced) => {
    return{
        type: Types.ADVANCED_OPEN,
        advanced
    }
}

export const advanced_close = (advanced) => {
    return{
        type: Types.ADVANCED_CLOSE,
        advanced
    }
}

export const target_folder = (id) => {
    return{
        type: Types.TARGET_FOLDER,
        id
    }
}

export const add_folder = (name) => {
    return{
        type: Types.ADD_FOLDER,
        name
    }
}

export const add_star = (id) => ({
    type: Types.ADD_STAR,
    id
})

export const drag = (dragSwitch) => {
    return{
        type: Types.DRAG,
        dragSwitch
    }
}

export const drag_root = (dragSwitch) => {
    return {
        type: Types.DRAG_ROOT,
        dragSwitch
    }
}

export const sort_files = number => {
    return {
        type: Types.SORT_FILES,
        number
    }
}

export const search_files = text => {
    return {
        type: Types.SEARCH_FILES,
        text
    }
}

export const getListRequest = () => ({
    type: Types.GET_LIST_REQUEST
});

export const getListSuccess = ({items}) => ({
    type: Types.GET_LIST_SUCCESS,
    payload: {
        items
    }
});

export const getFolderSuccess = ({folders}) => ({
    type: Types.GET_FOLDER_SUCCESS,
    payload: {
        folders
    }
});

export const createFolderRequest = (name) => ({
    type: Types.CREATE_FOLDER_REQUEST,
    payload: {
        name
    }
});

export const removeFolderRequest = id => {
    return{
        type: Types.REMOVE_FOLDER_REQUEST,
        payload: {
            id
        }
    }
}

export const createFilesRequest = ({name, size, time, fileType}) => {
    return{
        type: Types.CREATE_FILES_REQUEST,
        payload: {
            name,
            size,
            time,
            fileType
        }
    }
}