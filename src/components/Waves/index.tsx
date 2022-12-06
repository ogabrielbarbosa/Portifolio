import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';

import AOS from 'aos';
import 'aos/dist/aos.css';

import { ContainerWaves, ContainerArrow, WaveRight, WaveLeft } from './styles';
import { FiArrowDown } from "react-icons/fi";
interface Props {
    toggleTheme(): void;
}


const Waves: React.FC<Props> = ({ toggleTheme }) => {
    AOS.init();
    const { colors, title } = useContext(ThemeContext);

    return (
        <ContainerWaves data-aos="fade-up">
            <>
                <WaveLeft width="774" viewBox="0 0 774 1268" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1268C71.6171 1258.69 114.35 1201.61 128.197 1170.81C149.682 1123.05 185.492 1092.49 249.231 1100.37C312.97 1108.24 351.406 1089.62 390.557 1006.76C425.173 933.693 462.654 951.124 609.709 916.022C756.764 880.919 715.943 783.489 746.264 683.435C751.725 665.308 760.823 648.485 773.001 633.997H0.0013902" fill="url(#paint0_linear_51_146)" />
                    <path d="M0 0C71.6171 9.31339 114.35 66.3919 128.197 97.1886C149.682 144.948 185.492 175.513 249.231 167.634C312.97 159.755 351.406 178.381 390.557 261.238C425.173 334.307 462.654 316.876 609.709 351.978C756.764 387.081 715.943 484.511 746.264 584.565C751.725 602.692 760.823 619.515 773.001 634.003H0.0013902" fill="url(#paint1_linear_51_146)" />
                    <path d="M428.517 768.682C507.535 766.054 617.589 721.399 654.831 634H-6.10352e-05V1049.5C95.4918 1051.17 186.445 1000.79 217.237 913.87C250.903 818.111 335.412 771.547 428.517 768.682Z" fill="url(#paint2_linear_51_146)" />
                    <path d="M428.517 499.318C507.535 501.946 617.589 546.601 654.831 634H-6.10352e-05V218.496C95.4918 216.825 186.445 267.21 217.237 354.13C250.903 449.889 335.412 496.453 428.517 499.318Z" fill="url(#paint3_linear_51_146)" />
                    <defs>
                        <linearGradient id="paint0_linear_51_146" x1="384.365" y1="64.1124" x2="384.365" y2="569.888" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5825C7" />
                            <stop offset="1" stop-color="#37D892" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_51_146" x1="384.365" y1="64.1124" x2="384.365" y2="569.888" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5825C7" />
                            <stop offset="1" stop-color="#37D892" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_51_146" x1="327.422" y1="284.944" x2="327.422" y2="877.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#37D892" />
                            <stop offset="1" stop-color="#5825C7" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_51_146" x1="327.422" y1="284.944" x2="327.422" y2="877.5" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#37D892" />
                            <stop offset="1" stop-color="#5825C7" />
                        </linearGradient>
                    </defs>
                </WaveLeft>

            </>

            <ContainerArrow>
                <FiArrowDown color={colors.text} size={30}/>
            </ContainerArrow>

            <>
                <WaveRight width="775" viewBox="0 0 775 1268" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M774.001 634V1268C702.384 1258.69 659.651 1201.61 645.804 1170.81C624.32 1123.05 588.51 1092.49 524.771 1100.37C461.032 1108.24 422.595 1089.62 383.444 1006.76C348.829 933.693 311.347 951.124 164.292 916.022C17.2372 880.919 58.0582 783.489 27.7375 683.435C22.2767 665.308 13.1787 648.485 1 633.997H774" fill="url(#paint0_linear_51_140)" />
                    <path d="M774 634V0C702.383 9.31339 659.65 66.3919 645.803 97.1886C624.318 144.948 588.508 175.513 524.769 167.634C461.03 159.755 422.594 178.381 383.443 261.238C348.827 334.307 311.346 316.876 164.291 351.978C17.2359 387.081 58.0568 484.511 27.7362 584.565C22.2753 602.692 13.1773 619.515 0.998657 634.003H773.999" fill="url(#paint1_linear_51_140)" />
                    <path d="M345.485 768.682C266.466 766.054 156.413 721.399 119.171 634H774.001L774.001 1049.5C678.51 1051.17 587.556 1000.79 556.764 913.87C523.098 818.111 438.589 771.547 345.485 768.682Z" fill="url(#paint2_linear_51_140)" />
                    <path d="M345.483 499.318C266.465 501.946 156.411 546.601 119.169 634H774L774 218.496C678.508 216.825 587.555 267.21 556.763 354.13C523.097 449.889 438.588 496.453 345.483 499.318Z" fill="url(#paint3_linear_51_140)" />
                    <defs>
                        <linearGradient id="paint0_linear_51_140" x1="389.635" y1="64.1124" x2="389.635" y2="569.888" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5825C7" />
                            <stop offset="1" stop-color="#F61067" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_51_140" x1="389.635" y1="64.1124" x2="389.635" y2="569.888" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#5825C7" />
                            <stop offset="1" stop-color="#F61067" />
                        </linearGradient>
                        <linearGradient id="paint2_linear_51_140" x1="446.578" y1="284.944" x2="446.578" y2="712.36" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F61067" />
                            <stop offset="1" stop-color="#5825C7" />
                        </linearGradient>
                        <linearGradient id="paint3_linear_51_140" x1="446.578" y1="284.944" x2="446.578" y2="712.36" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#F61067" />
                            <stop offset="1" stop-color="#5825C7" />
                        </linearGradient>
                    </defs>
                </WaveRight>

            </>
        </ContainerWaves>
    );
}

export default Waves;