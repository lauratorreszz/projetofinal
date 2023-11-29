import React from 'react';
import ai from './ai.jpg';
import './header.css';

const Header = () => (
  <div className="DUCK__header section__padding" id="home">
    <div className="DUCK__header-content">
      <h1 className="gradient__text">Software de monitoramento de bombas d'água</h1>
      <p>O software visa praticidade, informações claras e maior segurança no monitoramento de bombas d'água. Assim, os clientes terão em suas mãos o conhecimento de seus equipamentos.</p>
    </div>

    <div className="DUCK__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;