import React from 'react';
import '../../styles/header.css';
import logo from '../../assets/logoBranco.png';

import { GoMarkGithub } from "react-icons/go";
import { BsLinkedin } from "react-icons/bs";

import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="header">
    <a className="logo">
      <Link to="/"><img src={logo} alt="Logo"/></Link>
    </a>
    <nav className="nav">
      <ul className="menu" role="menu">
        <li><Link to="/contact"><button className='contactButton'>Contato</button></Link></li>
        <li><a href='https://github.com/ogabrielbarbosa'><GoMarkGithub size={35} /></a></li>
        <li><a href='https://www.linkedin.com/in/gabriel-barbosa-264956236/'><BsLinkedin size={35} /></a></li>
      </ul>
    </nav>
  </header>
  );
}