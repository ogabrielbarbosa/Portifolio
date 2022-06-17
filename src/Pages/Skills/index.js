import React from 'react';
import '../../styles/skills.css';

import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function Skills() {
  return (
    <div className='container'>
      <Header />
      <div className='container-main'>
        <div data-aos="zoom-in"
          className='containerFirst'>
          <span className='nameText'>Minhas</span>
          <span className='titleText'>Habilidades & Skills</span>
          <span className='subText'>
            Estou interessado em oportunidades freelance – especialmente projetos
            ambiciosos ou grandes. No entanto, se você tiver outra solicitação ou
            pergunta, não hesite em usar o formulário.
          </span>
        </div>

        {/*--------------------------------------------------------------------*/}
        <div className='projectContainer'>
          <a className='projectTopText' href='#skills'><FaAngleDown color='#7044a4' /></a>
        </div>
      </div>

      <section id="skills" className='containerSkills'>
        <div className='boxSkill' data-aos="zoom-in">
          <CircularProgressbar
            value={80}
            text={`${80}%`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#7044a4",
              textColor: "#ececec",
              pathColor: "#ececec",
              trailColor: "transparent"
            })}
          />
          <span className='textSkill'>ReactJS</span>
        </div>
        <div className='boxSkill' data-aos="zoom-in">
          <CircularProgressbar
            value={80}
            text={`${80}%`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#7044a4",
              textColor: "#ececec",
              pathColor: "#ececec",
              trailColor: "transparent"
            })}
          />
          <span className='textSkill'>React-Native</span>
        </div>
        <div className='boxSkill' data-aos="zoom-in">
          <CircularProgressbar
            value={30}
            text={`${30}%`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#7044a4",
              textColor: "#ececec",
              pathColor: "#ececec",
              trailColor: "transparent"
            })}
          />
          <span className='textSkill'>NodeJS</span>
        </div>
        <div className='boxSkill' data-aos="zoom-in">
          <CircularProgressbar
            value={10}
            text={`${10}%`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#7044a4",
              textColor: "#ececec",
              pathColor: "#ececec",
              trailColor: "transparent"
            })}
          />
          <span className='textSkill'>C#</span>
        </div>
        <div className='boxSkill' data-aos="zoom-in">
          <CircularProgressbar
            value={20}
            text={`${20}%`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#7044a4",
              textColor: "#ececec",
              pathColor: "#ececec",
              trailColor: "transparent"
            })}
          />
          <span className='textSkill'>C++</span>
        </div>
        <div className='boxSkill' data-aos="zoom-in">
          <CircularProgressbar
            value={40}
            text={`${40}%`}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#7044a4",
              textColor: "#ececec",
              pathColor: "#ececec",
              trailColor: "transparent"
            })}
          />
          <span className='textSkill'>MySQL</span>
        </div>
      </section>

      <section data-aos="zoom-in"
        data-aos-delay="200"
        id="contact"
        className='containerCta'>
        <span className='textHeaderCta'>Precisa de um desenvolvedor?</span>
        <Link to="/contact"><a className='textCta'>Vamos trabalhar juntos<FaAngleRight /></a></Link>
        <div className='containerContact'>
          <button><a href='https://github.com/ogabrielbarbosa'><GoMarkGithub size={35} /></a></button>
          <button><a href='https://www.linkedin.com/in/gabriel-barbosa-264956236/'><BsLinkedin size={35} /></a></button>
          <button><a href='https://twitter.com/barbozs_a'><AiOutlineTwitter size={35} /></a></button>
        </div>
      </section>
    </div>
  );
}