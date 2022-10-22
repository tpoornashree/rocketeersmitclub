import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request Early Access to Get Started with us!</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Our passion for space science and engineering has driven us MITIANS to start Rocketeers, a cLUB that focuses on the learning the production and sale of model rockets.<br />We wish to experience in the workings of ISRO and gain the technical know-how to design, develop and produce high-quality rocket engines. </p>
      <p>We believe in the power of innovation and collaboration, and we are excited to see what the future holds for rockets and space exploration.<br />We welcome you to be a part of Rocketeers!</p>
      <h4>We need a multidisciplinary team from different parts of India to come together and give a new twist to the traditional rocketry.<br />With our goal of increasing the reach of rocketry in India and making it more popular, we hope to make India a space powerhouse!</h4>
      <h1 className="gradient__text">We hope to use the expertise to popularize rocketry among students and enthusiasts alike.</h1>
    </div>
  </div>
);

export default Possibility;
