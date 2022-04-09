import React from 'react';
import '../../styles/skills.css';

import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

export default function Skills() {
  return (
    <div>
      <Header />

      <div data-aos="zoom-out"
        className='containerFirstSkills'>
        <span className='titleTextSkills'>Habilidades & Skills</span>
        <span className='subTextSkills'>
          Estou interessado em oportunidades freelance – especialmente projetos
          ambiciosos ou grandes. No entanto, se você tiver outra solicitação ou
          pergunta, não hesite em usar o formulário.
        </span>
      </div>

      <div className='containerSkills'>
        <div data-aos="zoom-in" className='boxSkill'></div>
        <div data-aos="zoom-in" className='boxSkill'></div>
        <div data-aos="zoom-in" className='boxSkill'></div>
        <div data-aos="zoom-in" className='boxSkill'></div>
        <div data-aos="zoom-in" className='boxSkill'></div>
        <div data-aos="zoom-in" className='boxSkill'></div>
      </div>
    </div>
  );
}