import './index.css';
import React from 'react';

import Header from '../../components/Header';
import ProjectModel1 from '../../components/ProjectModel1';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

export default function Contact() {
  return (
    <div>
      <Header />

      <div className='containerFirst'>
        <span className='nameText'>Contato</span>
        <span className='titleText'>Entre em contato — vamos trabalhar juntos.</span>
        <span className='subText'>
          Estou interessado em oportunidades freelance – especialmente projetos 
          ambiciosos ou grandes. No entanto, se você tiver outra solicitação ou 
          pergunta, não hesite em usar o formulário.
        </span>
      </div>   

      <form className='containerForm'>
        <ul>
          <div className='formRow'>
            <div>
              <input className='firstInput'></input>
            </div>
            <div>
              <input className='firstInput'></input>
            </div>
          </div>

          <div className='formColumn'>
            <div>
              <input className='secondInput'></input>
            </div>
            <div>
              <input className='lastInput'></input>
            </div>
          </div>

          <button className='submitInput'>

          </button>
        </ul>
      </form>
    </div>
  );
}