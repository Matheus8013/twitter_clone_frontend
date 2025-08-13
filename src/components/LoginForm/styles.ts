import styled from "styled-components";
import theme from "../../styles/themes";

export const LogoText = styled.h1`
    font-size: 72px;
    font-weight: bold;
    color: ${theme.colors.primary};
    text-transform: uppercase;
    margin-right: 450px;
`;

export const LoginContainer = styled.div`
    width: 100%;
    width: 1440px;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    h2 {
        margin-bottom: ${theme.spacing.large_medium};
    }

    p {
        cursor: pointer;
        font-size: ${theme.spacing.medium};
        margin-left: 56px;
        color: ${theme.colors.primary};
    }
`

export const Title = styled.h1`
    font-size: 72px;
    font-weight: bold;
    margin-bottom: 48px;
    text-align: center;
`

export const Form = styled.form`

`

export const Input = styled.input`
    width: 320px;
    display: block;
    font-size: ${theme.spacing.large_medium};
    color: #000;
    background-color: #fff;
    border: 1px solid #ccc;
    padding: ${theme.spacing.large_medium};
    font-weight: bold;
    text-align: center;
    margin-bottom: ${theme.spacing.large};
    border-radius: ${theme.spacing.large_medium};
    transition: all ease .5s;

    &::placeholder {
        color: ${theme.colors.darkGray};
    }

    &:focus {
        transition: all ease .5s;
        outline: none; 
        border-color: ${theme.colors.primary}; 
        box-shadow: 0 0 0 4px ${theme.colors.primary}60; 
    }
` 

export const LoginButton = styled.button`
    display: block;
    width: 320px;
    padding: ${theme.spacing.large_medium};;
    border-radius: ${theme.spacing.large_medium};
    background-color: ${theme.colors.primary};
    color: ${theme.colors.text};
    font-weight: bold;
    border: none;
    margin-bottom: ${theme.spacing.medium};
`

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h2 {
        margin-bottom: ${theme.spacing.large};
    }


    input {
        background-color: transparent;
        border: 2px solid ${theme.colors.primary};
        color: ${theme.colors.primary};
    }
`

export const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#0a0a0a',
        border: 'none',
        borderRadius: '10px',
        padding: '44px',
        width: '90%',
        maxWidth: '600px',
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
};