interface ServiceDetail {
  title: string;
  description: string;
}

interface ProjectInfoProps {
  serviceDetails?: ServiceDetail[];
  subtitulo?: string;
}

export default function ProjectInfo({
  serviceDetails,
  subtitulo
}: ProjectInfoProps) {
  // Lista de serviços para Proprietários (a ser exibida quando serviceDetails não estiver presente)
  const proprietariosServices = [
    {
      title: 'Projetos Residenciais',
      description: 'Desenvolvemos projetos arquitetônicos e executivos sob medida, desde reformas até construções do zero, garantindo conforto, segurança e aprovação na prefeitura.'
    },
    {
      title: 'Regularizações',
      description: 'Regularizamos imóveis com pendências cadastrais, resolvendo problemas como: Área construída não declarada, Divisão irregular de lotes, Habite-se não emitido e registro de matrículas.'
    },
    {
      title: 'Laudos de Avaliação e Patologias',
      description: 'Identificamos problemas estruturais (trincas, infiltrações) e avaliamos o valor de mercado do imóvel para: Venda ou compra segura, Processos judiciais e Garantias bancárias.'
    },
    {
      title: 'Desdobros de Lotes',
      description: 'Dividimos seu terreno dentro da lei, maximizando o valor do patrimônio. Aprovamos desmembramentos em: Loteamentos urbanos, Heranças familiares e Áreas rurais.'
    },
    {
      title: 'Financiamentos de Obra (Caixa)',
      description: 'Assessoria completa para financiamento pela Caixa Econômica para Elaboração do projeto técnico, Acompanhamento burocrático e Liberação de recursos acelerada.'
    }
  ];

  return (
    <section className="py-8 px-6 md:px-12 border-b border-gray-200">
      {/* Título Único */}
      <h2 className="text-center text-blue-500 text-lg font-medium mb-4">Serviços oferecidos</h2>

      {/* Exibição condicional: SUBTÍTULO e lista de serviços */}
      {serviceDetails && serviceDetails.length > 0 ? (
        // Bloco IF (para Advogados, Empresas, Rurais, etc.)
        <div className="max-w-3xl mx-auto">
          {/* Subtítulo agora vem da prop */}
          {subtitulo && <h3 className="font-semibold text-center text-gray-800 text-md mb-6">{subtitulo}</h3>}
          <ul className="space-y-4">
            {serviceDetails.map((service, index) => (
              <li key={index}>
                <p className="font-medium text-gray-700">• {service.title}:</p>
                <p className="text-sm text-gray-900 ml-4 leading-relaxed">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        // Bloco ELSE (para Proprietários)
        <div className="max-w-3xl mx-auto">
          {/* Subtítulo Fixo para este bloco */}
          <h3 className="font-semibold text-center text-gray-800 text-md mb-6">Proprietários de Imóveis</h3>
          <ul className="space-y-4">
            {proprietariosServices.map((service, index) => (
              <li key={index}>
                <p className="font-medium text-gray-900">• {service.title}:</p>
                <p className="text-sm text-gray-900 ml-4 leading-relaxed">{service.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
} 