import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { ContainerAbout, Image, SubContainerAbout, Divider, SubTitle, SubTitleColor, Description, ContainerButtons, ContactButton, AboutButton, TextButton, TextButtonAbout } from './styles';

import photo from '../../assets/photo.png';

import { FiArrowRight } from "react-icons/fi";
interface Props {
    toggleTheme(): void;
}

const About: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <ContainerAbout id="sobre">
            <Image src={photo} alt="Gabriel Barbosa" />

            <SubContainerAbout>
                <Divider />
                <SubTitle>
                    Um pouco sobre
                    <SubTitleColor> mim</SubTitleColor>
                </SubTitle>

                <Description>
                    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

                </Description>

                <ContainerButtons>
                    <ContactButton href="#contato">
                        <TextButton>
                            Contato
                        </TextButton>
                    </ContactButton>
                    <AboutButton href="#contato">
                        <TextButtonAbout>
                            Saber Mais
                        </TextButtonAbout>
                    </AboutButton>
                </ContainerButtons>
            </SubContainerAbout>
        </ContainerAbout>
    );
}

export default About;