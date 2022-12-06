import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import ProjectsData from '../../projects.json';

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
    Carousel,
    Project,
    Image,
    ContainerTitle,
    TitleProject,
    Description,
    Tools,
    AllProjects,
    TextButton
} from './styles';

import Media from 'react-media';

import { FiArrowRight, FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
interface Props {
    toggleTheme(): void;
}

const Projects: React.FC<Props> = ({ toggleTheme }) => {
    const { colors, title } = useContext(ThemeContext);
    const swiper = useSwiper();

    return (
        <ContainerProjects id="portifolio">
            <ContainerHorizontal>
                <SubContainerProjects>
                    <Divider />
                    <SubTitle>
                        Meus projetos
                        <SubTitleColor> pessoais</SubTitleColor>
                    </SubTitle>

                    <ContainerButtons>
                        <ButtonArrows className='prev-custom-gabrielo'>
                            <FiArrowLeft color='#37D892' size={25} />
                        </ButtonArrows>
                        <ButtonArrows className='next-custom-gabrielo'>
                            <FiArrowRight color='#37D892' size={25} />
                        </ButtonArrows>
                    </ContainerButtons>
                </SubContainerProjects>

                <Carousel>
                    <Swiper
                        slidesPerView={2}
                        spaceBetween={30}
                        loop={true}
                        pagination={false}
                        navigation={{
                            nextEl: '.next-custom-gabrielo',
                            prevEl: '.prev-custom-gabrielo'
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        autoplay={true}
                        grabCursor={true}
                        className="slides-2"
                    >

                        {ProjectsData.map((item) => {
                            const { id, img, title, description, tool, link } = item;
                            return (
                                <SwiperSlide key={id}>
                                    <Project>
                                        <Image />

                                        <ContainerTitle>
                                            <TitleProject>{title}</TitleProject>
                                            <a href={link}><FiExternalLink color={colors.text} size={25} /></a>
                                        </ContainerTitle>

                                        <Description>{description}</Description>
                                        <Tools>{tool}</Tools>
                                    </Project>
                                </SwiperSlide >
                            )
                        })}
                    </Swiper>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        pagination={false}
                        navigation={{
                            nextEl: '.next-custom-gabrielo',
                            prevEl: '.prev-custom-gabrielo'
                        }}
                        modules={[Pagination, Navigation, Autoplay]}
                        autoplay={true}
                        grabCursor={true}
                        className="slides-1"
                    >

                        {ProjectsData.map((item) => {
                            const { id, img, title, description, tool, link } = item;
                            return (
                                <SwiperSlide key={id}>
                                    <Project>
                                        <Image />

                                        <ContainerTitle>
                                            <TitleProject>{title}</TitleProject>
                                            <a href={link}><FiExternalLink color={colors.text} size={25} /></a>
                                        </ContainerTitle>

                                        <Description>{description}</Description>
                                        <Tools>{tool}</Tools>
                                    </Project>
                                </SwiperSlide >
                            )
                        })}
                    </Swiper>
                </Carousel>
            </ContainerHorizontal>

            <ContainerHorizontal>
                <AllProjects>
                    <TextButton>
                        Ver todos os projetos
                    </TextButton>
                </AllProjects>
            </ContainerHorizontal>

        </ContainerProjects>
    );
}

export default Projects;