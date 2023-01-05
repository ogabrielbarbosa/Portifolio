import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { ContainerAbout, Image, SubContainerAbout, SubTitle, Description, ContainerButtons, ContactButton, TextButton } from './styles';

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
                <SubTitle>
                    Sobre mim
                </SubTitle>

                <Description>
                    Lorem ipsum dolor sit amet. Aut quasi numquam cum libero voluptates et accusantium totam id magnam voluptas. Et corrupti commodi non nihil enim est quidem culpa non quia animi non voluptate quaerat! Et blanditiis velit ut sunt tenetur id molestiae perspiciatis? Rem neque sapiente ad voluptatem fuga et dolor libero non quam placeat. Nam iste aperiam sit beatae enim qui magni libero qui recusandae voluptas cum omnis optio.
                </Description>

                <ContainerButtons>
                    <ContactButton href="#contato">
                        <TextButton>
                            Contato
                        </TextButton>
                    </ContactButton>
                </ContainerButtons>
            </SubContainerAbout>
        </ContainerAbout>
    );
}

export default About;