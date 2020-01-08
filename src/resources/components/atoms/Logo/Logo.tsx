import React from 'react';
import styled from 'styled-components';

interface Props {}

interface State {}

function Logo(props: Props, state: State) {
    return(
        <LogoRoot className="icon-logo">
            <span className="path1"></span>
            <span className="path2"></span>
            <span className="path3"></span>
        </LogoRoot>
    )
}

export default Logo;

const LogoRoot = styled.span`
    font-size: 45px;
`;