import React from 'react';
import './index.css'
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
        <li><Link to="/projects"><GoMarkGithub size={35} /></Link></li>
        <li><Link to="/about"><BsLinkedin size={35} /></Link></li>
      </ul>
    </nav>
  </header>
  );
}