import React from 'react';

import {
  FaHome, FaFolder, FaCode, FaUser, FaAddressCard, FaBookOpen, FaCompass,
} from 'react-icons/fa';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { toggled: false };

    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    const { toggled } = this.state;

    this.setState({ toggled: !toggled });
  }

  render() {
    const { toggled } = this.state;

    return (
      <section className="fixed font-body z-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`menu-toggle cursor-pointer transition ease-in duration-300 
          ${toggled ? 'transform rotate-90' : ''}`}
          width="40"
          fill="none"
          viewBox="0 0 24 24"
          stroke="rgba(16, 185, 129)"
          onClick={this.toggleMenu}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <nav className={`shadow h-screen w-full bg-green-600 md:w-72   transition-transform 
        ease-in-out duration-300 transform ${toggled ? '' : '-translate-x-full'} `}
        >
          <ul>

            <li className="cursor-pointer flex justify-center items-center p-5 text-2xl text-white">
              <FaCompass className="mr-2 transform transition-all ease-in duration-500 hover:rotate-360" />
              <p>Menu</p>
            </li>
            <a href="#hero-section">
              <li className="navbar-item">
                <FaHome className="mr-2" />
                <p>Início</p>
              </li>
            </a>
            <a href="#tech-section">
              <li className="navbar-item">
                <FaCode className="mr-2" />
                Skills
              </li>
            </a>
            <a href="#about-section">
              <li className="navbar-item">
                <FaUser className="mr-2" />
                Sobre
              </li>
            </a>
            <a href="#profile-section">
              <li className="navbar-item">
                <FaBookOpen className="mr-2" />
                Resumo
              </li>
            </a>
            <a href="#portifolio-section">
              <li className="navbar-item">
                <FaFolder className="mr-2" />
                Portifólio
              </li>
            </a>
            <a href="#contact-section">
              <li className="navbar-item">
                <FaAddressCard className="mr-2" />
                Contato
              </li>
            </a>
          </ul>
        </nav>
      </section>
    );
  }
}
