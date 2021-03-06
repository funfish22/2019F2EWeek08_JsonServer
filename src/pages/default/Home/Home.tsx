import React from 'react';

import ToolBar from 'resources/components/organisms/ToolBar';
import ListBar from 'resources/components/organisms/ListBar';

import FolderBlock from 'resources/components/molecules/FolderBlock'
import List from 'resources/components/organisms/List';

interface Props {
    filterList: any,
    folderArray: any,
    filterFolder: any,
    Advanced: boolean,
    targetFolder: number,
    sortArray: number,
    over: boolean,
    searchStar: boolean,
    advanced_open: Function,
    target_folder: Function,
    removeFolderRequest: Function,
    add_star: Function,
    sort_files: Function,
    createFolderRequest: Function
}

interface State { }

class Home extends React.PureComponent<Props, State> {

    handleOpenAdvanced = (e: MouseEvent, id:number) => {
        const { advanced_open, target_folder } = this.props

        e.stopPropagation();

        advanced_open(true)
        target_folder(id)
    }

    handleAddFolder = (folderName: string) => {
        const { createFolderRequest } = this.props

        createFolderRequest(folderName)
    }

    handleAddStar = (e: MouseEvent) => {
        e.stopPropagation();
        const { targetFolder, add_star } = this.props

        add_star(targetFolder)
    }

    handleSort = () => {
        const { sort_files, sortArray } = this.props

        sort_files(sortArray)
    }

    render() {
        const { filterList, Advanced, targetFolder, folderArray, sortArray, over, removeFolderRequest, searchStar, filterFolder } = this.props
        return(
            <>
                <ToolBar Advanced={Advanced} onStar={this.handleAddStar} onOk={this.handleAddFolder} onRemove={() => removeFolderRequest(targetFolder)}/>
                { 
                    over ? 
                    <>
                        <ListBar>folders</ListBar>
                        {
                            !searchStar ? 
                            <FolderBlock source={folderArray} onClick={this.handleOpenAdvanced} active={targetFolder}/> :
                            <FolderBlock source={filterFolder} onClick={this.handleOpenAdvanced} active={targetFolder}/>
                        }
                        <ListBar>files</ListBar>
                        <List source={filterList} onClick={this.handleSort} sortArray={sortArray}/>
                    </> :
                    <div style={{textAlign: "center"}}>讀取中</div>
                }
            </>
        )
    }
}

export default Home;