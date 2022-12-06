import styled from "styled-components";
import "@fontsource/space-grotesk";

export const ContainerPrincipal = styled.div`
    display: flex;
    align-items: center;
    box-sizing: border-box;
    height: 40vh;
    justify-content: center;
    flex-direction: column;
    margin: 0 10%;
    background: ${props => props.theme.colors.background};
`;

export const TextName = styled.span`
    color: ${props => props.theme.colors.text};
    font-weight: 700;
    font-size: 6vw;
    font-family: 'Space Grotesk';
    font-style: normal;

    @media screen and (max-width: 480px){    
        font-size: 8.3vw;
    }
`;

export const SubText = styled.span`
    font-family: 'Space Grotesk';
    font-style: normal;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    font-size: 2.6vw;

    @media screen and (max-width: 480px){    
        font-size: 4.2vw;
    }
`;