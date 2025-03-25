const About = () => {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Sobre a Empresa</h2>
          <div className="w-20 h-1 bg-green-600 mx-auto"></div>
        </div>
        
        <div className="flex flex-col md:flex-row items-center">
          {/* Logo ou imagem da empresa */}
          <div className="md:w-1/3 mb-10 md:mb-0 md:pr-10">
            <div className="relative h-80 w-80 mx-auto rounded-lg overflow-hidden border-4 border-green-100 shadow-lg">
              <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                <p className="text-gray-600">Logo da Empresa</p>
              </div>
            </div>
          </div>
          
          {/* Informações da empresa */}
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Tradição e Inovação em Projetos de Engenharia</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nossa empresa atua há mais de 15 anos no mercado, oferecendo soluções completas em projetos
              de engenharia civil para os mais diversos setores. Combinamos conhecimento técnico avançado
              com tecnologia de ponta para entregar projetos que unem segurança, funcionalidade e estética.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Contamos com uma equipe multidisciplinar de engenheiros e arquitetos especializados,
              comprometidos em superar expectativas e criar projetos que transformam ideias em realidade.
              Nossa metodologia de trabalho inclui acompanhamento personalizado em todas as etapas, desde
              a concepção até a entrega final.
            </p>
            
            {/* Diferenciais */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Projetos Personalizados</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Equipe Especializada</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Tecnologia Avançada</span>
              </div>
              <div className="flex items-center">
                <div className="bg-green-100 p-2 rounded-full mr-3">
                  <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">Compromisso com Prazos</span>
              </div>
            </div>
            
            {/* Botão contato */}
            <a 
              href="/contato" 
              className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md shadow-md transition duration-300 font-medium"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 