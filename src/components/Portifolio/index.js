import React from 'react';

import './style.css';

// images
import NoSqlImage from './images/nosql.png';
import NetflixImage from './images/netflix.png';
import GithubImage from './images/github.png';
import RecycleImage from './images/recycle.png';
import SchoolImage from './images/school.png';
import TestsImage from './images/tests.png';

import RepoBox from './RepoBox';

export default class Portifolio extends React.Component {
  render() {
    const Bd2Info = {
      title: 'Projeto final Banco de Dados II',
      techs: 'Vue, Postgres, Redis, Mongo',
      repoLink: 'https://github.com/ShiroKyu/ProjetoFinalBDII',
      image: NoSqlImage,
    };

    const NetflixInfo = {
      title: 'UI Netflix clone',
      techs: 'React',
      repoLink: 'https://github.com/ShiroKyu/Netflix-UI-Clone',
      image: NetflixImage,
    };

    const GithubInfo = {
      title: 'Github user searcher',
      techs: 'React, React contexts',
      repoLink: 'https://github.com/ShiroKyu/Github_user_searcher',
      image: GithubImage,
    };

    const RecycleInfo = {
      title: 'Ecoleta',
      techs: 'HTML, CSS, Javascript',
      repoLink: 'https://github.com/ShiroKyu/Ecoleta',
      image: RecycleImage,
    };

    const SchoolInfo = {
      title: 'API escola',
      techs: 'Node, MariaDB, Sequelize',
      repoLink: 'https://github.com/ShiroKyu/API-rest-escola',
      image: SchoolImage,
    };

    const TestsInfo = {
      title: 'Projeto final Testes de software',
      techs: 'Testes unitários, de integração e de sistema',
      repoLink: 'https://github.com/ShiroKyu/ProjetoFinal-TestesDeSistema',
      image: TestsImage,
    };

    return (
      <section
        id="portifolio-section"
        className="pb-24 w-screen bg-section-gray-bg flex flex-col items-center"
      >
        <h3 className="uppercase text-center pt-16 text-xl font-bold text-green-500">Portifólio</h3>
        <h2 className="text-center pt-2 pb-12 text-4xl text-gray-500">Confira alguns dos meus projetos</h2>

        <div className="repo-section w-10/12 flex flex-col md:flex-row md:flex-wrap md:justify-evenly ">
          <RepoBox info={Bd2Info} />
          <RepoBox info={NetflixInfo} />
          <RepoBox info={GithubInfo} />
          <RepoBox info={RecycleInfo} />
          <RepoBox info={SchoolInfo} />
          <RepoBox info={TestsInfo} />
        </div>

        <a
          href="https://github.com/ShiroKyu"
          className="uppercase text-center
        mt-16 text-xl font-bold text-green-500 hover:underline"
        >
          Confira outros projetos no meu github →
        </a>

      </section>
    );
  }
}
