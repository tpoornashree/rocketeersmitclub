import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with Rocketeers club of MIT!</h1>
      <p>Rocketeers is on a mission to build the much-needed ecosystem that acts as a primary growth driver and talent pool for the rocket industry. <br />We are passionate about rockets and everything related to space, and we are committed to helping this industry reach its full potential. <br />Our ecosystem will provide a supportive community for rocket enthusiasts of all levels, and it will also be a valuable resource for businesses and individuals looking to get involved in the rocket industry. <br /></p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Why fly when you can shoot to the skies instead?</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
