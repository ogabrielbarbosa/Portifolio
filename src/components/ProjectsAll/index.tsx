import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import ProjectsData from '../../projectsdata';

import {
    ContainerProjects,
    ContainerHorizontal,
    SubContainerProjects,
    Divider,
    SubTitle,
    SubTitleColor,
    ContainerButtons,
    ButtonArrows,
    ButtonGit,
    Projects,
    Project,
    BoxImage,
    Image,
    ContainerTitle,
    TitleProject,
    Description,
    Tools,
    AllProjects,
    TextButton
} from './styles';


import { FiExternalLink } from "react-icons/fi";

interface Props {
    toggleTheme(): void;
}

const ProjectsAll: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);
    return (
        <ContainerProjects id="portifolio">
            <ContainerHorizontal>
                <SubContainerProjects>
                    <Divider />
                    <SubTitle>
                        Meus projetos
                        <SubTitleColor> pessoais</SubTitleColor>
                    </SubTitle>
                </SubContainerProjects>

                <Projects>
                    {ProjectsData.map((item) => {
                        const { id, img, title, description, tool, link } = item;
                        return (
                            <Project key={id}>
                                <BoxImage>
                                    <Image src={img} />
                                </BoxImage>

                                <ContainerTitle>
                                    <TitleProject>{title}</TitleProject>
                                    <a href={link}><FiExternalLink color={colors.text} size={25} /></a>
                                </ContainerTitle>

                                <Description>{description}</Description>
                                <Tools>{tool}</Tools>
                            </Project>
                        )
                    })}
                </Projects>
            </ContainerHorizontal>

            <ContainerHorizontal>
                <AllProjects href='https://github.com/ogabrielbarbosa?tab=repositories'>
                    <TextButton>
                        Ver todos repositórios no GitHub
                    </TextButton>
                </AllProjects>

            </ContainerHorizontal>

        </ContainerProjects>
    );
}

export default ProjectsAll;