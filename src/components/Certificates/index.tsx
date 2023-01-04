import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';

import {
    ContainerCertificates,
    SubContainerCertificates,
    Divider,
    SubTitle,
    SubTitleColor,
    BoxCertificates,
    Certificate,
    Image
} from './styles';

import { FiExternalLink } from "react-icons/fi";
import AOS from 'aos';
import 'aos/dist/aos.css';
interface Props {
    toggleTheme(): void;
}

const Certificates: React.FC<Props> = ({ toggleTheme }) => {
    AOS.init();
    const { colors, title } = useContext(ThemeContext);

    const certificatesImages = [
        {
            id: 1,
            img: './certificates/01fabricadeapps.png'
        },
        {
            id: 2,
            img: './certificates/02.png'
        }
    ]

    return (
        <ContainerCertificates>
            <SubContainerCertificates>
                <Divider />
                <SubTitle>
                    Meus
                    <SubTitleColor> certificados</SubTitleColor>
                </SubTitle>
            </SubContainerCertificates>

            <BoxCertificates>
                {certificatesImages.map((item) => {
                    const { id, img } = item;
                    return (
                        <Certificate key={id} data-aos="zoom-in">
                            <Image key={id} src={img} />
                        </Certificate>
                    )
                })}
            </BoxCertificates>
        </ContainerCertificates>
    );
}

export default Certificates;