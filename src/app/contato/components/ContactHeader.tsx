export default function ContactHeader() {
  return (
    <div className="container mx-auto px-4">
      <div className="border-t border-gray-200 mt-8 mb-8"></div>
      
      <div className="py-10">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
          Contato
        </h1>
        
        <div className="max-w-5xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative">
            {/* Coluna da esquerda */}
            <div className="text-right">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Na Rekai Arquitetura e Engenharia
              </h2>
              
              <p className="text-gray-600 text-right">
                Estamos prontos para ajudar você a transformar suas ideias em realidade. 
                Seja para tirar dúvidas, solicitar um orçamento ou conhecer melhor nossos 
                serviços, nossa equipe está à disposição para oferecer o melhor atendimento.
              </p>
            </div>
            
            {/* Coluna da direita */}
            <div>
              <p className="font-medium text-gray-800 mb-2">Entre em contato:</p>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-800 mr-2">Telefone:</span>
                  <span className="text-gray-600">+55 (11) 97642-8037</span>
                </div>
              </div>
              
              <div className="mb-4 flex items-center">
                <div className="w-6 h-6 mr-2 text-green-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10c0 5.523-4.477 10-10 10m0-22C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0" />
                  </svg>
                </div>
                <span className="text-gray-600">WhatsApp: +55 (11) 97642-8037</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-6 h-6 mr-2 text-green-500">
                  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 11.87-1.44L12 11l6.73-4.2a.85.85 0 11.87 1.44z" />
                  </svg>
                </div>
                <span className="text-gray-600">contato@rekaiengenharia.com.br</span>
              </div>
            </div>
          </div>
          
          {/* Linha vertical no meio para desktop */}
          <div className="hidden md:block absolute h-full border-r border-gray-300" style={{ left: '50%', top: 0 }}></div>
          
          {/* Linha horizontal para mobile */}
          <div className="md:hidden w-full border-t border-gray-300 my-6"></div>
        </div>
      </div>
      
      <div className="border-b border-gray-200 mb-8"></div>
    </div>
  );
} 