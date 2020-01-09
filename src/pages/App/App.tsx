import React from 'react';
import { HashRouter, BrowserRouter} from 'react-router-dom';
import styled from 'styled-components';
import firebase from 'firebase';

import 'config/utils/configureFirebase'

import Navbar from 'resources/components/organisms/Navbar';
import Footer from 'resources/components/organisms/Footer';

import Router from './Router';

interface Props { 
    advanced_close: Function,
    drag: Function,
    drag_root: Function
    getListRequest: Function,
    createFilesRequest: Function,
    footerDrag: boolean,
    dragRoot: boolean
}

interface State { }

interface typeInfo {[key: string]: any} 


const folder = ""

class App extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);

        this.props.getListRequest()
    };

    componentDidMount() {
        const DragContainer = document.getElementById('DragContainer')

        if(DragContainer === null) return

        window.addEventListener('click', (event) => {
            // event.stopImmediatePropagation();
            this.handleCloseAdvanced()
        })

        // window.addEventListener('mouseup', this.onDragLeave);
        window.addEventListener("dragenter", this.onDragEnter);
        window.addEventListener('dragover', this.onDragOver);;
        DragContainer.addEventListener("dragleave", this.onDragLeave)
        window.addEventListener("drop", this.onDrop)
    }

    componentWillUnmount() {
        const DragContainer = document.getElementById('DragContainer')

        if(DragContainer === null) return

        // window.removeEventListener('mouseup', this.onDragLeave);
        window.removeEventListener('dragenter', this.onDragEnter);
        window.addEventListener('dragover', this.onDragOver);
        DragContainer.removeEventListener('dragleave', this.onDragLeave);
        window.removeEventListener('drop', this.onDrop);
    }

    handleCloseAdvanced = () => {
        const { advanced_close } = this.props

        advanced_close(false)
    }

    onDragEnter = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        const { drag, drag_root } = this.props
        drag(true)
        drag_root(true)
        return false;
    }

    onDragOver = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    onDragLeave = (e: any) => {
        e.stopPropagation();
        e.preventDefault();
        const { drag, drag_root } = this.props
        drag(false)
        drag_root(false)
        return false;
    }

    onDrop = (e:any) => {
        e.preventDefault();

        const { drag, drag_root, createFilesRequest, getListRequest } = this.props
        let files = e.dataTransfer.files;

        drag_root(false)
        let task
        for(let i = 0; i < files.length; i++) {
            let fileTypeMap: typeInfo = {
                png: 'ic_image_24px.svg',
                jpg: 'ic_image_24px.svg',
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

            const path = folder + files[i].name;
            
            let fileType = '';
            let fileSize = '';
            let time = `${files[i].lastModifiedDate.getYear() + 1900}/${files[i].lastModifiedDate.getMonth() + 1}/${files[i].lastModifiedDate.getDate()}`
            let ext = (/[.]/.exec(path)) ? /[^.]+$/.exec(path) : undefined;
            if(ext === null || ext === undefined) return

            fileType = fileTypeMap[ext[0]] ? fileTypeMap[ext[0]] : 'ic-unkown.svg';

            const storageReference = firebase.storage().ref(path);
            task = storageReference.put(files[i]);

            if(files[i].size < 1024) {
                fileSize = Math.ceil(files[i].size / 1024) + ' kb'
            } else if (files[i].size >= 1024 || files[i].size < 1024000 ){
                fileSize = Math.ceil(files[i].size / 1024000) + ' mb'
            } else {
                fileSize = Math.ceil(files[i].size / 1024000000) + ' gb'
            }
            createFilesRequest(path, fileSize, time, fileType)
        }

        if(task === undefined) return;

        task.on(
            "state_changed",
            function progress(snapshot) {
            //   let uploadValue = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            //   uploaded[i].value = uploadValue;
            },
            function error() {
                drag(false);
            },
            function complete() {
                drag(false);
                getListRequest();
            }
        );
        
        return false;
    }

    render() {
        const { footerDrag, dragRoot} = this.props
        return (
            <HashRouter>
                <Navbar/>
                <Router/>
                <Footer footerDrag={footerDrag} dragRoot={dragRoot}>storage</Footer>
            </HashRouter>
        );
    }
}

export default App;