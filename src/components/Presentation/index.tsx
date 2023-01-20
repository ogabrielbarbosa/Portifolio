import React, { useContext, useCallback } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { FaMoon } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import Typewriter from 'typewriter-effect';

import { ContainerPresentation, ContainerMe, TextName, SubText, Navigations, TextNavs, Imagem } from './styles';

import hiImage from '../../assets/mock/hi.png';

interface Props {
    toggleTheme(): void;
}

const Presentation: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <ContainerPresentation>
            <ContainerMe>
                <TextName>
                    Gabriel Barbosa
                </TextName>
                <SubText>
                    <Typewriter
                        options={{
                            autoStart: true,
                            loop: true,
                            delay: 30,
                            strings: [
                                "< Front End Developer />",
                                "< Desenvolvedor Front End />"
                            ]
                        }}
                    />
                </SubText>

            </ContainerMe>

            <Navigations>
                <TextNavs href="#sobre">Sobre</TextNavs>
                <TextNavs href="#projetos">Projetos</TextNavs>
                <TextNavs href="#contato">Contato</TextNavs>
                <li className='switchCenter'>
                    <Switch
                        onChange={toggleTheme}
                        checked={title === 'light'}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        handleDiameter={20}
                        offHandleColor=""
                        uncheckedHandleIcon={<FaMoon color='#2E2F31' size={20} />}
                        onHandleColor="#DCE0E2"
                        offColor="#DCE0E2"
                        onColor="#2E2F31"
                        activeBoxShadow="0 0 2px 3px #33bbff0"
                    />
                </li>
            </Navigations>

            <Imagem src={hiImage}/>
        </ContainerPresentation >
    );
}

export default Presentation;