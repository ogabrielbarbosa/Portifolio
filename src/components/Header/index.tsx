import React, { useContext, useState } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import { ContainerHeader, Menu, ContatoButton, TextHeader, Logo, LogoColor, ButtonHide, Navs } from './styles';

import { FaMoon } from "react-icons/fa";
import { FiMenu } from "react-icons/fi";

interface Props {
    toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);
    const [toggle, setToggle] = useState(false);
    
    function toggleSidebar() {
        setToggle(!toggle);
    };

    return (
        <ContainerHeader className={toggle ? "" : "show"}>
            <Logo width="88" height="101" viewBox="0 0 88 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <LogoColor fill-rule="evenodd" clip-rule="evenodd" d="M12.8567 82.7007L20.981 77.9812L44 90.8569L78.5176 70.4987V44.0256L88 39.9972V75.92L44 101L12.8567 82.7007ZM44 0L88 25.7427L61.6027 39.9972L44 29.7821L25.7202 39.9972V61.0023L44 70.4976L62.2798 61.0023V57.6219H44V48.8219H71.0769V66.427L44 81.3613L16.9188 66.427L0 75.92V25.0645L44 0ZM44 10.1468L9.47117 29.7821V60.3244L16.9186 56.2558V35.2357L44 19.6171L62.2798 29.7821L69.7272 25.0645L44 10.1468Z" />
            </Logo>

            <Navs>
                <Menu>
                    <li>
                        <TextHeader href="#portifolio">Portifólio</TextHeader>
                    </li>

                    <li>
                        <TextHeader href="#sobre">Sobre</TextHeader>
                    </li>

                    <li>
                        <a href="#contato">
                            <ContatoButton>
                                Contato
                            </ContatoButton>
                        </a>
                    </li>

                    <li>
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
                </Menu>
            </Navs>

            <ButtonHide onClick={toggleSidebar}>
                <FiMenu color={colors.text} size={30} />
            </ButtonHide>
        </ContainerHeader>
    );
}

export default Header;