import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { ContainerPrincipal, TextName, SubText } from './styles';

interface Props {
    toggleTheme(): void;
}

const PrincipalAbout: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <ContainerPrincipal>
            <TextName>
                Gabriel Barbosa
            </TextName>
            <SubText>
                &lt;Sobre/&gt;
            </SubText>
        </ContainerPrincipal>
    );
}

export default PrincipalAbout;