import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Designing, building, prototyping',
    text: 'Rocket Scientists, professionally known as Aerospace Engineers, are responsible for designing, building, prototyping and testing aerospace equipment such as aircraft, spacecraft, missiles and satellites.',
  },
  {
    title: 'Testing aerospace equipment',
    text: 'During this stage, Aerospace Engineers will research a suggested design to determine if it is possible to build and construct both financially and technically.',
  },
  {
    title: 'Understanding the origins of emerging Technology',
    text: 'Rocket Scientists will first gather information, design, direct and coordinate the design of aircraft and aerospace products.When building designs, these professionals will assure that the prototype is meeting quality standards.',
  },
  {
    title: 'Propulsion, aerodynamics, guidance systems',
    text: 'Rocket Scientists will also assess the designs to assure that engineering principles are being adhered to, meet client’s requests and are adhering to environmental requests from the public.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Problem solving, researching and designing a variety of aircraft equipment.</p>
      <p>Request Early Access to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
