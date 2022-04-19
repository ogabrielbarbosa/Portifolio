import React from 'react';
import '../../styles/home.css';

import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";

import tcc1Logo from '../../assets/orientador.png';
import tcc2Logo from '../../assets/professor.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
export default function Home() {

  const projetoTcc = { projeto: 'TCC - Orientador', descricao: 'Aplicação Web desenvolvida em 2021 que manipula ocorrências de alunos de diversas salas de aulas.', site: 'https://tccmoduloorientador.netlify.app/', gitHub: 'https://github.com/ogabrielbarbosa/TCC-Orientador' };
  const projetoTcc2 = { projeto: 'TCC - Professor', descricao: 'Aplicação Web desenvolvida em 2021 que cadastra ocorrências de alunos de diversas salas de aulas.', site: 'https://tccmoduloprofessor.netlify.app/', gitHub: 'https://github.com/ogabrielbarbosa/TCC-Professor' };
  const projetoLista = { projeto: 'Lista', descricao: 'Aplicativo Mobile para organizar e diminuir o tempo de listas de super-mercado.', site: '', gitHub: 'https://github.com/ogabrielbarbosa/Lista-ReactNative' };

  return (
    <div>


      {/*--------------------------------------------------------------------*/}
      <div className='container'>
        <Header />
        <div className='container-main'>
          <div className='containerFirst'>
            <span className='nameText'>Gabriel Barbosa</span>
            <span className='titleText'>Desenvolvedor mobile e web</span>
            <span className='subText'>
              Nos últimos 3 anos, estudei projetos, diversar
              formas de otimizar meu tempo com desenvolvimento, também desenvolvi um
              projeto para minha antiga escola com intuito de amenizar o tempo em
              aplicação de ocorrências em um aluno.
            </span>
            <div className='containerNavSub'>
              <a className='subTextNav' href='#projects'>Visualizar projetos</a>
              <span className='subTextNavOr'>ou</span>
              <Link to='/skills'><span className='subTextNav'>Habilidades</span></Link>
            </div>
          </div>

          {/*--------------------------------------------------------------------*/}
          <div className='projectContainer'>
            <a className='projectTopText' href='#projects'>Projetos</a>
            <a className='projectTopText' href='#projects'><FaAngleDown color='#7044a4' /></a>
          </div>
        </div>

      </div>

      {/*--------------------------------------------------------------------*/}
      <section className='containerProject' id='projects'>
        <div data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className='boxProject1'>
          <img src={tcc1Logo} className="foto"></img>
        </div>
        <div data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className='containerInformations'>
          <div className='containerTextProject'>
            <span className='textHeaderProject'>{projetoTcc.projeto}</span>
            <span className='textTitleProject'>
              {projetoTcc.descricao}
            </span>
            <span className='textTools'>Ferramentas utilizadas:</span>
            <ul className='tools'>
              <li>ReactJs</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className='containerButtons'>
            <button className='button'><a href={projetoTcc.site}>Abrir Site</a></button>
            <button className='button'><a href={projetoTcc.gitHub}>Ver Código</a></button>
          </div>
        </div>
      </section>

      {/*--------------------------------------------------------------------*/}
      <section className='containerProject' id='projects'>
        <div data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className='boxProject2'>
          <img src={tcc2Logo} className="foto"></img>
        </div>
        <div data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className='containerInformations'>
          <div className='containerTextProject'>
            <span className='textHeaderProject'>{projetoTcc2.projeto}</span>
            <span className='textTitleProject'>
              {projetoTcc2.descricao}
            </span>
            <span className='textTools'>Ferramentas utilizadas:</span>
            <ul className='tools'>
              <li>ReactJs</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className='containerButtons'>
            <button className='button'><a href={projetoTcc2.site}>Abrir Site</a></button>
            <button className='button'><a href={projetoTcc2.gitHub}>Ver Código</a></button>
          </div>
        </div>
      </section>

      {/*--------------------------------------------------------------------*/}
      <section className='containerProject' id='projects'>
        <div data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className='boxProject3'>

        </div>
        <div data-aos="zoom-in"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className='containerInformations'>
          <div className='containerTextProject'>
            <span className='textHeaderProject'>{projetoLista.projeto}</span>
            <span className='textTitleProject'>
              {projetoLista.descricao}
            </span>
            <span className='textTools'>Ferramentas utilizadas:</span>
            <ul className='tools'>
              <li>React Native</li>
              <li>Firebase</li>
            </ul>
          </div>
          <div className='containerButtons'>
            <button className='button'><a href={projetoLista.site}>Baixar App</a></button>
            <button className='button'><a href={projetoLista.gitHub}>Ver Código</a></button>
          </div>
        </div>
      </section>

      {/*--------------------------------------------------------------------*/}
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