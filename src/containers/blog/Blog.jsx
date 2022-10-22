import React from 'react';
import Article from '../../components/article/Article';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, <br /> We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article imgUrl={blog01} date="Space travel will free man from his remaining chains, the chains of gravity which still tie him to this planet." text=" A rocket cannot escape Earth's gravity and make it into space unless it's traveling at least 7 miles per second. For me, a rocket is only a means--only a method of reaching the depths of space—and not an end in itself…" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article imgUrl={blog02} date="Newton's First law of motion" text="A rocket will stay on the launch pad until a force blasts it off. " />
        <Article imgUrl={blog03} date="Rockets are used to launch satellites and Space Shuttles into space." text="When a rocket is in flight, four forces act on it: weight, thrust, and the two aerodynamic forces, lift and drag." />
        <Article imgUrl={blog04} date="Modern rockets have a nozzle, which directs the explosion of the rocket in one direction." text="Thrust works the opposite of weight. The rocket's propulsion system causes thrust. " />
        <Article imgUrl={blog05} date="Future rocket designs are even looking into using carbon composite structures." text="Lift is the aerodynamic force that works in a 90-degree angle to the direction of the flight. " />
      </div>
    </div>
  </div>
);

export default Blog;
