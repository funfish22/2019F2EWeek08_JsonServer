import Home from './Home';
import { connect } from 'react-redux'

import {advanced_open, target_folder, add_star, sort_files, createFolderRequest, removeFolderRequest} from 'action/index'

const mapStateToProps = (state: 
    { 
        filterList: any;
        folderArray: any;
        filterFolder: any;
        Advanced: boolean;
        targetFolder: number;
        sortArray: number;
        over: boolean;
        searchStar: boolean;
    }) => {
    return{
        filterList: state.filterList,
        folderArray: state.folderArray,
        filterFolder: state.filterFolder,
        Advanced: state.Advanced,
        targetFolder: state.targetFolder,
        sortArray: state.sortArray,
        over: state.over,
        searchStar: state.searchStar
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        advanced_open: (advanced: Boolean) => {
            dispatch(advanced_open(advanced))
        },
        target_folder: (id: number) => {
            dispatch(target_folder(id))
        },
        add_star: (id: number) => {
            dispatch(add_star(id))
        },
        sort_files: (number: number) => {
            dispatch(sort_files(number))
        },
        createFolderRequest: (name: string) => {
            dispatch(createFolderRequest(name))
        },
        removeFolderRequest: (id: number) => {
            dispatch(removeFolderRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);