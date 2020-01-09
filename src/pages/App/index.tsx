import App from './App';
import { connect } from 'react-redux'

import { advanced_close, drag, drag_root, getListRequest, createFilesRequest } from 'action/index'

const mapStateToProps = (state: 
    { 
        Advanced: boolean;
        footerDrag: boolean;
        dragRoot: boolean;
    }) => {
    return{
        Advanced: state.Advanced,
        footerDrag: state.footerDrag,
        dragRoot: state.dragRoot
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return{
        advanced_close: (advanced: Boolean) => {
            dispatch(advanced_close(advanced))
        },
        drag: (dragSwitch: Boolean) => {
            dispatch(drag(dragSwitch))
        },
        drag_root: (dragSwitch: Boolean) => {
            dispatch(drag_root(dragSwitch))
        },
        getListRequest: () => {
            dispatch(getListRequest())
        },
        createFilesRequest: (name: any, size: any, time: any, fileType: any) => {
            dispatch(createFilesRequest({name, size, time, fileType}))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);