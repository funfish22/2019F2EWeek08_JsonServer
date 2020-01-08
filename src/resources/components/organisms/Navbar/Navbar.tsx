import React from 'react';
import styled from 'styled-components';

import Logo from 'resources/components/atoms/Logo';
import Breadcrumb from 'resources/components/atoms/Breadcrumb';
import SearchBar from 'resources/components/atoms/SearchBar';

const source = [
    {
        id: 0,
        title: 'starred'
    },
    {
        id: 1,
        title: 'trash'
    }
]

interface Props {}

interface State {}

class Navbar extends React.Component<Props, State> {
    render() {
        
        return(
            <Header>
                <Container>
                    <Logo />
                    <Bread source={source}/>
                    <Search/>
                </Container>
                
            </Header>
        )
    }
}

export default Navbar;

const Header = styled.header`
    background-color: #fff;
    box-shadow: 0px 2px 0px #D5D5D5;
    padding: 24px 0;
    position: relative;
`;

const Container = styled.div`
    max-width: 1110px;
    width: calc(100% - 30px);
    margin: 0 auto;
    display: flex;
    align-items: center;
`;

const Bread = styled(Breadcrumb)`
    margin: 0 64px;
`;

const Search = styled(SearchBar)`
    margin-left: auto;
`;