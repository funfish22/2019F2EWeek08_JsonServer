import {takeEvery, takeLatest, take, call, fork, put} from 'redux-saga/effects';
import * as actions from 'action';

import * as api from '../api/homes';


function* getList(payload) {
    try{
        const result = yield call(api.getList);
        yield put(actions.getListSuccess({
            items: result.data
        }))
    }catch (e) {
        
    }
}

function* getFolder(payload) {
    try{
        const result = yield call(api.getFolder);
        yield put(actions.getFolderSuccess({
            folders: result.data
        }))
    }catch (e) {
        
    }
}

function* watchGetListRequest() {
    yield takeEvery(actions.Types.GET_LIST_REQUEST, getList)
    yield takeEvery(actions.Types.GET_LIST_REQUEST, getFolder)
}

function* createFolder(action, payload) {
    try {
        yield call(api.createFolder, {name: action.payload.name});
        yield call(getFolder)
    }catch (e) {
        
    }
}

function* watchCreateFolderRequest() {
    yield takeLatest(actions.Types.CREATE_FOLDER_REQUEST, createFolder)
}

function* createFiles(action, payload) {
    try {
        yield call(api.createFiles, {name: action.payload.name, size: action.payload.size, time: action.payload.time, fileType: action.payload.fileType});
        yield call(getFolder)
    }catch (e) {
        
    }
}

function* watchCreateFilesRequest() {
    yield takeLatest(actions.Types.CREATE_FILES_REQUEST, createFiles)
}

function* removeFolder({id}) {
    try {
        yield call(api.removeFolder, id);
        yield getFolder();
    }catch (e) {
        // yield put(actions.usersError({
        //     error: '刪除失敗'
        // }))
    }
}

function* watchRemoveFolderRequest() {
    while (true) {
        const action = yield take(actions.Types.REMOVE_FOLDER_REQUEST);
        yield call(removeFolder, {
            id: action.payload.id
        })
    }
}

const usersSagas = [
    fork(watchGetListRequest),
    fork(watchCreateFolderRequest),
    fork(watchCreateFilesRequest),
    fork(watchRemoveFolderRequest)
];

export default usersSagas;