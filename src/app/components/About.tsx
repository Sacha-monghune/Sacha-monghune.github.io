import { ImageWithFallback } from './figma/ImageWithFallback';
import tentImage from './figma/image.png';
import dejeunerImage from './figma/dejeuner.png';
import campImage from './figma/camp.png';

export function About() {
  return (
    <section id="about" className="py-20 bg-[#889063]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl sm:text-5xl text-center text-white mb-12" style={{ fontFamily: "'Playfair Display', serif" }}>
          Qui sommes nous ?
        </h2>

        {/* Images Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={tentImage}
              alt="Tente safari premium"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={dejeunerImage}
              alt="Déjeuner en pleine nature"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-lg">
            <img
              src={campImage}
              alt="Campement au coucher du soleil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Description Text */}
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-white/90 leading-relaxed mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
            Depuis plusieurs années, nout’ FonnKer s'engage à offrir des expériences de camping immersives et authentiques à La Réunion. Spécialisés dans les séjours sur mesure, adaptés aux besoins de chaque voyageur, nous sélectionnons avec soin les plus beaux emplacements de l'île. Notre priorité est de vous garantir des moments inoubliables, en pleine nature, dans le respect de l'environnement et de la culture réunionnaise, grâce à une équipe passionnée et des solutions personnalisées.
          </p>
          <button
            className="text-lg text-white border-b-2 border-white pb-1 hover:border-[#354024] hover:text-[#354024] transition-colors"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            EN SAVOIR PLUS
          </button>
        </div>
      </div>
    </section>
  );
}