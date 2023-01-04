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
    flex-direction: column;
    gap: 40px;
    @media screen and (max-width: 1255px){    
        flex-direction: column;
    }
`;

export const SubContainerProjects = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
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
        width: 60%;
    }

    @media screen and (max-width: 1472px){    
        width: 20%;
    }

    @media screen and (max-width: 1108px){    
        width: 30%;
    }

    @media screen and (max-width: 750px){    
        width: 49%;
    }

    @media screen and (max-width: 480px){    
        width: 49%;
    }

    @media screen and (max-width: 480px){
        width: 78%;
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

export const Projects = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-content: space-between;
    gap: 20px;
    flex-wrap: nowrap;

    @media screen and (max-width: 1472px){    
        grid-template-columns: repeat(2,1fr);
    }

    @media screen and (max-width: 945px){    
        grid-template-columns: repeat(1,1fr);
    }

`;

export const Project = styled.div`
    display: flex;
    background: ${props => props.theme.colors.background};
    box-shadow: ${props => props.theme.colors.shadow};
    flex-direction: column;
    border-radius: 20px;
`;

export const BoxImage = styled.div`
    display: flex;
    background: #E6E9F0;
    height: 250px;
    justify-content: center;
    align-items: center;
    border-radius: 20px 20px 0px 0px;
`;

export const Image = styled.img`
    display: flex;
    height: 70%;
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