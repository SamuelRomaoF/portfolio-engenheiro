import React from 'react';
import Link from 'next/link';

const CtaSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-green-700 to-green-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Precisa de um laudo técnico de engenharia?
        </h2>
        <p className="text-xl md:text-2xl text-green-100 max-w-3xl mx-auto mb-10">
          Entre em contato conosco hoje mesmo e solicite um orçamento 
          personalizado para o seu projeto.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            href="/contato" 
            className="inline-block bg-white text-green-700 hover:bg-green-100 py-4 px-8 rounded-md shadow-md transition duration-300 font-bold text-lg"
          >
            SOLICITAR ORÇAMENTO
          </Link>
          <Link 
            href="/servicos" 
            className="inline-block border-2 border-white text-white hover:bg-white hover:text-green-700 py-4 px-8 rounded-md transition duration-300 font-bold text-lg"
          >
            CONHECER SERVIÇOS
          </Link>
        </div>
        <div className="mt-12 flex justify-center items-center gap-8">
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">+500</p>
            <p className="text-green-100">Clientes Satisfeitos</p>
          </div>
          <div className="h-12 w-px bg-green-500"></div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">+1000</p>
            <p className="text-green-100">Laudos Realizados</p>
          </div>
          <div className="h-12 w-px bg-green-500"></div>
          <div className="flex flex-col items-center">
            <p className="text-4xl font-bold">15+</p>
            <p className="text-green-100">Anos de Experiência</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection; 