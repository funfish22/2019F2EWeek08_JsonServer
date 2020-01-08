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

        case Types.ADD_FOLDER :
            const id = new Date().getTime()

            return {
                ...state,
                folderArray: [...state.folderArray, { id, name: action.name, star: false }]
            };

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

        case Types.ADD_FILES:
            let newFiles = [];
            let fileLocal = state.fileLocal;

            if(state.fileLocal === '') {
                fileLocal = 'my drive'
            }

            action.object.forEach((row) => {
                const fileTypeMap = {
                    png: 'ic_image_24px.svg',
                    img: 'ic_image_24px.svg',
                    svg: 'ic_image_24px.svg',
                    ai: 'ic-ai.svg',
                    psd: 'ic-ps.svg',
                    xd: 'ic-xd.svg',
                    doc: 'ic-word.svg',
                    docx: 'ic-word.svg',
                    xls: 'ic-excel.svg',
                    xlsx: 'ic-excel.svg',
                    csv: 'ic-excel.svg',
                    ppt: 'ic-ppt.svg',
                    pptx: 'ic-ppt.svg',
                    pdf: 'ic-pdf.svg',
                    mp3: 'ic-media.svg',
                    mp4: 'ic-media.svg'
                }

                let ext = (/[.]/.exec(row.name)) ? /[^.]+$/.exec(row.name)[0] : undefined;
                let fileType = '';
                let fileSize = '';

                fileType = fileTypeMap[ext] ? fileTypeMap[ext] : 'ic-unkown.svg';

                if(row.size < 1024) {
                    fileSize = Math.ceil(row.size / 1024) + ' kb'
                } else if (row.size >= 1024 || row.size < 102400 ){
                    fileSize = Math.ceil(row.size / 102400) + ' mb'
                } else {
                    fileSize = Math.ceil(row.size / 102400000) + ' gb'
                }
                    
                newFiles.push(
                    {
                        id: row.lastModified + new Date().getTime(),
                        icon: `assets/img/${fileType}`,
                        name: row.name,
                        local: fileLocal,
                        time: `${row.lastModifiedDate.getYear() + 1900}/${row.lastModifiedDate.getMonth() + 1}/${row.lastModifiedDate.getDate()}`,
                        size: fileSize
                    }
                )
            })

            const concatFiles = state.list.concat(newFiles)

            return {
                ...state,
                list: concatFiles
            };

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