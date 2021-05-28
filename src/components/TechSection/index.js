/* eslint-disable react/prefer-stateless-function */
import React from 'react';

import NodeImage from './images/node.png';
import ReactImage from './images/react.png';
import TailwindImage from './images/tailwind.svg';

import PostgresImage from './images/postgres.svg';
import RedisImage from './images/redis.png';
import MongoImage from './images/mongo.png';

export default class TechSection extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    return (
      <section className="bg-tech-section" id="tech-section">
        <h2 className="text-center text-gray-500 py-8 p-6 font-body font-bold text-3xl">Principais Stacks</h2>

        <div className="tech-container">
          <div className="tech-box">
            <img className="tech-image" src={NodeImage} alt="Node" />
            <h3 className="tech-title">NodeJS</h3>
            <p className="tech-description">
              Com o NodeJS eu vou projetar e implementar o back-end de uma aplicação usando
              javascript
            </p>
          </div>
          <div className="tech-box">
            <img className="tech-image" src={ReactImage} alt="React" />
            <h3 className="tech-title">React</h3>
            <p className="tech-description">
              Com o React eu vou implentar um font-end de uma aplicação usando javascript
            </p>
          </div>
          <div className="tech-box">
            <img className="tech-image" src={TailwindImage} alt="Tailwind" />
            <h3 className="tech-title">Tailwindcss</h3>
            <p className="tech-description">
              Com o Tailwindcss eu vou fazer a estilização dos componentes do React ou de
              uma página HTML ou CSS qualquer
            </p>
          </div>
        </div>

        <h2 className="text-center text-gray-500 py-8 p-6 font-body font-bold text-3xl">Bancos de dados</h2>

        <div className="tech-container">
          <div className="tech-box">
            <img className="tech-image" src={PostgresImage} alt="Node" />
            <h3 className="tech-title">PostgreSQL</h3>
            <p className="tech-description">
              Com o NodeJS eu vou projetar e implementar o back-end de uma aplicação usando
              javascript
            </p>
          </div>
          <div className="tech-box">
            <img className="tech-image" src={RedisImage} alt="React" />
            <h3 className="tech-title">Redis</h3>
            <p className="tech-description">
              Com o React eu vou implentar um font-end de uma aplicação usando javascript
            </p>
          </div>
          <div className="tech-box">
            <img className="tech-image" src={MongoImage} alt="Tailwind" />
            <h3 className="tech-title">MongoDB</h3>
            <p className="tech-description">
              Com o Tailwindcss eu vou fazer a estilização dos componentes do React ou de
              uma página HTML ou CSS qualquer
            </p>
          </div>
        </div>
      </section>
    );
  }
}
