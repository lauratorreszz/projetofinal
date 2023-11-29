import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatDUCK.css';


const WhatDUCK = () => (
  <div className="DUCK__whatDUCK section__margin" id="wDUCK">
    <div className="DUCK__whatDUCK-feature">
      <Feature title="Quem somos?" text="DuckRiver é uma empresa localizada em Nova Friburgo que atende a demanda de automação de equipamentos de monitoramento de bombas d'água." />
    </div>
    <div className="DUCK__whatDUCK-heading">
      <h1 className="gradient__text">Nossa missão, visão e valores. </h1>
    </div>
    <div className="DUCK__whatDUCK-container">
      <Feature title="Missão." text=" Garantir informação às empresas de monitoramento da cidade de Nova Friburgo sobre a temperatura, vibração e possíveis falhas nas bombas d'agua." />
      <Feature title="Visão." text="Pretendemos nos tornar uma empresa de automatização de monitoramentos de bombas d'água e, no futuro, atuar em outros estados do Brasil." />
      <Feature title="Valores." text="Visamos o auxílio e a empatia com situações de empresas de monitoramento, sabendo da importância de um sistema de água de boa qualidade para os habitantes." />
    </div>
  </div>
);

export default WhatDUCK;