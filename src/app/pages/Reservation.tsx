import { useState } from 'react';
import { ChevronDown, MapPin, Utensils, Tent, Zap, Check } from 'lucide-react';
import { Link } from 'react-router';
import tentImage from '../components/figma/image.png';
import { Calendar } from '../components/ui/calendar';
import { fr } from 'date-fns/locale';

export default function Reservation() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    prenom: '',
    email: '',
    questions: '',
  });
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', { ...formData, date });
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (showForm) {
    return (
      <div className="min-h-screen pt-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => setShowForm(false)}
            className="text-gray-600 hover:text-[#354024] mb-6 inline-flex items-center gap-2"
          >
            ← Retour à l'offre
          </button>

          {isSubmitted ? (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#889063]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-[#354024]" />
              </div>
              <h2 className="text-3xl mb-4">Merci {formData.prenom} !</h2>
              <p className="text-gray-600 mb-6">
                Votre demande de pré-réservation a bien été enregistrée. Nous vous contacterons très prochainement à l'adresse <strong>{formData.email}</strong> pour vous transmettre les détails du séjour et les prochaines étapes.
              </p>
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-[#354024] text-white px-8 py-3 rounded-full hover:bg-[#4C3D19] transition-colors"
              >
                Retour à l'accueil
              </Link>
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl mb-2">Formulaire de Pré-réservation</h2>
              <p className="text-gray-600 mb-8">
                Remplissez ce formulaire pour manifester votre intérêt. Vous serez contacté(e) ultérieurement pour vous transmettre les détails du séjour et les prochaines étapes. <strong>Aucun paiement n'est demandé à ce stade.</strong>
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="prenom" className="block text-sm mb-2 text-gray-700">
                    Prénom *
                  </label>
                  <input
                    type="text"
                    id="prenom"
                    name="prenom"
                    required
                    value={formData.prenom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354024] focus:border-transparent"
                    placeholder="Votre prénom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354024] focus:border-transparent"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-2 text-gray-700">
                    Date de début du séjour (2 jours) *
                  </label>
                  <p className="text-sm text-gray-600 mb-4">
                    Sélectionnez le premier jour de votre séjour.
                  </p>
                  <div className="bg-white rounded-lg border border-gray-300 inline-block">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < new Date(new Date().setDate(new Date().getDate() - 1))}
                      locale={fr}
                      initialFocus
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="questions" className="block text-sm mb-2 text-gray-700">
                    Avez-vous des questions ou des demandes particulières ?
                  </label>
                  <textarea
                    id="questions"
                    name="questions"
                    rows={4}
                    value={formData.questions}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#354024] focus:border-transparent"
                    placeholder="Ex: allergies alimentaires, heure d'arrivée souhaitée..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#354024] text-white px-8 py-4 rounded-full hover:bg-[#4C3D19] transition-colors text-lg"
                >
                  Je suis intéressé(e)
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Image d'en-tête */}
        <div className="mb-8 rounded-2xl overflow-hidden shadow-xl">
          <img
            src={tentImage}
            alt="Tente safari premium nout’ FonnKer"
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Carte Offre MVP */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Header de la carte */}
          <div className="bg-gradient-to-br from-[#354024] to-[#4C3D19] text-white p-8">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm mb-4">
              OFFRE MVP
            </div>
            <h1 className="text-3xl sm:text-4xl mb-3">Séjour pilote – 2 nuits / 2 personnes</h1>
            <p className="text-xl text-white/90 mb-6">Tout compris</p>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl">600 €</span>
              <span className="text-xl text-white/80">pour 2 personnes</span>
            </div>
          </div>

          {/* Contenu initial */}
          {!isExpanded && (
            <div className="p-8">
              <div className="space-y-4 text-center">
                <p className="text-xl text-gray-700">Dormez en pleine nature</p>
                <p className="text-xl text-gray-700">Mangez autour du feu.</p>
                <p className="text-xl text-gray-700">Vivez La Réunion autrement</p>
              </div>

              <button
                onClick={() => setIsExpanded(true)}
                className="w-full mt-8 bg-[#354024] text-white px-8 py-4 rounded-full hover:bg-[#4C3D19] transition-colors flex items-center justify-center gap-2"
              >
                <span>Voir plus</span>
                <ChevronDown className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* Contenu détaillé */}
          {isExpanded && (
            <div className="p-8">
              <div className="mb-8">
                <p className="text-xl text-gray-700 mb-4 text-center italic">
                  Dormez en pleine nature • Mangez autour du feu • Vivez La Réunion autrement
                </p>
                <p className="text-gray-600 text-lg leading-relaxed">
                  nout’ FonnKer propose 1 séjour immersif de 2 nuits en tente premium au cœur de Salazie, combinant confort, gastronomie créole et temps de partage.
                </p>
              </div>

              {/* L'HÉBERGEMENT */}
              <div className="mb-8 bg-[#889063]/5 rounded-xl p-6">
                <h2 className="text-2xl mb-4 flex items-center gap-2">
                  <Tent className="w-6 h-6 text-[#354024]" />
                  L'HÉBERGEMENT
                </h2>
                
                <div className="mb-6">
                  <h3 className="text-lg mb-3 text-[#354024]">Tente safari premium :</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-[#889063] mt-1">•</span>
                      <span>Lit 152x203cm confortable</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-[#889063] mt-1 flex-shrink-0" />
                      <span>Éclairage</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Zap className="w-4 h-4 text-[#889063] mt-1 flex-shrink-0" />
                      <span>Prises pour charger</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#889063] mt-1">•</span>
                      <span>Espace extérieur avec vue sur les montagnes</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg mb-3 text-[#354024] flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    Localisation :
                  </h3>
                  <p className="text-gray-700">
                    Cœur de Salazie — site calme, exclusif, niché au cœur des montagnes.
                  </p>
                </div>
              </div>

              {/* MENU PÉI */}
              <div className="mb-8 bg-[#889063]/5 rounded-xl p-6">
                <h2 className="text-2xl mb-4 flex items-center gap-2">
                  <Utensils className="w-6 h-6 text-[#354024]" />
                  Notre menu péi :
                </h2>

                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="text-[#354024] mb-2">Boisson de bienvenue</h3>
                    <p className="ml-4">• Smoothie fruits frais péi</p>
                  </div>

                  <div>
                    <h3 className="text-[#354024] mb-2">2 petits-déjeuners</h3>
                    <ul className="ml-4 space-y-1">
                      <li>• Fruits frais</li>
                      <li>• Riz chauffé</li>
                      <li>• Boisson chaude</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[#354024] mb-2">Apéro :</h3>
                    <p className="ml-4">• samoussas, bonbons piments</p>
                  </div>

                  <div>
                    <h3 className="text-[#354024] mb-2">2 dîners</h3>
                    <ul className="ml-4 space-y-1">
                      <li>• Cari (poulet ou poisson selon arrivage)</li>
                      <li>• Rougail</li>
                      <li>• Riz - Grains</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[#354024] mb-2">1 déjeuner</h3>
                    <ul className="ml-4 space-y-1">
                      <li>• Salade cœur de palmiste</li>
                      <li>• Plat chaud créole :</li>
                      <li className="ml-4">sauté de légumes pays et patate douce rôtie</li>
                      <li className="ml-4">(ou poisson grillé selon disponibilité)</li>
                      <li>• dessert créole</li>
                      <li className="ml-4">Gâteau patate douce</li>
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-[#889063]/30">
                    <p className="italic text-[#354024]">
                      Et surtout un moment de partage pour mieux comprendre la culture Réunionaise
                    </p>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setShowForm(true)}
                className="w-full bg-[#354024] text-white px-8 py-4 rounded-full hover:bg-[#4C3D19] transition-colors text-lg"
              >
                Je pré-réserve
              </button>
            </div>
          )}
        </div>

        {/* Retour */}
        <div className="mt-8 text-center">
          <Link to="/" className="text-gray-600 hover:text-[#354024] inline-flex items-center gap-2">
            ← Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
