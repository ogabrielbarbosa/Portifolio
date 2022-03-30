import './index.css';
import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function Home() {
 return (
   <div>
     <Header/>

      <main className="container">
      <div className="container-dev">
        <a className="developer">desenvolvedor</a>
      </div>

      <div className="apresentation">
          <a className="nome">Gabriel Barbosa</a>
          <a className="text-header">Desenvolvedor mobile e web</a>
          <a className="text-under-header">
          Nos últimos 3 anos, estudei projetos, diversar formas de otimizar meu tempo com desenvolvimento, 
          também desenvolvi um projeto para minha antiga escola com intuito de amenizar o tempo em aplicação de ocorrências em um aluno.
          </a>
          <div className="project-contact">
              <a className="text-under-link" href="#projetos">Visualizar projetos</a>
              <a className="text-under-link-complement">ou</a>
              <a className="text-under-link" href="/">Leia sobre mim</a>
          </div>
      </div>
      
      <section id="projetos">
        <div className="projects-header">
          <a className="nome">Projetos</a>
          <a className="text-header">Projetos pessoais</a>
        </div>

        <div className="projects-container">
          <div className="project"></div>
          <div className="project"></div>
        </div>
        <div className="projects-container">
          <div className="project"></div>
          <div className="project"></div>
        </div>
      </section>
      
      
      <div className="letswork-container">
        <a className="nome">Precisa de um desenvolvedor?</a>
        <a className="text-letswork" href="/Pages/Contact/index.html">Vamos trabalhar juntos? 
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
    </main>

    <Footer/>
   </div>
 );
}