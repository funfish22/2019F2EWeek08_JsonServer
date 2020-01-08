import React from 'react';
import styled from 'styled-components';

interface Props {
    className?: string,
}

interface State {}

class SearchBar extends React.Component<Props, State> {
    render() {
        const { className } = this.props;
        return(
            <SearchBarRoot className={className}>
                <Label>
                    <Input type="text" />
                </Label>
                <Button type="button">
                    <Icon className="icon-search-24px"></Icon>
                </Button>
            </SearchBarRoot>
        )
    }
}

export default SearchBar;

const SearchBarRoot = styled.div`
    width: 540px;
    max-width: 100%;
    display: flex;
    align-items: center;
    background-color: #EFEFEF;
    border-radius: 24px;
    padding: 12px 20px;
`;

const Label = styled.label`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    border: none;
    width: 100%;
    background-color: transparent;
    outline: none;
`;

const Button = styled.button`
    min-width: 24px;
    cursor: pointer;
`;

const Icon = styled.span`
    font-size: 24px;
`;