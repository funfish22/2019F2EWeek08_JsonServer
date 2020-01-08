import React from 'react';
import styled from 'styled-components';

import Title from 'resources/components/atoms/Title';
import Button from 'resources/components/atoms/Button';

interface Props {
    className?: string,
    open: boolean,
    onClick: any,
    onOk: any,
    ref: React.RefObject<any>
}

interface State {
    folderName: string
}

class NewFolder extends React.Component<Props, State> {
    myRef: React.RefObject<any>;

    constructor(props: Readonly<Props>) {
        super(props);
        this.state = {
            folderName: ''
        };
        this.myRef = React.createRef();
    }

    componentDidUpdate() {
        this.myRef.current.focus();
    }

    handleAddFolderName = (e: any) => {
        this.setState({
            folderName: e.target.value
        })
    }

    handleAddFolder = (e:any) => {
        const { onOk, onClick } = this.props;
        const { folderName } = this.state;

        if (folderName.trim() === '') {
            alert('請輸入資料夾名稱')
        } else {
            this.setState({
                folderName: e.target.value
            })
            onOk(folderName)
            onClick()
        }
        
        this.setState({
            folderName: ''
        })
    }

    handleEnter = (e:any) => {
        const { onOk, onClick } = this.props;
        const { folderName } = this.state;

        if(e.keyCode === 13) {
            if (folderName.trim() === '') {
                alert('請輸入資料夾名稱')
            } else {
                onOk(folderName)
                onClick()

                this.setState({
                    folderName: ''
                })
            }
            
        }
    }

    render() {
        const { className, onClick } = this.props;
        const { folderName } = this.state;
        return(
            <NewFolderRoot className={className}>
                <Top>
                    <TitleBlock>new folder</TitleBlock>
                    <IconClose onClick={onClick}/>
                </Top>
                <InputRoot>
                    <Icon className="icon-folder-24px"></Icon>
                    <Input type="text" ref={this.myRef} onChange={this.handleAddFolderName} value={folderName} onKeyDown={this.handleEnter}/>
                </InputRoot>

                <ButtonRoot>
                    <Button onClick={onClick}>cancel</Button>
                    <Button onClick={this.handleAddFolder} theme="primary" type="submit">ADD</Button>
                </ButtonRoot>
                
            </NewFolderRoot>
        )
    }
}

export default NewFolder;

const NewFolderRoot = styled.div`
    max-width: 350px;
    padding: 24px 48px;
    box-shadow: 0px 8px 16px rgba(0,0,0,.29);
    background-color: #fff;
    border-radius: 8px;
    margin-top: 10px;
    position: relative;
    
    &:after{
        position: absolute;
        content: '';
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 10px 10px 10px;
        border-color: transparent transparent #ffffff transparent;
        top: -10px;
        right: 50px;
    }
`;

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const TitleBlock = styled(Title)`
    font-size: 24px;
    text-transform: uppercase;
    font-weight: bold;
`;

const IconClose = styled.span`
    display: inline-block;
    width: 24px;
    height: 24px;
    position: relative;
    cursor: pointer;

    &:after,&:before{
        content: '';
        position: absolute;
        width: 15px;
        height: 2px;
        background-color: #000;
        top: 50%;
        left: 50%;
    }
    &:after{
        transform: translate(-50%, -50%) rotate(45deg);
    }
    &:before{
        transform: translate(-50%, -50%) rotate(-45deg);
    }
`;

const InputRoot = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #2A8CFD;
    border-radius: 8px;
    padding: 17px 24px;
    margin: 16px 0;
`;

const Icon = styled.span`
    font-size: 24px;
    color: #2A8CFD;
    margin-right: 8px;
`;

const Input = styled.input`
    padding: 0;
    border: none;
    outline: none;
    color: #2A8CFD;
`;

const ButtonRoot = styled.div`
    display: flex;
    justify-content: space-between;
`;