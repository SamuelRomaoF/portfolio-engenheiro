import Link from 'next/link';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

// Dados dos serviços
const servicesData = [
  {
    id: 1,
    title: 'Laudos de Avaliação Estrutural',
    description: 'Análise detalhada da estrutura de edificações para identificar problemas, determinar sua segurança estrutural e propor soluções adequadas.',
    image: '/images/servico-avaliacao-estrutural.jpg',
  },
  {
    id: 2,
    title: 'Laudo Cautelar de Vizinhança',
    description: 'Documento que registra as condições dos imóveis vizinhos antes do início de uma obra, prevenindo futuros litígios relacionados a danos.',
    image: '/images/servico-cautelar-vizinhanca.jpg',
  },
  {
    id: 3,
    title: 'Inspeção Predial',
    description: 'Vistoria técnica que avalia as condições de conservação de um edifício, identificando anomalias e recomendando manutenções preventivas e corretivas.',
    image: '/images/servico-inspecao-predial.jpg',
  },
  {
    id: 4,
    title: 'Laudo de Patologias Pós Obra',
    description: 'Identificação e diagnóstico de problemas construtivos que aparecem após a conclusão da obra, apontando causas e soluções.',
    image: '/images/servico-patologias-pos-obra.jpg',
  },
  {
    id: 5,
    title: 'Laudo de Fissuras e Trincas',
    description: 'Análise especializada das causas de fissuras e trincas em edificações, avaliando riscos e propondo soluções de recuperação.',
    image: '/images/servico-fissuras-trincas.jpg',
  },
  {
    id: 6,
    title: 'Projetos de Estruturas Metálicas e de Concreto',
    description: 'Desenvolvimento de projetos estruturais completos, com dimensionamento, detalhamento e especificações técnicas para garantir segurança e durabilidade.',
    image: '/images/servico-projetos-estruturais.jpg',
  },
  {
    id: 7,
    title: 'Assistência Técnica Judicial',
    description: 'Atuação como assistente técnico em processos judiciais, elaborando pareceres técnicos e acompanhando perícias relacionadas à engenharia civil.',
    image: '/images/servico-assistencia-judicial.jpg',
  },
  {
    id: 8,
    title: 'Consultoria em Engenharia Civil',
    description: 'Assessoria técnica para problemas estruturais, patologias, otimização de projetos e análise de conformidade com normas técnicas vigentes.',
    image: '/images/servico-consultoria.jpg',
  },
];

export default function Servicos() {
  return (
    <main>
      <Navbar />
      
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary text-center mb-4">Nossos Serviços</h1>
          <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
            Oferecemos uma ampla gama de serviços especializados em engenharia civil, 
            incluindo laudos técnicos, perícias, inspeções e projetos estruturais, com foco na 
            qualidade, precisão e segurança.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
            {servicesData.map((service) => (
              <div 
                key={service.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="relative h-56 w-full bg-gray-200">
                  {/* Descomente quando tiver imagens reais
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-gray-500">Imagem de {service.title}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <Link 
                    href={`/servicos/${service.id}`} 
                    className="inline-flex items-center text-primary font-medium hover:text-accent-hover"
                  >
                    Ver detalhes
                    <svg
                      className="w-4 h-4 ml-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Precisa de um serviço personalizado?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Cada projeto tem suas particularidades. Entre em contato conosco para discutirmos suas necessidades 
              específicas e desenvolvermos uma solução sob medida para o seu caso.
            </p>
            <Link 
              href="/contato" 
              className="inline-block bg-primary hover:bg-accent-hover text-white py-3 px-8 rounded-md shadow-md transition duration-300 font-medium"
            >
              SOLICITE UM ORÇAMENTO
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
} 