import React from 'react';

import PerfilImage from './images/perfil.jpeg';

export default class About extends React.Component {
  render() {
    return (
      <section id="about-section" className="pb-24 flex justify-center w-screen bg-section-gray-bg">
        <div className="xsm:w-9/12">
          <h3 className="uppercase text-center pt-16 text-xl font-bold text-green-500">Sobre</h3>
          <h2 className="text-center pt-2 pb-12 text-4xl text-gray-500">Quem sou</h2>

          <div className="flex flex-col justify-center items-center md:flex-row">
            <img
              className="shadow-2xl hover-translateY-effect w-6/12
            m-6 rounded-full md:w-4/12 lg:w-3/12"
              src={PerfilImage}
              alt="Imagem de perfil"
            />
            <div className="text-sm">
              <p className="p-4 text-gray-700">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Consequatur incidunt dolores dignissimos tempora perspiciatis
                tempore ratione exercitationem, reiciendis maiores optio quas
                beatae, suscipit pariatur, veritatis consequuntur quibusdam modi
                ad cupiditate.

              </p>
              <p className="p-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate pariatur quas blanditiis, temporibus rem eos
                tempore laborum quis placeat esse quod libero tenetur veritatis
                eum recusandae. Delectus libero necessitatibus dolores!

              </p>
              <p className="p-4 text-gray-700">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptate pariatur quas blanditiis, temporibus rem eos
                tempore laborum quis placeat esse quod libero tenetur veritatis
                eum recusandae. Delectus libero necessitatibus dolores!

              </p>

            </div>
          </div>
        </div>

      </section>
    );
  }
}
