import React from 'react';

import { FaChevronDown } from 'react-icons/fa';

import './style.css';

function HeroSection() {
  return (
    <>
      <div className="hero-section">
        <div className="introductory-section">
          <h2>Olá, seja bem vindo!</h2>
          <h1>
            Eu sou
            <br />
            {' '}
            Paulo Sérgio
          </h1>
          <h3>Estudante de Análise e Desenvolvimento de sistemas</h3>

          <button
            type="button"
            className="py-3 px-9 border-2 border-gray-500 bg-transparent
          hover:border-green-500 transition duration-300 ease-in-out"
          >
            <a className="flex items-center justify-center" href="#a">
              Sobre mim
              <FaChevronDown style={{ display: 'inline', marginLeft: '10px' }} />
            </a>
          </button>

        </div>

      </div>
    </>
  );
}

export default HeroSection;
