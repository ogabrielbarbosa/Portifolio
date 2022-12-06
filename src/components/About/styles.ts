import styled from "styled-components";
import "@fontsource/space-grotesk";

export const ContainerAbout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin: 0 10% 10% 10%;
    height: 50vh;

    @media screen and (max-width: 480px){
        flex-direction: column-reverse;
        height: 55vh;
    }
`;

export const Image = styled.img`
    width: 40%;
    
    @media screen and (max-width: 480px){
        width: 100%;
    }
`;

export const SubContainerAbout = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 50%;
    height: 200px;

    @media screen and (max-width: 480px){
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
    width: 30%;
    font-style: normal;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    font-size: 25px;

    @media screen and (max-width: 480px){
        width: 70%;
    }
`;

export const SubTitleColor = styled.span`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    color: #37D892;
    font-size: 25px;
`;

export const Description = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    color: ${props => props.theme.colors.secundary};
    font-size: 15px;
    text-align: justify; 
    line-break: anywhere;
`;

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;

export const ContactButton = styled.a`
    display: flex;
    background: #37D892;
    border: 1px solid #37D892;
    padding: 20px 40px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    width: fit-content;

    @media screen and (max-width: 480px){    
        padding: 15px 25px;
    }
`;

export const AboutButton = styled.a`
    display: flex;
    border: 1px solid #37D892;
    padding: 20px 40px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    width: fit-content;
    
    @media screen and (max-width: 480px){    
        padding: 15px 25px;
    }
`;

export const TextButtonAbout = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    text-align: center;
    border-radius: 5px;
    font-size: 17px;
`;

export const TextButton = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    color: #fff;
    text-align: center;
    border-radius: 5px;
    font-size: 17px;
`;