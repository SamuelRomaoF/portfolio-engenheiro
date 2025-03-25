export default function QSMSSection() {
  const diferenciais = [
    {
      icon: "drone",
      title: "TECNOLOGIA E INOVAÇÃO",
      description: "Utilizamos ferramentas de ponta, como drones e BIM (Building Information Modeling), para garantir precisão, agilidade e eficiência em todos os nossos projetos."
    },
    {
      icon: "client",
      title: "ATENDIMENTO PERSONALIZADO",
      description: "Oferecemos um atendimento dedicado e personalizado, entendendo as necessidades de cada cliente para entregar soluções sob medida e resultados excepcionais."
    },
    {
      icon: "leaf",
      title: "COMPROMISSO COM A SUSTENTABILIDADE",
      description: "Promovemos práticas sustentáveis e ecoeficientes em todos os nossos projetos, desde a escolha de materiais até a gestão de resíduos, contribuindo para um futuro mais verde."
    },
    {
      icon: "handshake",
      title: "TRANSPARÊNCIA E CONFIANÇA",
      description: "Mantemos um relacionamento transparente e honesto com nossos clientes, garantindo clareza em todas as etapas do projeto, desde o orçamento até a entrega final."
    },
    {
      icon: "team",
      title: "EQUIPE MULTIDISCIPLINAR",
      description: "Contamos com uma equipe multidisciplinar de arquitetos, engenheiros e especialistas, que trabalham de forma integrada para oferecer soluções completas e inovadoras."
    },
    {
      icon: "star",
      title: "QUALIDADE GARANTIDA",
      description: "Nosso compromisso com a qualidade é refletido em cada detalhe dos nossos projetos, desde o planejamento até a execução, garantindo resultados que superam expectativas."
    },
    {
      icon: "clock",
      title: "AGILIDADE E CUMPRIMENTO DE PRAZOS",
      description: "Entregamos projetos dentro dos prazos estabelecidos, sem abrir mão da qualidade e da atenção aos detalhes, graças a uma gestão eficiente e processos otimizados."
    },
    {
      icon: "heart",
      title: "FOCO NO CLIENTE",
      description: "Colocamos o cliente no centro de tudo o que fazemos, buscando sempre superar suas expectativas e entregar soluções que agreguem valor ao seu negócio ou residência."
    }
  ];

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'drone':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M22 9l-3-3M18 13l3 3M6 13l-3 3M2 9l3-3 M12 20v-8 M12 8V4 M8 12H4 M20 12h-4" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="4" cy="4" r="1" />
            <circle cx="20" cy="4" r="1" />
            <circle cx="4" cy="20" r="1" />
            <circle cx="20" cy="20" r="1" />
          </svg>
        );
      case 'client':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2a3 3 0 0 0-3 3c0 1.6 1.3 2.9 3 3 1.6-.1 3-1.4 3-3s-1.3-3-3-3zm5 9v-1a5 5 0 0 0-5-5C9 5 7 7 7 10v1m11 1v8a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2z" />
            <path d="M12 16l2 2 4-4" />
          </svg>
        );
      case 'leaf':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 22c3-3 4-5 4-8 0-1.5-.5-3-2-4" />
            <path d="M8 18c-1.5-1.5-2-3-2-4 0-3 3-4 3-4l1 4c.5-3 2-4 2-4s1 1 1 4c0 3-2 6-4 8" />
          </svg>
        );
      case 'handshake':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 17l-5-5m5 5l7-7m-7 7l-3-3m3 3l3-3m-8.5-3.5L7 8" />
            <path d="M20 14l-5-5-2-2" />
            <path d="M16 16l-3.5 3.5M2 12h3m14 0h3" />
          </svg>
        );
      case 'team':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="7" r="4" />
            <circle cx="5" cy="9" r="2" />
            <circle cx="19" cy="9" r="2" />
            <path d="M12 15h.01M12 15c-3.17 0-5.99 1.53-6 3.08V21h12v-2.92c-.01-1.55-2.83-3.08-6-3.08zM4.24 17.25l-.8.16c-.17.34.04.85.47 1.1.85.5 1.09.51 1.09.51v2h2v-2.16c0-.63-.5-1.16-1.13-1.16H4.24zM19.76 17.25l.8.16c.17.34-.04.85-.47 1.1-.85.5-1.09.51-1.09.51v2h-2v-2.16c0-.63.5-1.16 1.13-1.16h1.63z" />
          </svg>
        );
      case 'star':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        );
      case 'clock':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        );
      case 'heart':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold uppercase mb-6">
            Política de Quem Somos
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
            Na Rekai Arquitetura e Engenharia, nossa política é pautada por valores sólidos e compromissos claros com nossos clientes, colaboradores, fornecedores e o meio ambiente. Acreditamos que a excelência em nossos serviços só é possível quando aliamos qualidade, inovação e responsabilidade social e ambiental.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {diferenciais.map((diferencial, index) => (
            <div key={index} className="flex flex-col items-center p-4">
              <div>
                {getIconComponent(diferencial.icon)}
              </div>
              <h3 className="text-sm font-bold text-center mb-3">{diferencial.title}</h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed">
                {diferencial.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 