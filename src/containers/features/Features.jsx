import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Sed eu congue dolor, quis mollis justo. ',
    text: 'Aliquam feugiat ante maximus, tempus lectus faucibus, maximus leo. Cras luctus dapibus erat, sit amet tempor eros auctor ac. ',
  },
  {
    title: 'Sed eu congue dolor, quis mollis justo. ',
    text: 'Aliquam feugiat ante maximus, tempus lectus faucibus, maximus leo. Cras luctus dapibus erat, sit amet tempor eros auctor ac.',
  },
  {
    title: 'Sed eu congue dolor, quis mollis justo. ',
    text: 'Aliquam feugiat ante maximus, tempus lectus faucibus, maximus leo. Cras luctus dapibus erat, sit amet tempor eros auctor ac. ',
  },
  {
    title: 'Sed eu congue dolor, quis mollis justo. ',
    text: 'Aliquam feugiat ante maximus, tempus lectus faucibus, maximus leo. Cras luctus dapibus erat, sit amet tempor eros auctor ac. ',
  },
];

const Features = () => (
  <div className="DUCK__features section__padding" id="features">
    <div className="DUCK__features-heading">
      <h1 className="gradient__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lorem quis quam gravida sodales ac eget nibh.</h1>
      <p>Sed eu congue dolor, quis mollis justo. </p>
    </div>
    <div className="DUCK__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;