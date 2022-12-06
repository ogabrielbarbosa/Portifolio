import styled from "styled-components";
import "@fontsource/space-grotesk";

export const ContainerSkills = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    margin: -10% 10% 10% 10%;
    height: 30vh;

    @media screen and (max-width: 480px){
        height: 12vh;
    }
`;

export const TextTitle = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    font-size: 50px;

    @media screen and (max-width: 480px){
        font-size: 25px
    }
`;

export const BoxSkills = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    align-items: center;
    color: ${props => props.theme.colors.background};
    padding: 30px;
    border-radius: 10px;
    box-shadow: ${props => props.theme.colors.shadow};

    @media screen and (max-width: 480px){
        padding: 9px;
    }
`;

export const Skill = styled.svg`
    height: 100px;

    @media screen and (max-width: 480px){
        height: 30px;
    }
`;