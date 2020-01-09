import {takeEvery, takeLatest, take, call, fork, put} from 'redux-saga/effects';
import * as action from 'action';

import * as api from '../api/homes';


function* getList(payload) {
    try{
        const result = yield call(api.getList);
        yield put(action.getListSuccess({
            items: result.data
        }))
    }catch (e) {
        
    }
}

function* getFolder(payload) {
    try{
        const result = yield call(api.getFolder);
        yield put(action.getFolderSuccess({
            folders: result.data
        }))
    }catch (e) {
        
    }
}

function* watchGetListRequest() {
    yield takeEvery(action.Types.GET_LIST_REQUEST, getList)
    yield takeEvery(action.Types.GET_LIST_REQUEST, getFolder)
}

function* createFolder(action, payload) {
    try {
        yield call(api.createFolder, {name: action.payload.name});
        yield call(getFolder)
    }catch (e) {
        
    }
}

function* watchCreateFolderRequest() {
    yield takeLatest(action.Types.CREATE_FOLDER_REQUEST, createFolder)
}

function* createFiles(action, payload) {
    try {
        yield call(api.createFiles, {name: action.payload.name, size: action.payload.size, time: action.payload.time, fileType: action.payload.fileType});
        yield call(getFolder)
    }catch (e) {
        
    }
}

function* watchCreateFilesRequest() {
    yield takeLatest(action.Types.CREATE_FILES_REQUEST, createFiles)
}

const usersSagas = [
    fork(watchGetListRequest),
    fork(watchCreateFolderRequest),
    fork(watchCreateFilesRequest)
];

export default usersSagas;