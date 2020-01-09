import { Types } from '../action'

// import 'config/utils/configureFirebase'

const initState = {
    targetFolder: "",
    starFolderArray: [],
    Advanced: false,
    footerDrag: false,
    dragRoot: false,
    sortArray: 0,
    fileLocal: "",
    over: false,
    folderArray: []
}


const ReducerRoot = (state = initState, action) => {
    switch(action.type){
        case Types.GET_LIST_SUCCESS :
            return {
                ...state,
                list: action.payload.items,
                over: true
            }
            case Types.GET_FOLDER_SUCCESS :
                return {
                    ...state,
                    folderArray: action.payload.folders,
                    over: true
                }
        case Types.ADVANCED_OPEN :
            return Object.assign({}, state, {
                Advanced: true
            });

        case Types.ADVANCED_CLOSE :
            return Object.assign({}, state, {
                Advanced: false,
                targetFolder: ''
            });

        case Types.TARGET_FOLDER :
            return Object.assign({}, state, {
                targetFolder: action.id
            });

        case Types.REMOVE_FOLDER :
            const newFilterArray = state.folderArray.filter((row) => {
                return row.id !== state.targetFolder
            })

            return {
                ...state,
                folderArray: newFilterArray,
                targetFolder: ''
            }

        case Types.ADD_STAR :
            const targetStar = state.folderArray.find((row) => {
                return row.id === action.id
            })

            if(targetStar === undefined){
                return state
            }

            const newStarArray = state.folderArray.map((row) => {
                if(row.id === action.id) {
                    return {
                        ...targetStar,
                        star: !row.star
                    }
                } else {
                    return row
                }
            })

            return {
                ...state,
                folderArray: newStarArray
            }

        case Types.DRAG :
            return {
                ...state,
                footerDrag: action.dragSwitch
            }

        case Types.DRAG_ROOT:
            return {
                ...state,
                dragRoot: action.dragSwitch
            }

        case Types.SORT_FILES:
            if(action.number === 0) {
                return {
                    ...state,
                    list: state.list.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1),
                    sortArray: 1
                }
            } else if (action.number === 2) {
                return {
                    ...state,
                    list: state.list.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1),
                    sortArray: 1
                }
            } else if (action.number === 1) {
                return{
                    ...state,
                    list: state.list.sort((a, b) => b.name.toLowerCase() > a.name.toLowerCase() ? 1 : -1),
                    sortArray: 2
                }
            } else {
                return state
            }

        default:
            return state;
    }
}

export default ReducerRoot;