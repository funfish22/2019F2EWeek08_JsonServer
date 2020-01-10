import React from 'react';
import styled from 'styled-components';

import 'config/utils/configureFirebase';
import firebase from 'firebase';

interface Props {
    className?: string,
    source?: Array<{
        id: number,
        icon: string,
        name: string,
        local: string,
        time: string,
        size: string
    }>,
    onClick: any,
    sortArray: number
}

interface State { }

class List extends React.Component<Props, State> {
    static defaultProps = {
        changeSwitch: true
    }

    handleDownload = (name: any) => {
        const fileRef = firebase.storage().ref(name)
        
         // .ref 指向已存在 storage 中的檔案位置後 可以透過 getDownloadURL 取得連結
        fileRef.getDownloadURL().then(function(url) {
            fetch(url)
            .then(res => res.blob())
            .then(blob => {
                let aLink = document.createElement("a");
            
                // 用 createObjectURL 將 blob 創建一個我們本地端瀏覽器中的 URL 對象
                let url = window.URL.createObjectURL(blob);
                aLink.href = url;
                aLink.download = name;

                // Firefox 需要將 JS 建立出的 element appendChild 到 DOM 上才可以 work
                aLink.style.display = "none";
                document.body.appendChild(aLink);

                aLink.click();

                // 刪除多餘的 DOM 與 釋放記憶體
                document.body.removeChild(aLink);
                window.URL.revokeObjectURL(url);
            });
        });
    }

    render() {
        const { className, source, sortArray, onClick } = this.props;
        return(
            <ListRoot className={className}>
                <ListHead>
                    <ListIcon />
                    <ListName onClick={onClick}>Name
                        {
                            sortArray === 1 ? <Icon className='icon-arrow_downward-24px' /> : sortArray === 2 && (<Icon className='icon-arrow_upward-24px' />)
                        }
                    </ListName>
                    <ListLocal>location</ListLocal>
                    <ListTime>last modified</ListTime>
                    <ListSize>size</ListSize>
                </ListHead>
                <ListBody>
                    { source && source.map((row) => (
                        <ListLi key={row.id} onDoubleClick={() => this.handleDownload(row.name)}>
                            <ListIcon>
                                <img src={row.icon} alt="" />
                            </ListIcon>
                            <ListName>{row.name}</ListName>
                            <ListLocal>{row.local}</ListLocal>
                            <ListTime>{row.time}</ListTime>
                            <ListSize>{row.size}</ListSize>
                        </ListLi>
                    )) }
                    
                </ListBody>
                

            </ListRoot>
        )
    }
}

export default List;

const ListRoot = styled.div`
    max-width: 1110px;
    margin: 0 auto;
    padding-bottom: 125px;
`;

const ListIcon = styled.div`
    flex: 1;
    max-width: 95px;
`;

const ListName = styled.div`
    flex: 1;
    max-width: 475px;
    display: flex;
    align-items: center;
`;

const Icon = styled.span`
    margin-left: 20px;
    font-size: 24px;
`;

const ListLocal = styled.div`
    flex: 1;
    max-width: 190px;
`;

const ListTime = styled.div`
    flex: 1;
    max-width: 190px;
`;

const ListSize = styled.div`
    flex: 1;
    max-width: 160px;
`;

const ListHead = styled.div`
    display: flex;
    padding: 16px 0;
    font-weight: bold;
    text-transform: uppercase;
    border-bottom: 1px solid #D5D5D5;
`;

const ListBody = styled.ul`

`;

const ListLi = styled.li`
    display: flex;
    padding: 24px 0;
    color: #707070;
    border-bottom: 1px solid #D5D5D5;

    ${ListIcon} {
        padding-left: 24px;
    }

    ${ListName} {
        color: #000;
    }

    ${ListLocal} {
        text-transform: capitalize;
    }

    ${ListSize} {
        text-transform: uppercase;
    }

`;