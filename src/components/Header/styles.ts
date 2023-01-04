import styled from "styled-components";

export const ContainerHeader = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 15vh;
    justify-content: space-between;
    margin: 0 10%;
    background: ${props => props.theme.colors.background};
`;

export const Menu = styled.ul`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    list-style: none;

    @media screen and (max-width: 768px){    
        flex-direction: column;
    }
`;

export const Navs = styled.nav`
    @media screen and (max-width: 768px){    
        display: none;
    }
`;

export const ContatoButton = styled.button`
    font-weight: 700;
    font-size: 15px;
    background: #37D892;
    border-radius: 100px;
    text-align: center;
    padding: 10px 25px 10px 25px;
    color: ${props => props.theme.colors.buttonText};
`;

export const TextHeader = styled.a`
    color: ${props => props.theme.colors.text};
    font-weight: 700;
    font-size: 15px;
    font-family: 'Inter', sans-serif;
    font-style: normal;
`;

export const Logo = styled.svg`
    height: 50%;
`;

export const LogoColor = styled.path`
    fill: ${props => props.theme.colors.text};
`;

export const ButtonHide = styled.button`
    display: none;
    background: ${props => props.theme.colors.background};
    @media screen and (max-width: 768px){    
        display: flex;
    }
`;