import Link from 'next/link';

// Dados dos serviços
const services = [
  {
    id: 1,
    title: 'Projetos Arquitetônicos',
    description: 'Desenvolvemos projetos residenciais e comerciais, desde o conceito até a execução, garantindo funcionalidade e estética.',
  },
  {
    id: 2,
    title: 'Laudos Técnicos',
    description: 'Realizamos laudos de avaliação, patologias, acessibilidade e regularizações, com precisão e agilidade.',
  },
  {
    id: 3,
    title: 'Gestão de Obras',
    description: 'Acompanhamos todas as etapas da obra, garantindo qualidade, segurança e cumprimento dos prazos.',
  }
];

const ProjectsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 font-serif">
            Nossos Serviços
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções completas em arquitetura e engenharia, com qualidade e inovação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link href="/portfolio" key={service.id} className="group">
              <div className="relative h-80 overflow-hidden rounded-lg shadow-lg">
                {service.id === 2 ? (
                  <img 
                    src="https://samoengenharia.com.br/wp-content/uploads/2021/08/Laudo-de-Entrega-e-Recebimento-de-Obras-no-bairro-Funcionarios-1024x632.jpg"
                    alt={service.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    style={{ objectPosition: 'center center' }}
                  />
                ) : service.id === 3 ? (
                  <img 
                    src="https://djereformas.com.br/wp-content/uploads/2024/02/Como-Encontrar-Obras-em-Andamento-Guia-Completo-e-Atualizado.jpg"
                    alt={service.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    style={{ objectPosition: 'center center' }}
                  />
                ) : (
                  <img 
                    src="https://images.unsplash.com/photo-1574351391781-5fe86e0a6eb7?q=80&w=1974&auto=format&fit=crop"
                    alt={service.title}
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105"
                  />
                )}
                
                {/* Overlay com título e descrição que aparece no hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                  <p className="text-gray-200 text-sm">{service.description}</p>
                  <span className="mt-4 text-primary font-medium inline-flex items-center">
                    Saiba mais
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            href="/portfolio" 
            className="inline-block bg-primary hover:bg-accent-hover text-white py-3 px-8 rounded-md shadow-md transition duration-300 font-medium"
          >
            VER PROJETOS
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection; 