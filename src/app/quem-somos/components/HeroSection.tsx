"use client"

export default function HeroSection() {
  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* Layout para desktop - imagem à direita, visível apenas em telas médias e grandes */}
      <div className="absolute top-0 right-0 w-2/5 h-full hidden md:flex items-center justify-center pr-8 pt-16">
        <div className="w-full h-[80%] overflow-hidden rounded-2xl">
          <div className="w-full h-full transition-all duration-500 hover:filter-none filter grayscale relative">
            <img 
              src="https://img.freepik.com/fotos-premium/equipe-de-engenheiros-e-arquitetos-discutindo-projeto-arquitetonico-no-escritorio_236854-41404.jpg" 
              alt="Equipe Rekai Engenharia"
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
      </div>
      
      {/* Imagem para dispositivos móveis - visível apenas em telas pequenas */}
      <div className="w-full md:hidden pt-20 px-6">
        <div className="w-full h-60 overflow-hidden rounded-xl mb-6">
          <div className="w-full h-full filter grayscale">
            <img 
              src="https://img.freepik.com/fotos-premium/equipe-de-engenheiros-e-arquitetos-discutindo-projeto-arquitetonico-no-escritorio_236854-41404.jpg" 
              alt="Equipe Rekai Engenharia"
              className="object-cover object-center w-full h-full"
            />
          </div>
        </div>
      </div>
      
      {/* Conteúdo - textos alinhados à direita em desktop, centralizados em mobile */}
      <div className="w-full md:w-3/5 flex flex-col px-6 md:px-12 pt-4 md:pt-32 pb-10">
        <div className="text-center md:text-right mb-6">
          <p className="text-sm font-medium tracking-wider">#EXCELÊNCIAEMPROJETOS</p>
        </div>
        
        <div className="text-center md:text-right">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 tracking-wide leading-tight uppercase">
            <span className="block">Rekai</span>
            <span className="block">Arquitetura</span>
            <span className="block">E Engenharia:</span>
            <span className="block">Transformando</span>
            <span className="block">Ideias Em</span>
            <span className="block">Realidade</span>
          </h1>
          
          <p className="text-base text-gray-300 mb-10 leading-relaxed px-4 md:px-0">
            <span className="block">A Rekai Arquitetura e Engenharia se dedica a transformar ideias</span>
            <span className="block">e inspirações em projetos memoráveis. Somos especialistas em</span>
            <span className="block">oferecer soluções completas em arquitetura, urbanismo e</span>
            <span className="block">engenharia civil, com foco em qualidade, inovação e</span>
            <span className="block">atendimento personalizado.</span>
          </p>
        </div>
        
        <div className="w-full mb-12">
          <h2 className="text-xl font-bold tracking-wide uppercase text-center mb-8">
            NOSSA MISSÃO, VISÃO E VALORES
          </h2>
          
          <div className="text-center md:text-right mb-6 px-4 md:px-0">
            <p className="text-base leading-relaxed">
              <span className="font-medium">Missão:</span> &ldquo;Simplificar a execução de projetos, entregando resultados excepcionais com qualidade, inovação e atendimento diferenciado.&rdquo;
            </p>
          </div>
          
          <div className="text-center md:text-right mb-6 px-4 md:px-0">
            <p className="text-base leading-relaxed">
              <span className="font-medium">Visão:</span> &ldquo;Ser reconhecida como referência em arquitetura e engenharia, destacando-se pela excelência e compromisso com os clientes.&rdquo;
            </p>
          </div>
          
          <div className="text-center md:text-right px-4 md:px-0">
            <p className="text-base font-medium mb-3">Valores:</p>
            <p className="text-base leading-relaxed">
              <span className="font-medium">Comprometimento:</span> Entregamos o melhor em cada projeto.
            </p>
            <p className="text-base leading-relaxed">
              <span className="font-medium">Inovação:</span> Utilizamos tecnologia de ponta para soluções eficientes.
            </p>
            <p className="text-base leading-relaxed">
              <span className="font-medium">Transparência:</span> Mantemos um relacionamento claro e honesto com nossos clientes.
            </p>
            <p className="text-base leading-relaxed">
              <span className="font-medium">Sustentabilidade:</span> Promovemos práticas ecoeficientes em todos os projetos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 