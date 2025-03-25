import React, { useState } from 'react';
import Image from 'next/image';

const testimonialsData = [
  {
    id: 1,
    name: 'Carlos Mendes',
    role: 'Diretor da Construtora Horizonte',
    content: 'Trabalhamos juntos em diversos projetos residenciais. Sempre entrega trabalhos de qualidade dentro do prazo, com soluções técnicas que otimizam recursos sem comprometer a segurança.',
    image: '/placeholder.jpg',
  },
  {
    id: 2,
    name: 'Fernanda Oliveira',
    role: 'Arquiteta',
    content: 'Excelente profissional que compreende perfeitamente a integração entre arquitetura e engenharia. Nosso projeto conjunto de um centro comercial foi um sucesso graças à sua competência técnica.',
    image: '/placeholder.jpg',
  },
  {
    id: 3,
    name: 'Ricardo Almeida',
    role: 'Proprietário de Indústria',
    content: 'O projeto estrutural do nosso complexo industrial foi impecável. A atenção aos detalhes e o cuidado com as especificidades da nossa operação resultaram em uma estrutura perfeita para nossas necessidades.',
    image: '/placeholder.jpg',
  },
  {
    id: 4,
    name: 'Marina Santos',
    role: 'Gerente de Incorporação',
    content: 'Contratamos seus serviços para um laudo técnico emergencial e fomos surpreendidos positivamente com a rapidez e profundidade da análise. Sua consultoria nos poupou de problemas futuros.',
    image: '/placeholder.jpg',
  },
  {
    id: 5,
    name: 'Paulo Soares',
    role: 'Proprietário Residencial',
    content: 'Contratei para o projeto estrutural da minha residência e fiquei muito satisfeito. Explicou todos os detalhes técnicos de forma clara e propôs soluções para otimizar custos sem comprometer a qualidade.',
    image: '/placeholder.jpg',
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  return (
    <section id="depoimentos" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Depoimentos</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            O que meus clientes e parceiros dizem sobre meu trabalho e minha abordagem profissional.
          </p>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        {/* Depoimentos em carrossel para mobile e tablet */}
        <div className="relative md:hidden">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
            <div className="mb-6 text-blue-600">
              <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h6V14h-4c0-2.2 1.8-4 4-4zm12 0c-3.3 0-6 2.7-6 6v10h6V14h-4c0-2.2 1.8-4 4-4z" />
              </svg>
            </div>
            <p className="text-gray-700 mb-6 italic">
              {testimonialsData[activeIndex].content}
            </p>
            <div className="flex items-center">
              <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-300 mr-4">
                {/* Substitua com foto real */}
                {/* <Image
                  src={testimonialsData[activeIndex].image}
                  alt={testimonialsData[activeIndex].name}
                  width={48}
                  height={48}
                  className="object-cover"
                /> */}
              </div>
              <div>
                <p className="font-semibold text-gray-800">{testimonialsData[activeIndex].name}</p>
                <p className="text-gray-600 text-sm">{testimonialsData[activeIndex].role}</p>
              </div>
            </div>
          </div>
          
          {/* Controles do carrossel */}
          <div className="flex justify-center gap-4 mt-6">
            <button
              onClick={prevTestimonial}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
              aria-label="Depoimento anterior"
            >
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white p-2 rounded-full shadow hover:bg-gray-100"
              aria-label="Próximo depoimento"
            >
              <svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Indicadores */}
          <div className="flex justify-center gap-2 mt-4">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'w-4 bg-blue-600' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Ver depoimento ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        
        {/* Grid de depoimentos para desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-lg p-6 md:p-8"
            >
              <div className="mb-6 text-blue-600">
                <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h6V14h-4c0-2.2 1.8-4 4-4zm12 0c-3.3 0-6 2.7-6 6v10h6V14h-4c0-2.2 1.8-4 4-4z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-6 italic">
                {testimonial.content}
              </p>
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-gray-300 mr-4">
                  {/* Substitua com foto real */}
                  {/* <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  /> */}
                </div>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 