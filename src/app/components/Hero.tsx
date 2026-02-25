import tentImage from './figma/image.png';

export function Hero() {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-[#EAE5DC]">
      <div className="w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Side - Text */}
          <div className="px-8 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-24">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              NOUT’ FONNKER,
              <br />
              votre partenaire de confiance pour un séjour immersif inoubliable
            </h2>
            <button
              onClick={scrollToServices}
              className="text-lg border-b-2 border-black pb-1 hover:border-[#354024] hover:text-[#354024] transition-colors"
              style={{ fontFamily: "'Inter', sans-serif" }}
            >
              LES SERVICES
            </button>
          </div>

          {/* Right Side - Image */}
          <div className="relative h-[500px] lg:h-screen">
            <img
              src={tentImage}
              alt="Tente safari premium dans la nature"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}