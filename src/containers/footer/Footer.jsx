import React from 'react';
import gpt3Logo from '../../logo3.png';
import './footer.css';

const Footer = () => (
  <div className="DUCK__footer section__padding">
    <div className="DUCK__footer-heading">
      <h1 className="gradient__text">Monitore suas bombas de forma mais eficiente conosco.</h1>
    </div>

    <div className="DUCK__footer-btn">
      <p>Entre em contato por e-mail</p>
    </div>

    <div className="DUCK__footer-links">
      <div className="DUCK__footer-links_logo">
        <img src={gpt3Logo} alt="DUCK_logo" />
      </div>
      <div className="DUCK__footer-links_div">
        <h4>Links</h4>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Twitter</p>
      </div>
      <div className="DUCK__footer-links_div">
        <h4>Negócios</h4>
        <p>Termos & Condições </p>
        <p>Produto</p>
        <p>Contato</p>
      </div>
      <div className="DUCK__footer-links_div">
        <h4>Venha nos conhecer</h4>
        <p>Nova Friburgo</p>
        <p>085-132567</p>
        <p>duckriver@gmail.com</p>
      </div>
    </div>

    <div className="DUCK__footer-copyright">
      <p>@ All rights reserved.</p>
    </div>
  </div>
);

export default Footer;