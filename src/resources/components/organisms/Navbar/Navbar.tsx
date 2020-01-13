import React from 'react';
import styled from 'styled-components';

import Logo from 'resources/components/atoms/Logo';
import Breadcrumb from 'resources/components/atoms/Breadcrumb';
import SearchBar from 'resources/components/atoms/SearchBar';

const source = [
    {
        id: 0,
        title: 'starred',
        onStar: true
    },
    {
        id: 1,
        title: 'trash',
        onStar: false
    }
]

interface Props {
    onSearch: Function,
    onStar: any
}

interface State {}

class Navbar extends React.Component<Props, State> {
    render() {
        const { onSearch, onStar } = this.props
        return(
            <Header>
                <Container>
                    <Logo />
                    <Bread source={source} onStar={onStar}/>
                    <Search onSearch={onSearch}/>
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