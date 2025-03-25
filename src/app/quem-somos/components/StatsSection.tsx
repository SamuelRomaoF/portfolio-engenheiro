export default function StatsSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center uppercase mb-16">
          NOSSA HISTÓRIA
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-5xl mx-auto">
          <div className="flex flex-col items-center">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">2+</p>
            <p className="text-lg font-medium">anos</p>
            <p className="text-sm text-gray-400">no mercado</p>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">+100mil</p>
            <p className="text-lg font-medium">m²</p>
            <p className="text-sm text-gray-400">em projetos</p>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">+50</p>
            <p className="text-lg font-medium">projetos</p>
            <p className="text-sm text-gray-400">entregues</p>
          </div>
          
          <div className="flex flex-col items-center">
            <p className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2">100+</p>
            <p className="text-lg font-medium">clientes</p>
            <p className="text-sm text-gray-400">atendidos</p>
          </div>
        </div>
      </div>
    </section>
  );
} 