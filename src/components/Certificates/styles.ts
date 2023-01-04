import styled from "styled-components";
import "@fontsource/space-grotesk";

export const ContainerCertificates = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 10% 10% 10%;
    gap: 40px;
    @media screen and (max-width: 1255px){    
        flex-direction: column;
    }
`;

export const SubContainerCertificates = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 98%;
    height: 100px;

    @media screen and (max-width: 1255px){    
        width: 100%;
    }
`;

export const Divider = styled.div`
    height: 5px;
    width: 300px;
    background-color: #37D892;
    background-image: linear-gradient(to right, #37D892 , #5825C7);

    @media screen and (max-width: 480px){    
        width: 100%;
    }
`;

export const SubTitle = styled.span`
    font-family: 'Inter', sans-serif;
    width: 15%;
    font-style: normal;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    font-size: 25px;
    
    @media screen and (max-width: 480px){    
        width: 50%;
    }
`;

export const SubTitleColor = styled.span`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    color: #37D892;
    font-size: 25px;
`;

export const BoxCertificates = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    padding: 1%;
    gap: 20px;
    flex-wrap: nowrap;
    justify-items: center;

    @media screen and (max-width: 1270px){ 
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 870px){    
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 480px){    
        grid-template-columns: repeat(1, 1fr);
        width: 100%;
    }
`;

export const Certificate = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 1);
    transition: all 0.3s ease;
`;

export const Image = styled.img`
    display: flex;
    width: 100%;
    transition: all 0.3s ease;
    &:hover{
        opacity: 0.5;
    }
`;