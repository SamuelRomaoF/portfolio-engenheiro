import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-end items-center h-20">
          {/* Links de navegação */}
          <div className="flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 transition duration-300 font-medium">
              HOME
            </Link>
            <Link href="/quem-somos" className="text-gray-700 hover:text-green-600 transition duration-300 font-medium">
              QUEM SOMOS
            </Link>
            <Link href="/servicos" className="text-gray-700 hover:text-green-600 transition duration-300 font-medium">
              SERVIÇOS
            </Link>
            <Link href="/contato" className="text-gray-700 hover:text-green-600 transition duration-300 font-medium">
              CONTATO
            </Link>
            
            {/* Telefone */}
            <div className="flex items-center ml-6">
              <div className="flex items-center text-yellow-500 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <span className="text-gray-700 font-medium">+55 (11) 97642-8037</span>
            </div>
            
            {/* Botão Fale Conosco */}
            <Link 
              href="/contato" 
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 ml-6 transition duration-300"
            >
              FALE CONOSCO
            </Link>
          </div>
          
          {/* Botão menu mobile */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-green-600 focus:outline-none">
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 