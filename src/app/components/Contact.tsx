import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Info */}
          <div>
            <h2 className="text-4xl sm:text-5xl mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contactez-nous
            </h2>
            <p className="text-lg text-gray-600 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
              Notre équipe est à votre écoute pour organiser votre prochain séjour camping. Appelez-nous dès maintenant !
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#889063]/20 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[#354024]" />
                </div>
                <div>
                  <h3 className="text-lg mb-1">Téléphone</h3>
                  <a href="tel:+33123456789" className="text-[#354024] hover:text-[#4C3D19]">
                    01 23 45 67 89
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#889063]/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#354024]" />
                </div>
                <div>
                  <h3 className="text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Email</h3>
                  <a href="mailto:contact@campingplus.fr" className="text-[#354024] hover:text-[#4C3D19]" style={{ fontFamily: "'Inter', sans-serif" }}>
                    contact@campingplus.fr
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#889063]/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[#354024]" />
                </div>
                <div>
                  <h3 className="text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Adresse</h3>
                  <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                    123 Avenue des Campeurs<br />
                    75001 Paris, France
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#889063]/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-[#354024]" />
                </div>
                <div>
                  <h3 className="text-lg mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Horaires</h3>
                  <p className="text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                    Lundi - Vendredi : 9h - 19h<br />
                    Samedi - Dimanche : 10h - 18h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - CTA */}
          <div className="bg-[#889063]/10 rounded-2xl p-8 lg:p-12">
            <h3 className="text-2xl mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Prêt à partir à l'aventure ?
            </h3>
            <p className="text-gray-600 mb-8" style={{ fontFamily: "'Inter', sans-serif" }}>
              Laissez-nous vous guider vers l'emplacement de camping parfait. Un simple appel suffit pour commencer votre expérience unique.
            </p>
            <a
              href="tel:+33123456789"
              className="inline-flex items-center justify-center gap-2 bg-[#354024] text-white px-8 py-4 rounded-full hover:bg-[#4C3D19] transition-colors text-lg w-full sm:w-auto"
            >
              <Phone className="w-5 h-5" />
              <span>Appelez maintenant</span>
            </a>

            <div className="mt-8 pt-8 border-t border-[#889063]/30">
              <p className="text-sm text-gray-600" style={{ fontFamily: "'Inter', sans-serif" }}>
                <strong className="text-gray-800">Notre promesse :</strong> Un service personnalisé, des emplacements exceptionnels et une expérience inoubliable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}