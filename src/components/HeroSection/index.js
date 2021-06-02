import React from 'react';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

import './style.css';

// import LinkedinImage from './images/linkedin.png';

function HeroSection() {
  return (
    <>
      <div id="hero-section" className="hero-section">
        <div className="flex flex-col justify-center items-center text-white h-screen">
          <h2 className="welcome-title">Olá, seja bem vindo!</h2>
          <h1 className="main-title text-center">
            Eu sou
            <br />
            {' '}
            Paulo Sérgio
          </h1>
          <h3 className="text-center py-6 uppercase font-light">Estudante de Análise e Desenvolvimento de sistemas</h3>

          <div className="flex justify-center">
            <a className="hover-translateY-effect" href="https://github.com/ShiroKyu/">
              <FaGithub size="40px" className="mx-4" />
            </a>
            <a className="hover-translateY-effect" href="https://www.linkedin.com/in/paulo-s-r-junior">
              <FaLinkedin size="40px" className="mx-4" />
              {' '}
            </a>
            <a className="hover-translateY-effect" href="mailto:paulojunior9395@gmail.com">
              <FaEnvelope size="40px" className="mx-4" />
            </a>

          </div>

          {/* <button
            type="button"
            className="uppercase py-3 px-12 border-2 border-gray-500 bg-transparent
          hover:border-green-500 transition duration-300 ease-in-out"
          >
            <a className="flex items-center justify-center" href="#tech-section">
              Sobre mim
              <FaChevronDown style={{ display: 'inline', marginLeft: '10px' }} />
            </a>
          </button> */}

        </div>

      </div>
    </>
  );
}

export default HeroSection;
