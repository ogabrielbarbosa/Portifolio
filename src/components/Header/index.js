import React from 'react';

import { Link } from 'react-router-dom';
export default function Header() {
 return (
   <div className='header'>
    <header id="header">
        <div>
            <img alt="Logo"/>
        </div>
        <Link to="/">
            Início
        </Link>
        <Link to="/about">
            Sobre
        </Link>
        <Link to="/about">
            Projects
        </Link>
    </header>
   </div>
 );
}