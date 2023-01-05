import React, { useContext, useCallback } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { FaMoon } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

import Typewriter from 'typewriter-effect';

import { ContainerPresentation, ContainerMe, TextName, SubText, Navigations, TextNavs, Svg } from './styles';


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

            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 385 400" fill="none">
                <path d="M370.68 271.085C349.349 304.549 323.685 328.736 293.689 343.646C263.692 358.556 232.863 373.963 201.2 389.867C169.537 405.77 139.873 402.954 112.21 381.418C84.5464 359.881 57.8828 336.854 32.2191 312.335C6.5554 287.817 -3.77674 257.997 1.22268 222.876C6.22211 187.755 11.7215 148.989 17.7208 106.579C23.7201 64.1687 46.8841 33.6863 87.2127 15.1318C127.541 -3.42268 167.703 -4.91366 207.699 10.6589C247.694 26.2314 277.024 49.9215 295.689 81.7292C314.353 113.537 336.851 144.682 363.181 175.164C389.511 205.647 392.011 237.62 370.68 271.085Z" fill="url(#paint0_linear_263_4)" />
                <defs>
                    <linearGradient id="paint0_linear_263_4" x1="0" y1="0" x2="0" y2="400" gradientUnits="userSpaceOnUse">
                        <stop stop-color="#37D892" />
                        <stop offset="1" stop-color="#26855c" />
                    </linearGradient>
                </defs>
            </Svg>
        </ContainerPresentation >
    );
}

export default Presentation;