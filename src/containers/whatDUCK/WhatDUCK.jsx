import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatDUCK.css';


const WhatDUCK = () => (
  <div className="DUCK__whatDUCK section__margin" id="wDUCK">
    <div className="DUCK__whatDUCK-feature">
      <Feature title="Cras luctus" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lorem quis quam gravida sodales ac eget nibh. Aliquam mattis elit massa, ut venenatis velit aliquet non." />
    </div>
    <div className="DUCK__whatDUCK-heading">
      <h1 className="gradient__text">Sed eu congue dolor, quis mollis justo. </h1>
      <p>Nulla facilisi.</p>
    </div>
    <div className="DUCK__whatDUCK-container">
      <Feature title="Vitae turpis." text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lorem quis quam gravida sodales ac eget nibh." />
      <Feature title="Vitae turpis." text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lorem quis quam gravida sodales ac eget nibh." />
      <Feature title="Vitae turpis." text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ac lorem quis quam gravida sodales ac eget nibh." />
    </div>
  </div>
);

export default WhatDUCK;