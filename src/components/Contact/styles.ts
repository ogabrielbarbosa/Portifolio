import styled from "styled-components";
import "@fontsource/space-grotesk";

export const ContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 150px 0px;
`;

export const SubContainerTexts = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TextTitle = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    font-size: 40px;

    @media screen and (max-width: 468px){    
        font-size: 35px;
    }
`;

export const SubTextTitle = styled.span`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 500;
    color: ${props => props.theme.colors.secundary};
    font-size: 20px;
`;

export const SubContainerContact = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const BoxContact = styled.a`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-radius: 5px;
    padding: 15px 10px 15px 10px;
    width: 200px;
    justify-content: space-around;
    border: 1px solid ${props => props.theme.colors.background};;
    transition: all 0.3s ease-in-out;

    &:hover, :focus{
        background-color: #37D89220;
        border: 1px solid #37D892;
    }
`;

export const Icon = styled.svg`

`;

export const BoxTexts = styled.a`
    display: flex;
    flex-direction: column;
`;

export const TitleContact = styled.a`
    font-family: 'Poppins';
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
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    color: ${props => props.theme.colors.text};
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const BoxCV = styled.a`
    display: flex;
    flex-direction: row;
    border: 1px solid #37D892;
    align-items: center;
    background: #37D892;
    border-radius: 5px;
    padding: 15px 10px 15px 10px;
    width: 200px;
    justify-content: space-around;
    border: 1px solid #37D892;
    transition: all 0.3s ease-in-out;

    &:hover, :focus{
        background-color: #37D89220;
        border: 1px solid #37D892;
    }
`;

export const TitleContactCV = styled.a`
    font-family: 'Poppins';
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
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    color: ${props => props.theme.colors.text};
    width: 100px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const ContainerSocialMedias = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(0px, 1fr));
    width: 200px;
`;

export const SocialMedia = styled.a`
    display: flex;
    height: 60px;
    width: 60px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    border: 1px solid ${props => props.theme.colors.background};;
    transition: all 0.3s ease-in-out;

    &:hover, :focus{
        background-color: #37D89220;
        border: 1px solid #37D892;
    }
`;

export const Imagem = styled.img`
    position: absolute;
    right: 0;
    left: 60%;
    height: 20vw;
    
    @media screen and (max-width: 980px){  
        display: none;
    }

    animation: float 10s ease-in-out infinite;

    @keyframes float {
        0%{
            transform: translateY(0);
        }
        20%{
            transform: translateY(-25px);
        }
        40%{
            transform: translateX(-25px);
        }
        60%{
            transform: translateY(-25px);
        }
        80%{
            transform: translateX(-25px);
        }
        100%{
            transform: translateY(0);
        }
    }
`;