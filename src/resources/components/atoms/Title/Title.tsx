import React from 'react';
import styled from 'styled-components';

interface Props {
    children: string,
    className?: string
}

interface State {}

class Title extends React.Component<Props, State> {
    render() {
        const { children, className} = this.props;
        return(
            <div className={className}>{children}</div>
        )
    }
}

export default Title;