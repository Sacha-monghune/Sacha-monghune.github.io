import { ImageWithFallback } from './figma/ImageWithFallback';

const locations = [
  {
    title: 'Camping en Montagne',
    description: 'Vues panoramiques et air pur',
    image: 'https://images.unsplash.com/photo-1642737399476-fd009385afe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGNhbXBpbmclMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcxOTI2NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Bord de Lac',
    description: 'Couchers de soleil magiques',
    image: 'https://images.unsplash.com/photo-1597631002627-a3f7585dbdd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlc2lkZSUyMGNhbXBpbmclMjBzdW5zZXR8ZW58MXx8fHwxNzcxOTEyMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Camping Familial',
    description: 'Espaces sécurisés pour tous',
    image: 'https://images.unsplash.com/photo-1770808444385-53009f70fa88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjYW1waW5nJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzE5MjY1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'Camping Équipé',
    description: 'Tout le confort nécessaire',
    image: 'https://images.unsplash.com/photo-1759397496041-63d7889bd305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwZXF1aXBtZW50JTIwc2V0dXB8ZW58MXx8fHwxNzcxOTI2NTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Locations() {
  return (
    <section id="locations" className="py-20 bg-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nos Emplacements
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Découvrez la diversité de nos sites de camping exceptionnels
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <ImageWithFallback
                  src={location.image}
                  alt={location.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>{location.title}</h3>
                <p className="text-gray-200 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>{location.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}