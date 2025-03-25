interface ContactSectionProps {
  title?: string;
  description?: string;
  subDescription?: string;
  phonesSP?: string;
  phonesRJ?: string;
  whatsapp?: string;
  email?: string;
}

export default function ContactSection({
  title = "Contatos",
  description = "Há mais de 30 anos ajudando a criar e construir espaços inspiradores.",
  subDescription = "Sabemos que projetos e obras podem ser grandes desafios. Nós queremos te ajudar! Conte o que está buscando para ser direcionado ao especialista que melhor atende à sua necessidade.",
  phonesSP = "+55 (11) 5501-6901",
  phonesRJ = "+55 (21) 3289-2550",
  whatsapp = "+55 (11) 96301-1138",
  email = "comercial@awnet.com.br"
}: ContactSectionProps) {
  return (
    <section className="py-12 px-6 md:px-12 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 items-stretch relative">
          {/* Coluna da esquerda com textos */}
          <div className="md:w-1/2 text-right md:pr-8 py-2">
            <p className="text-lg font-bold text-gray-800 mb-6">
              {description}
            </p>
            <p className="text-sm text-gray-600">
              {subDescription}
            </p>
          </div>
          
          {/* Linha vertical divisória (visível apenas em telas médias e maiores) */}
          <div className="hidden md:block absolute left-1/2 top-0 w-px bg-gray-400" style={{ height: '100%', transform: 'translateX(-50%)' }}></div>
          
          {/* Coluna da direita com contatos */}
          <div className="md:w-1/2 md:pl-8 py-2">
            <div className="mb-6">
              <p className="text-sm font-bold text-gray-700 mb-2 flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Se preferir, ligue para:
              </p>
              <div className="space-y-1">
                <div className="flex items-start">
                  <span className="text-sm font-semibold mr-2">SP:</span>
                  <a href={`tel:${phonesSP.replace(/\D/g, '')}`} className="text-gray-700 hover:text-gray-900 transition-colors">
                    {phonesSP}
                  </a>
                </div>
                <div className="flex items-start">
                  <span className="text-sm font-semibold mr-2">RJ:</span>
                  <a href={`tel:${phonesRJ.replace(/\D/g, '')}`} className="text-gray-700 hover:text-gray-900 transition-colors">
                    {phonesRJ}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mb-4 space-y-2">
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                </svg>
                <a href={`https://wa.me/${whatsapp.replace(/\D/g, '')}`} className="text-gray-700 hover:text-gray-900 transition-colors">
                  {whatsapp}
                </a>
              </div>
              
              <div className="flex items-center">
                <svg className="w-4 h-4 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
                <a href={`mailto:${email}`} className="text-gray-700 hover:text-gray-900 transition-colors">
                  {email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 