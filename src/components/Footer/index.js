import React from 'react';

import { Link } from 'react-router-dom';
export default function Footer() {
 return (
   <div>
        <div className="container-footer">
        <a className="text-header-footer">
          Informações de contato —
        </a>
        <a className="text-under-header-footer">
          Sinta-se à vontade para entrar em contato comigo a qualquer momento. 
          Prefiro falar por e-mail, especialmente porque podemos estar a alguns fusos horários de distância.
        </a>
        <div className="container-information">
          <a className="text-information">
            E-mail: 
          </a>
          <a className="text-information-data">
            ogabriel.barbosa22@gmail.com
          </a>
        </div>
        
        <div className="container-information">
          <a className="text-information">
            Telefone: 
          </a>
          <a className="text-information-data">
            +55 12 99685-9020
          </a>
        </div>
      </div>
      <div className="container-footer">
        <a className="text-header-footer">
          Últimos projetos —
        </a>
      </div>
      <div className="container-footer">
        <a className="text-header-footer">
          Disponibilidade atual —
        </a>
        <a className="text-under-header-footer">
          Eu costumo trabalhar em vários projetos, 
          mas ficarei feliz em discutir novas oportunidades. 
          Vamos entrar em contato!
        </a>
      </div>
      <div className="container-footer">
        <a className="text-header-footer">
          Siga me —
        </a>
      </div>
   </div>
 );
}