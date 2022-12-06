import styled from "styled-components";
import "@fontsource/space-grotesk";

export const ContainerWaves = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: -11%;
    gap: 100px;
`;

export const ContainerArrow = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    margin-top: 30em;
    gap: 100px;

    @media screen and (max-width: 480px){    
        margin-top: 12em;
    }
`;

export const WaveLeft = styled.svg`
    height: 1268;
`;

export const WaveRight = styled.svg`
    height: 1268;

    @media screen and (max-width: 480px){    
        display: none;
    }
`;