import React from 'react';
import styled from 'styled-components';

import FileFolder from 'resources/components/atoms/FileFolder';

// const array = [
//     {
//         id: 0,
//         name: 'advertisement'
//     },
//     {
//         id: 1,
//         name: 'business'
//     },
//     {
//         id: 2,
//         name: 'commercial'
//     },
//     {
//         id: 3,
//         name: 'customer'
//     },
//     {
//         id: 4,
//         name: 'facebook'
//     },
//     {
//         id: 5,
//         name: 'growth hacker'
//     },
//     {
//         id: 6,
//         name: 'Motion design'
//     },
//     {
//         id: 7,
//         name: 'web practice'
//     }
// ]

interface Props {
    className?: string,
    active: number,
    source?: Array<{
        id: number,
        name: string,
        star: boolean
    }>,
    onClick: Function
}

interface State {}

class FolderBlock extends React.Component<Props, State> {
    // static defaultProps = {
    //     source: array
    // }

    handleChecked = (e:any, id: number) => {
        const { onClick } = this.props;

        onClick(e, id)
    }

    render() {
        const { className, source, active } = this.props;
        return(
            <FolderBlockRoot className={className}>
                <FolderBlockContainer>
                    { 
                        source && source.map((row) => {
                            return (
                                <FileFolder active={active === row.id} star={row.star} key={row.id} onClick={(e:any) => this.handleChecked(e, row.id)}>{row.name}</FileFolder>
                            )
                        }) 
                    }
                    
                </FolderBlockContainer>
                
            </FolderBlockRoot>
            
        )
    }
}

export default FolderBlock;

const FolderBlockRoot = styled.div`
    max-width: 1110px;
    margin: 0 auto;
`;

const FolderBlockContainer =styled.div`
    margin: -12px -15px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;