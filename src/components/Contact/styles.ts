import styled from "styled-components";
import "@fontsource/space-grotesk";

export const ContainerContact = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 0 10% 20% 10%;
    height: 30vh;
    justify-content: space-between;

    @media screen and (max-width: 480px){    
        height: 60vh;
    }
`;

export const SubContainerTexts = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const TextTitle = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    font-size: 50px;

    @media screen and (max-width: 480px){    
        font-size: 25px;
    }

`;

export const SubTextTitle = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    color: ${props => props.theme.colors.text};
    font-size: 20px;
    width: 45%;
    text-align: center;
    margin-top: 10px;

    @media screen and (max-width: 480px){    
        font-size: 15px;
        width: 90%;
    }
`;

export const SubContainerContact = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;

    @media screen and (max-width: 480px){    
        flex-direction: column;
        width: 100%;
        align-items: center;
    }
`;

export const BoxContact = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    border: 1px solid #37D892;
    border-radius: 100px;
    padding: 15px 10px 15px 10px;
    width: 150px;
    justify-content: space-around;

    @media screen and (max-width: 480px){    
        width: 80%;
    }
`;

export const Icon = styled.svg`

`;

export const BoxTexts = styled.a`
    display: flex;
    flex-direction: column;
`;

export const TitleContact = styled.a`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: ${props => props.theme.colors.text};
    width: 80px;

    @media screen and (max-width: 480px){    
        width: 150px;
    }
`;

export const LinkText = styled.a`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    color: ${props => props.theme.colors.text};
    width: 70px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (max-width: 480px){    
        width: 150px;
    }
`;

export const BoxCV = styled.a`
    display: flex;
    flex-direction: row;
    border: 1px solid #37D892;
    background: #37D892;
    border-radius: 100px;
    padding: 15px 10px 15px 10px;
    width: 150px;
    justify-content: space-around;

    @media screen and (max-width: 480px){    
        width: 80%;
    }
`;

export const TitleContactCV = styled.a`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    color: #fff;
    width: 80px;

    @media screen and (max-width: 480px){    
        width: 150px;
    }
`;

export const LinkTextCV = styled.a`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    color: #fff;
    width: 70px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    @media screen and (max-width: 480px){    
        width: 150px;
    }
`;