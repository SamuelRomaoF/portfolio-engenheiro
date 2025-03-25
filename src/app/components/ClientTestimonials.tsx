
// Dados de exemplo para depoimentos
const testimonials = [
  {
    id: 1,
    name: 'Roberto Almeida',
    role: 'Administrador de Condomínio',
    content: 'O laudo técnico foi fundamental para identificarmos os problemas estruturais do nosso edifício. A qualidade do serviço e a clareza das explicações nos ajudaram muito no planejamento das reformas necessárias.',
    image: '/images/testimonial-1.jpg'
  },
  {
    id: 2,
    name: 'Carla Santana',
    role: 'Síndica',
    content: 'Precisávamos de um laudo cautelar de vizinhança antes de uma obra ao lado do nosso condomínio. O trabalho foi realizado com agilidade e profissionalismo, documentando perfeitamente as condições do nosso prédio.',
    image: '/images/testimonial-2.jpg'
  },
  {
    id: 3,
    name: 'Marcos Oliveira',
    role: 'Construtora MO',
    content: 'Contratamos o serviço de consultoria para um projeto estrutural complexo. O conhecimento técnico e a capacidade de encontrar soluções inovadoras foram diferenciais que agregaram muito valor ao nosso empreendimento.',
    image: '/images/testimonial-3.jpg'
  }
];

const ClientTestimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            A satisfação de nossos clientes é o nosso maior indicador de qualidade. 
            Confira alguns depoimentos de quem confiou em nossos serviços.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-200 mr-4">
                  {/* Substituir por imagens reais posteriormente */}
                  <div className="w-full h-full flex items-center justify-center">
                    <p className="text-gray-500 text-xs">Foto</p>
                  </div>
                  {/* <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  /> */}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              <p className="text-gray-600 italic">"{testimonial.content}"</p>
              
              <div className="mt-4 flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials; 