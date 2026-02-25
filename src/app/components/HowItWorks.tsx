import { FileText, Clock, Users, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: FileText,
    title: 'Sélectionnez votre séjour',
    description: 'Dites-nous vos contraintes et vos questions lors de votre pré-réservation.',
    number: '01',
  },
  {
    icon: Clock,
    title: 'On vous recontacte sous 48h',
    description: 'Nous revenons vers vous avec tous les détails pour la suite.',
    number: '02',
  },
  {
    icon: Users,
    title: 'On échange ensemble',
    description: 'Nous validons ensemble que le séjour correspond parfaitement à vos attentes.',
    number: '03',
  },
  {
    icon: Sparkles,
    title: 'Profitez !',
    description: "Il ne vous reste plus qu'à préparer votre sac pour une aventure unique.",
    number: '04',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-[#354024] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Comment ça marche ?
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
            Un processus simple en 4 étapes pour votre séjour parfait
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative text-center">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-[#889063]"></div>
                )}

                <div className="relative z-10 inline-flex items-center justify-center w-24 h-24 bg-white rounded-full mb-6 shadow-lg">
                  <Icon className="w-10 h-10 text-[#354024]" />
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-[#889063] text-white rounded-full flex items-center justify-center text-sm">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-xl mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>{step.title}</h3>
                <p className="text-white/80" style={{ fontFamily: "'Inter', sans-serif" }}>{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}