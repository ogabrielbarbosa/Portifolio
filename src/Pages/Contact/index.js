import React, { useRef } from 'react';
import '../../styles/contact.css';
import emailjs from '@emailjs/browser';
import Header from '../../components/Header';
import { Link } from 'react-router-dom';
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

export default function Contact() {

  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_4bsjsel', 'template_d2927us', e.target, 'HF__0fSoji5BA7xUc')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    e.target.reset();
  };

  return (
    <div className='container'>
      <Header />
      <div className='container-main'>
        <div data-aos="zoom-out"
          className='containerFirst'>
          <span className='nameText'>Contato</span>
          <span className='titleText'>Vamos trabalhar juntos</span>
          <span className='subText'>
            Estou interessado em oportunidades freelance – especialmente projetos
            ambiciosos ou grandes. No entanto, se você tiver outra solicitação ou
            pergunta, não hesite em usar o formulário.
          </span>
        </div>

        {/*--------------------------------------------------------------------*/}
        <div className='projectContainer'>
          <a className='projectTopText' href='#contact'>Contato</a>
          <a className='projectTopText' href='#contact'><FaAngleDown color='#7044a4' /></a>
        </div>
      </div>

      <section id="contact" className='containerForm'>
        <form onSubmit={sendEmail}>
          <ul>
            <div className='formRow'>
              <input data-aos="zoom-in" placeholder="Nome" name="nome" className='firstInput'></input>

              <input data-aos="zoom-in" placeholder="Email" name="from_email" className='firstInput'></input>

              <input data-aos="zoom-in" placeholder="Assunto" name="assunto" className='secondInput'></input>

              <textarea data-aos="zoom-in" placeholder="Mensagem" name="mensagem" className='lastInput'></textarea>
            </div>

            <button data-aos="zoom-in" data-aos-offset="50" className='submitInput'>Enviar mensagem!</button>
          </ul>
        </form>
      </section>
    </div>
  );
}