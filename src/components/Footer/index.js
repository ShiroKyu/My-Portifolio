import React from 'react';

export default class Footer extends React.Component {
  render() {
    return (
      <section id="contact-section" className="w-screen bg-gray-700 flex flex-col items-center">
        <div className="mb-12">
          <h3 className="uppercase text-center pt-16 text-xl font-bold text-green-500">Contato</h3>
          <h2 className="text-center pb-4 text-3xl text-white">Fale comigo!</h2>
          <p className="text-center text-gray-300">Será uma honra estagiar/trabalhar com você!</p>
        </div>
        <a className="w-full text-center" href="mailto:paulojunior9395@gmail.com">
          <button
            type="button"
            className="outline-none border-none py-4 px-12 border-2 uppercasetext-white bg-green-500 border-green-500
            w-4/6 text-gray-100 transition-colors ease-in duration-400
            hover:bg-green-600"
          >
            Enviar E-mail

          </button>
        </a>
        <a className="my-4 w-full text-center" href="curriculo.pdf">
          <button
            type="button"
            className="outline-none border-none py-4 px-12 border-2 uppercasetext-white bg-green-500 border-green-500
            w-4/6 text-gray-100 transition-colors ease-in duration-400
            hover:bg-green-600"
          >
            Baixar meu CV

          </button>
        </a>

        <footer className="text-center mt-12 mb-4 text-gray-300">
          <p>© Copyright 2021</p>
          <p>
            Made by
            {' '}
            <span className="font-bold text-white">Paulo Sérgio</span>
            {' '}
            with tailwindcss
          </p>
        </footer>
      </section>
    );
  }
}
