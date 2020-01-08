import * as React from 'react';
import styled from 'styled-components';

const themeConfig = {
    default: {
        bgColor: 'transparent',
        fontColor: '#707070',
        borderColor: 'transparent'
    },
    primary: {
        bgColor: '#2A8CFD',
        fontColor: '#FFFFFF',
        borderColor: '#2A8CFD'
    }
};

const sizeConfig = {
    default: {
        fontSize: '16px',
        minHeight: '48px',
        minWeight: '120px'
    },
    small: {
        fontSize: '14px',
        minHeight: '30px',
        minWeight: '100px'
    }
};

interface Props {
    style?: React.CSSProperties,
    className?: string,
    children?: string,
    theme?: 'default' | 'primary',
    size?: 'default' | 'small',
    type?: 'button' | 'submit',
    onClick: any
};

interface State {};

interface MyStyle {
    config: any;
}

class Button extends React.PureComponent<Props, State>{
    static defaultProps = {
        theme: 'default',
        size: 'default',
        type: 'button'
    };

    render() {
        const {style, className, children, theme, size, onClick, ...buttonProps} = this.props

        const themeProps = theme ? themeConfig[theme] : {};
        const sizeProps = size ? sizeConfig[size]: {};

        return(
            <ButtonRoot {...buttonProps} style={style} onClick={onClick} className={className} config={{...themeProps, ...sizeProps}}>{children}</ButtonRoot>
        )
    }
}

export default Button;

const ButtonRoot = styled.button`
    border: 1px solid ${(props: MyStyle) => props.config.borderColor};
    border-radius: 8px;
    min-width: ${(props: MyStyle) => props.config.minWeight};
    min-height: ${(props: MyStyle) => props.config.minHeight};
    background-color: ${(props: MyStyle) => props.config.bgColor};
    color: ${(props: MyStyle) => props.config.fontColor};
    cursor: pointer;
    font-family: Arial, Helvetica, '微軟正黑體', sans-serif;
    font-size: ${(props: MyStyle) => props.config.fontSize};
    text-transform: uppercase;

    /* &:not(:last-of-type){
        margin-right: 20px;
    } */
`;