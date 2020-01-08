import React from 'react';
import styled from 'styled-components';

import Title from 'resources/components/atoms/Title';

interface Props {
    className?: string,
    children: string,
    footerDrag: boolean,
    dragRoot: boolean
}

interface State { }

interface MyStyle {
    drop: boolean;
}

class ListBar extends React.Component<Props, State> {
    render() {
        const { children, className, footerDrag, dragRoot } = this.props;
        return (
            <>
                <ToolBarRoot className={className} drop={footerDrag}>
                    <Container>
                        <TitleBlock>{children}</TitleBlock>
                        <Storage>
                            <span>16 gb </span> / <span>200 gb</span>
                        </Storage>
                        {
                            footerDrag && (
                                <Drag>
                                    <DragIcon>
                                        <Icon className="icon-cloud_upload-24px"></Icon>
                                    </DragIcon>
                                    <DragText>drop files to upload</DragText>
                                </Drag>
                            )
                        }
                    </Container>
                </ToolBarRoot>
                <DragContainer drop={dragRoot} id="DragContainer"/>
                
            </>
        )
    }
}

export default ListBar;

const ToolBarRoot = styled.div`
    padding: 22px 0;
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${(props: MyStyle) => !props.drop ? '#fff' : '#000'};
    color: ${(props: MyStyle) => !props.drop ? '#000' : '#fff'};
`;

const Container = styled.div`
    max-width: 1110px;
    width: calc(100% - 30px);
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

const TitleBlock = styled(Title)`
    font-size: 24px;
    font-weight: bold;
    text-transform: uppercase;
`;

const IconRoot = styled.div`
    display: flex;
    align-items: center;
    margin-left: auto;
`;

const Hr = styled.hr`
    height: 23px;
    width: 1px;
    background-color: #707070;
    border: none;
    margin: 0 32px;
`;

const Storage = styled.div`
    text-transform: uppercase;
    margin-left: 16px;
`;

const Drag = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateY(-50%);
    margin-left: -24px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const DragIcon = styled.div`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
`;

const Icon = styled.div`
    color: #2A8CFD;
    font-size: 24px;
`;

const DragText = styled.p`
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 8px;
`;

const DragContainer = styled.div`
    position: fixed;
    right: 0;
    left: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
    display: ${(props: MyStyle) => !props.drop ? 'none' : 'block'};
`;