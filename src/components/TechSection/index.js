/* eslint-disable react/prefer-stateless-function */
import React from 'react';

// Componentes
import TechBox from './TechBox';

import NodeImage from './images/node.png';
import ReactImage from './images/react.png';
import TailwindImage from './images/tailwind.svg';
import PostgresImage from './images/postgres.svg';
import RedisImage from './images/redis.png';
import MongoImage from './images/mongo.png';
import JavaImage from './images/java.png';
import TypescriptImage from './images/typescript.png';
import LinuxImage from './images/linux.png';

export default class TechSection extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {
    const nodeInfo = {
      title: 'NodeJS',
      description: `Com o NodeJS eu vou projetar e implementar 
      o back-end de uma aplicação usando javascript`,
      image: NodeImage,
      altImg: 'Node',
    };
    const reactInfo = {
      title: 'ReactJS',
      description: `Com o React eu vou implentar um font-end de uma aplicação 
      usando javascript`,
      image: ReactImage,
      altImg: 'ReactJS',
    };
    const tailwindInfo = {
      title: 'Tailwindcss',
      description: `Com o Tailwindcss eu vou fazer a estilização dos 
      componentes do React ou de uma página HTML ou CSS qualquer`,
      image: TailwindImage,
      altImg: 'Tailwindcss',
    };
    const postgresInfo = {
      title: 'PostgreSQL',
      description: `Com o PostgreSQL eu posso modelar e implementar bancos de dados
      relacionais para um sistema. Ou ainda, utilizar o Sequelize como ORM para esse banco`,
      image: PostgresImage,
      altImg: 'PostgreSQL',
    };
    const redisInfo = {
      title: 'Redis',
      description: `Com o Redis eu posso utilizar um mecanismo de chave e valor para
      armazenar dados de um sistema. Sendo muito bom para armazenar informação de cache`,
      image: RedisImage,
      altImg: 'Redis',
    };
    const mongoInfo = {
      title: 'MongoDB',
      description: `Com o MongoDB eu posso utilizar uma alternativa aos bancos de dados
      relacionais tradicionais e utilizar  NoSQL e um armazenamento baseado em documentos e não tabelas`,
      image: MongoImage,
      altImg: 'MongoDB',
    };

    const javaInfo = {
      title: '',
      description: `Estou aprendendo Java mais a fundo para consolidar ainda mais os meus
      conhecimentos não só de POO, mas de muitros outros recursos além dos adquiridos 
      em sala de aula`,
      image: JavaImage,
      altImg: 'Java',
    };

    const typescriptInfo = {
      title: 'Typescript',
      description: `Usando o typescript eu vou poder tipar as minhas variáveis do javascript,
      aumentar minha produtividade graças ao recurso de IntelliSense da IDE, descobrir erros
      mais facilmente e dentre outras vantagens`,
      image: TypescriptImage,
      altImg: 'Typescript',
    };

    const linuxInfo = {
      title: 'Linux',
      description: `Estou constantemente aprendendo linux, já como a maior parte dos
      servidores do mundo, rodam o Kernel do Linux. Então nada mais justo do que já
      estar familiarizado com o sistema`,
      image: LinuxImage,
      altImg: 'Linux',
    };

    return (
      <section className="bg-section-gray-bg" id="tech-section">
        <h3 className="uppercase text-center pt-16 text-3xl font-bold text-green-500">Skills</h3>

        <h2 className="text-center text-gray-500 py-8 p-6 font-body font-bold text-3xl">Stack</h2>

        <div className="tech-container">
          <TechBox info={nodeInfo} />
          <TechBox info={reactInfo} />
          <TechBox info={tailwindInfo} />
        </div>

        <h2 className="text-center text-gray-500 py-8 p-6 font-body font-bold text-3xl">Bancos de dados</h2>

        <div className="tech-container">
          <TechBox info={postgresInfo} />
          <TechBox info={redisInfo} />
          <TechBox info={mongoInfo} />
        </div>

        <h2 className="text-center text-gray-500 py-8 p-6 font-body font-bold text-3xl">
          Tecnologias e outras coisas
          que estou aprendendo
        </h2>

        <div className="tech-container">
          <TechBox info={javaInfo} />
          <TechBox info={typescriptInfo} />
          <TechBox info={linuxInfo} />
        </div>
      </section>
    );
  }
}
