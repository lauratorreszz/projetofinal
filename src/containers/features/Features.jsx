import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'MONITORAMENTO EM TEMPO REAL. ',
    text: 'O software permite o monitoramento das bombas de água em tempo real.',
  },
  {
    title: 'SUPORTE TÉCNICO. ',
    text: ' Além da instalação, o cliente também conta com um suporte técnico pronto para qualquer manutenção necessária.',
  },
  {
    title: 'EFICIÊNCIA.',
    text: 'Automatiza trabalhos manuais para agilizar processos e aumenta a eficácia do trabalho oferecido pelos clientes.',
  },
  {
    title: 'DADOS DIVERSOS.',
    text: 'O software informa a temperatura, vibração, tempo de funcionamento e alerta de falha da bomba. ',
  },
];

const Features = () => (
  <div className="DUCK__features section__padding" id="features">
    <div className="DUCK__features-heading">
      <h1 className="gradient__text">Nossas funcionalidades e qualidades</h1>
    </div>
    <div className="DUCK__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;