import React from 'react';
import styled, {css} from 'styled-components';

interface Props {
    children: string,
    onClick: Function,
    star: boolean,
    active: boolean
}

interface State {}

interface MyStyle {
    active: boolean;
}

class FileFolder extends React.Component<Props, State> {

    handleAddStar = (e: any) => {
        const {onClick} = this.props;
        // const {star} = this.state;

        // this.setState({
        //     star: !star
        // })

        onClick(e)
    }

    render() {
        const {children, active, star} = this.props;
        return(
            <FileFolderRoot onClick={this.handleAddStar} active={active}>
                {
                    !star ? <Icon style={active ? {color: '#2A8CFD'} : {color: '#000'}} className="icon-folder-24px"></Icon> : <Icon className="icon-folder_special-24px"></Icon>
                }
                {/* <FileFolderImg src={!star ? "assets/img/folder-24px.svg" : "assets/img/folder_special-24px.svg"} alt="" /> */}
                <FileFolderName>{children}</FileFolderName>
            </FileFolderRoot>
        )
    }
}

export default FileFolder;


const FileFolderName = styled.span`
    display: inline-block;
    vertical-align: middle;
    text-transform:capitalize;
    transition: .5s;
`;

const Icon = styled.span`
    display: inline-block;
    vertical-align: middle;
    margin-right: 16px;
    font-size: 24px;
`;

const FileFolderRoot = styled.div`
    width: 100%;
    max-width: 255px;
    padding: 22px 24px 24px 24px;
    border-top: 2px solid #fff;
    box-shadow: 0px 2px 4px #00000029;
    border-radius: 8px;
    background-color: #fff;
    transition: .5s;
    cursor: pointer;
    margin: 12px 15px;

    ${(props: MyStyle) => props.active && css`
        border-top-color: #2A8CFD;

        ${FileFolderName} {
            color: #2A8CFD;
        }
    `};

    &:hover{
        border-top-color: #2A8CFD;
        &:after{

        }

        ${FileFolderName} {
            color: #2A8CFD;
        }
    };
`;