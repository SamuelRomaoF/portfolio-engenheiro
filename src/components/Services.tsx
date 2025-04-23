
// Dados atualizados dos serviços
const servicesData = [
  {
    id: 1,
    title: 'Projetos Residenciais',
    description: 'Desenvolvemos projetos arquitetônicos e executivos sob medida, desde reformas até construções do zero, garantindo conforto, segurança e aprovação na prefeitura.',
  },
  {
    id: 2,
    title: 'Regularizações',
    description: 'Regularizamos imóveis com pendências cadastrais, resolvendo problemas como: Área construída não declarada, Divisão irregular de lotes, Habite-se não emitido e registro de matrículas.',
  },
  {
    id: 3,
    title: 'Laudos de Avaliação e Patologias',
    description: 'Identificamos problemas estruturais (trincas, infiltrações) e avaliamos o valor de mercado do imóvel para: Venda ou compra segura, Processos judiciais e Garantias bancárias.',
  },
  {
    id: 4,
    title: 'Desdobros de Lotes',
    description: 'Dividimos seu terreno dentro da lei, maximizando o valor do patrimônio. Aprovamos desmembramentos em: Loteamentos urbanos, Heranças familiares e Áreas rurais.',
  },
  {
    id: 5,
    title: 'Financiamentos de Obra (Caixa)',
    description: 'Assessoria completa para financiamento pela Caixa Econômica para Elaboração do projeto técnico, Acompanhamento burocrático e Liberação de recursos acelerada.',
  },
  // Removido o serviço 6 anterior
];

const Services = () => {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Serviços oferecidos</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="bg-gray-50 rounded-lg p-8 shadow-md hover:shadow-lg transition duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Precisa de um serviço personalizado?
          </h3>
          <a 
            href="#contato" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-md shadow-md transition duration-300 font-medium"
          >
            Entre em Contato
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services; 