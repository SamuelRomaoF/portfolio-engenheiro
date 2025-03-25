
// Dados de serviços principais
const keyServices = [
  {
    id: 1,
    title: 'Projetos Arquitetônicos',
    description: 'Desenvolvemos projetos residenciais e comerciais, desde o conceito até a execução, garantindo funcionalidade e estética. Utilizamos tecnologias inovadoras, como o BIM, para entregar resultados precisos e alinhados com as expectativas dos clientes.',
  },
  {
    id: 2,
    title: 'Laudos Técnicos',
    description: 'Realizamos laudos de avaliação, patologias, acessibilidade e regularizações, com precisão e agilidade. Nossos laudos são elaborados por profissionais experientes, garantindo segurança e conformidade com as normas técnicas.',
  },
  {
    id: 3,
    title: 'Gestão de Obras',
    description: 'Acompanhamos todas as etapas da obra, desde o planejamento até a entrega, garantindo qualidade, segurança e cumprimento dos prazos. Nossa gestão eficiente evita imprevistos e garante a satisfação dos clientes.',
  }
];

const KeyServices = () => {
  // Função para lidar com redirecionamento direto
  const redirectToPortfolio = () => {
    window.location.href = '/portfolio';
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Conheça algumas das nossas soluções em engenharia civil e laudos técnicos para garantir a segurança e qualidade da sua edificação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {keyServices.map((service) => (
            <div 
              key={service.id} 
              className="bg-white overflow-hidden rounded-lg shadow-sm cursor-pointer transition-all duration-300 hover:shadow-md"
              onClick={redirectToPortfolio}
            >
              <div className="h-64 w-full">
                {/* Usando a mesma imagem de planta de engenharia para todos os cards */}
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2831&auto=format&fit=crop" 
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button 
            onClick={redirectToPortfolio}
            className="inline-block bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-md shadow-md transition duration-300 font-medium"
          >
            VER TODOS OS PROJETOS
          </button>
        </div>
      </div>
    </section>
  );
};

export default KeyServices; 