import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { ContainerPrincipal, TextName, SubText } from './styles';

interface Props {
    toggleTheme(): void;
}

const PrincipalProjects: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <ContainerPrincipal>
            <TextName>
                Gabriel Barbosa
            </TextName>
            <SubText>
                &lt;Projetos/&gt;
            </SubText>
        </ContainerPrincipal>
    );
}

export default PrincipalProjects;