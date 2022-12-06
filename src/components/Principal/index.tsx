import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { ContainerPrincipal, TextName, SubText } from './styles';

interface Props {
    toggleTheme(): void;
}

const Principal: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <ContainerPrincipal>
            <TextName>
                Gabriel Barbosa
            </TextName>
            <SubText>
                &lt;Front End Developer/&gt;
            </SubText>
        </ContainerPrincipal>
    );
}

export default Principal;