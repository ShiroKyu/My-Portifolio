import React from 'react';

import './style.css';

export default class Profile extends React.Component {
  render() {
    return (
      <section id="profile-section" className="w-screen bg-section-gray-bg flex justify-center pb-24">
        <div className="md:w-10/12 w-full flex flex-col items-center md:flex-row md:justify-center">
          <div className="w-full md:w-6/12">
            <h3 className="profile-title">Perfil</h3>
            <p className="p-style">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem quod perferendis quibusdam ut similique! Reprehenderit
              sit eos natus tempore aut maxime. Odio quisquam maxime consequuntur
              error, inventore dolorum molestiae nemo.
            </p>

            <h3 className="profile-title">Nome</h3>
            <p className="p-style">Paulo Sérgio Rodrigues Leite Junior</p>
            <h3 className="profile-title">Data de Nascimento</h3>
            <p className="p-style">30/05/2001</p>
            <h3 className="profile-title">Profissão</h3>
            <p className="p-style">Estudante de Análise e Desenvolvimento de Sistemas no IFPB Campus Cajazeiras</p>
          </div>
          <div className="w-full md:w-6/12">
            <h3 className="profile-title">Skills</h3>
            <p className="p-style">
              Estes são meus níveis de habilidade com as tecnologias
              mais populares no mercado atualmente:
            </p>

            <div className="skills p-4">
              <h2 className="h2-style">Front-End</h2>
              <ul>
                <li>
                  <span className="html5" />
                  <em>HTML</em>
                </li>
                <li>
                  <span className="css3" />
                  <em>CSS</em>
                </li>
                <li>
                  <span className="js" />
                  <em>Javascript</em>
                </li>
                <li>
                  <span className="tailwind" />
                  <em>Tailwindcss</em>
                </li>
                <li>
                  <span className="react" />
                  <em>React</em>
                </li>
              </ul>
              <h2 className="h2-style">Backend</h2>
              <ul>
                <li>
                  <span className="node" />
                  <em>NodeJS</em>
                </li>
                <li>
                  <span className="java" />
                  <em>Java</em>
                </li>
                <li>
                  <span className="python" />
                  <em>Python</em>
                </li>
                <li>
                  <span className="sql" />
                  <em>SQL</em>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    );
  }
}
