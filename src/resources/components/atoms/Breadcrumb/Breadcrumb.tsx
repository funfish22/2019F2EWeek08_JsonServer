import React from 'react';
import styled from 'styled-components';

const array = [
    {
        id: 0,
        title: 'starred'
    },
    {
        id: 1,
        title: 'trash'
    }
]

interface Props {
    className?: string,
    source?: Array<{
        id: number,
        title: string
    }>
}

interface State {}

class Breadcrumb extends React.Component<Props, State> {
    static defaultProps = {
        source: array
    }
    render() {
        const {className, source} = this.props;
        return(
            <Ul className={className}>
                {
                    source && source.map((row) => (
                        <Li key={row.id}>{row.title}</Li>
                    ))
                }
            </Ul>
        )
    }
}

export default Breadcrumb;

const Ul = styled.ul`
    white-space: nowrap;
`;

const Li = styled.li`
    text-transform: uppercase;
    margin-right: 32px;
    display: inline-block;

    &:last-of-type {
        margin-right: 0;
    }
`;