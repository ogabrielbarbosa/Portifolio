import styled from "styled-components";
import "@fontsource/space-grotesk";

export const ContainerProjects = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 10% 10% 10%;
`;

export const ContainerHorizontal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    @media screen and (max-width: 1255px){    
        flex-direction: column;
    }
`;

export const SubContainerProjects = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 30%;
    height: 200px;

    @media screen and (max-width: 1255px){    
        width: 100%;
        height: 150px;
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
    width: 50%;
    font-style: normal;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    font-size: 25px;
    
    @media screen and (max-width: 480px){    
        width: 60%;
    }
`;

export const SubTitleColor = styled.span`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 700;
    color: #37D892;
    font-size: 25px;
`;

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`;

export const ButtonArrows = styled.button`
    display: flex;
    background: ${props => props.theme.colors.background};
    padding: 20px;
    box-shadow: ${props => props.theme.colors.shadow};
    border-radius: 100px;
`;

export const ButtonGit = styled.a`
    display: flex;
    background: #37D892;
    padding: 20px 40px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    width: fit-content;
`;

export const Carousel = styled.div`
    display: flex;
    width: 900px;
    justify-content: space-between;
    padding: 1%;
    gap: 20px;
    flex-wrap: nowrap;

    @media screen and (max-width: 480px){    
        width: 100%;
    }
`;

export const Project = styled.div`
    display: flex;
    background: ${props => props.theme.colors.background};
    box-shadow: ${props => props.theme.colors.shadow};
    flex-direction: column;
    border-radius: 20px;
`;

export const Image = styled.div`
    display: flex;
    height: 250px;
    background: #000;
    border-radius: 20px 20px 0px 0px;
`;

export const ContainerTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 30px;
`;

export const TitleProject = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    color: ${props => props.theme.colors.text};
    font-size: 25px;
`;

export const Description = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    color: ${props => props.theme.colors.secundary};
    margin: 0 30px;
    text-align: justify;
`;

export const Tools = styled.span`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    color: ${props => props.theme.colors.secundary};
    margin: 20px 30px 30px 30px;
`;

export const AllProjects = styled.a`
    display: flex;
    background: #37D892;
    padding: 20px 40px;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    width: fit-content;
    margin-top: 60px;
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