import styled from "styled-components";
import "@fontsource/space-grotesk";

export const ContainerFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
`;

export const Text = styled.span`
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    color: ${props => props.theme.colors.text};
`;
