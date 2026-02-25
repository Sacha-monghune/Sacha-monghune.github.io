import { ShieldCheck, Timer, HeartHandshake, Users2, Home, MapPin } from 'lucide-react';

const values = [
  {
    icon: ShieldCheck, // Correspond à l'écusson (Authenticité péi)
    title: 'Authenticité péi',
    description: 'Une expérience vraie, fidèle aux traditions et à l\'âme de notre île.',
  },
  {
    icon: Timer, // Correspond à l'escargot/horloge (Slow tourisme)
    title: 'Slow tourisme',
    description: 'Prendre le temps de découvrir, de ressentir et de vivre chaque instant pleinement.',
  },
  {
    icon: HeartHandshake, // Correspond aux mains et au cœur (Respect du vivant)
    title: 'Respect du vivant',
    description: 'Un engagement sincère envers la biodiversité et la protection de notre environnement.',
  },
  {
    icon: Users2, // Correspond aux deux personnages (Partage & convivialité)
    title: 'Partage & convivialité',
    description: 'Parce que les plus beaux souvenirs se créent dans l\'échange et la simplicité.',
  },
  {
    icon: Home, // Correspond à la main tenant la maison (Esthétique & confort)
    title: 'Esthétique & confort',
    description: 'Un cadre soigné et chaleureux pour un séjour en toute sérénité.',
  },
  {
    icon: MapPin, // Correspond à la ferme/paysage (Local d'abord)
    title: 'Local d’abord',
    description: 'Priorité aux circuits courts et aux acteurs locaux pour soutenir notre économie.',
  },
];

export function Values() {
  return (
    <section id="values" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Nos Valeurs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Ce qui nous guide au quotidien pour vous offrir le meilleur de La Réunion
          </p>
        </div>

        {/* Grille ajustée à 3 colonnes pour les 6 éléments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div key={value.title} className="text-center p-6 rounded-xl hover:bg-[#889063]/10 transition-colors group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#889063]/20 rounded-full mb-6 group-hover:bg-[#354024] transition-colors">
                  <Icon className="w-8 h-8 text-[#354024] group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}