import styled from "styled-components";
import "@fontsource/space-grotesk";

export const ContainerAbout = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    gap: 30px;
    padding: 150px 0px;
`;

export const SubtitleContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
`;

export const SubTitle = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    font-size: 40px;
    
    @media screen and (max-width: 468px){    
        font-size: 35px;
    }
`;

export const ContainerTech = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
`;

export const BoxTech = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 20px;
    background: ${props => props.theme.colors.background};
    box-shadow: ${props => props.theme.colors.shadow};
    border-radius: 5px;
`;

export const TextTech = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    color: ${props => props.theme.colors.text};
    font-size: 20px;
`;


