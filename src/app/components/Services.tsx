import { Phone, Compass, Shield } from 'lucide-react';

const services = [
  {
    icon: Compass,
    title: 'Sites exceptionnels',
    description: 'Accès à des emplacements uniques en montagne, forêt et bord de lac',
  },
  {
    icon: Phone,
    title: 'Service personnalisé',
    description: 'Un accompagnant dédié vous guide tout au long de votre expérience',
  },
  {
    icon: Shield,
    title: 'Tranquillité assurée',
    description: 'Emplacements sécurisés et conformes à toutes les réglementations',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nos Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Une expérience de camping sur mesure, adaptée à vos envies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl hover:bg-[#889063]/10 transition-colors group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#889063]/20 rounded-full mb-4 group-hover:bg-[#354024] transition-colors">
                  <Icon className="w-8 h-8 text-[#354024] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{service.title}</h3>
                <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}