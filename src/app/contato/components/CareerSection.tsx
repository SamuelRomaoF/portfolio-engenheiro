export default function CareerSection() {
  return (
    <div className="container mx-auto px-4 bg-white">
      <div className="max-w-5xl mx-auto relative">
        {/* Grid com duas colunas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 relative">
          {/* Coluna da esquerda */}
          <div className="pr-6 md:border-r border-gray-200 py-8 md:py-12 flex">
            <div className="flex-1 text-right pr-4">
              <h3 className="font-bold text-gray-800 text-xl mb-3">
                Quer fazer parte do time<br />da Rekai?
              </h3>
              <p className="text-gray-600 mb-1">
                Envie seu currículo para:
              </p>
              <a href="mailto:recrutamento@rekaiengenharia.com.br" className="text-gray-600 flex items-center justify-end">
                <span className="inline-flex mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </span>
                <span>recrutamento@rekaiengenharia.com.br</span>
              </a>
            </div>
            <div className="flex-shrink-0 ml-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-700">
                <path d="M12 .75a8.25 8.25 0 00-4.135 15.39c.686.398 1.115 1.008 1.134 1.623a.75.75 0 00.577.706c.352.083.71.148 1.074.195.323.041.6.218.765.45.274.48.497.981.66 1.5.176.541.71.919 1.322.919h1.216a1.3 1.3 0 001.322-.919c.163-.519.386-1.02.66-1.5.165-.232.442-.409.765-.45.364-.047.722-.112 1.074-.195a.75.75 0 00.577-.706c.02-.615.448-1.225 1.134-1.623A8.25 8.25 0 0012 .75z" />
                <path fillRule="evenodd" d="M9.013 19.9a.75.75 0 01.877-.597 11.319 11.319 0 004.22 0 .75.75 0 11.28 1.473 12.819 12.819 0 01-4.78 0 .75.75 0 01-.597-.877z" clipRule="evenodd" />
              </svg>
            </div>
          </div>

          {/* Coluna da direita */}
          <div className="pl-6 py-8 md:py-12 flex">
            <div className="flex-shrink-0 mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-gray-700">
                <path d="M11.644 1.59a.75.75 0 01.712 0l9.75 5.25a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.712 0l-9.75-5.25a.75.75 0 010-1.32l9.75-5.25z" />
                <path d="M3.265 10.602l7.668 4.129a2.25 2.25 0 002.134 0l7.668-4.13 1.37.739a.75.75 0 010 1.32l-9.75 5.25a.75.75 0 01-.71 0l-9.75-5.25a.75.75 0 010-1.32l1.37-.738z" />
                <path d="M10.933 19.231l-7.668-4.13-1.37.739a.75.75 0 000 1.32l9.75 5.25c.221.12.489.12.71 0l9.75-5.25a.75.75 0 000-1.32l-1.37-.738-7.668 4.13a2.25 2.25 0 01-2.134-.001z" />
              </svg>
            </div>
            <div className="flex-1 pl-4">
              <h3 className="font-bold text-gray-800 text-xl mb-3">
                Time de fornecedores
              </h3>
              <p className="text-gray-600 mb-1">
                Entre em contato pelo e-mail:
              </p>
              <a href="mailto:suprimentos@rekaiengenharia.com.br" className="text-gray-600 flex items-center">
                <span className="inline-flex mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                </span>
                <span>suprimentos@rekaiengenharia.com.br</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-b border-gray-200 my-2"></div>
    </div>
  );
} 