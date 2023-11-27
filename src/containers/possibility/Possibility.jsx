import React from 'react';
import possibilityImage from './possibility.jpg';
import './possibility.css';

const Possibility = () => (
  <div className="DUCK__possibility section__padding" id="possibility">
    <div className="DUCK__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="DUCK__possibility-content">
      <h4>Sed eu congue dolor, quis mollis justo.</h4>
      <h1 className="gradient__text">Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. </h1>
      <p>Nam tincidunt euismod mi. Aliquam feugiat ante maximus, tempus lectus faucibus, maximus leo. Cras luctus dapibus erat, sit amet tempor eros auctor ac. Proin ac ex eget magna placerat lacinia.</p>
    </div>
  </div>
);

export default Possibility;