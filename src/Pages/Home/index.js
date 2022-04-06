import './index.css';
import React from 'react';

import Header from '../../components/Header';
import ProjectModel1 from '../../components/ProjectModel1';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineTwitter } from "react-icons/ai";
import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn } from "react-scroll-motion";

const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
const FadeUp = batch(Fade(-1, 1), Move(), Sticky());

export default function Home() {
  return (
    <div>
      <Header />

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
          <span className='subTextNav'>Leia sobre mim</span>
        </div>
      </div>

      <div className='projectContainer'>
        <a className='projectTopText'>Projetos</a>
        <a className='projectTopText'><FaAngleDown /></a>
      </div>

      <ScrollContainer>
        <ScrollPage page={1}>
          <ProjectModel1 />
        </ScrollPage>
        <ScrollPage page={2}>
          <ProjectModel1 />
        </ScrollPage>
        <ScrollPage page={3}>
          <Animator animation={FadeUp}>
            <div className='containerCta'>
              <span className='textHeaderCta'>Precisa de um desenvolvedor?</span>
              <Link to="/contact"><a className='textCta'>Vamos trabalhar juntos? <FaAngleRight /></a></Link>
              <div className='containerContact'>
                <button><a href='https://github.com/ogabrielbarbosa'><GoMarkGithub size={35}/></a></button>
                <button><BsLinkedin size={35} /></button>
                <button><AiOutlineTwitter size={35} /></button>
              </div>
            </div>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}