import { Facebook, Instagram, Twitter, Heart } from 'lucide-react';
import { Link } from 'react-router';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl text-[#889063] mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>NOUT’ FONNKER</h3>
            <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              Votre partenaire pour des expériences de camping inoubliables en pleine nature.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Liens rapides</h4>
            <ul className="space-y-2 text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              <li>
                <a href="/#services" className="hover:text-[#889063] transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="/#locations" className="hover:text-[#889063] transition-colors">
                  Emplacements
                </a>
              </li>
              <li>
                <a href="/#how-it-works" className="hover:text-[#889063] transition-colors">
                  Comment ça marche
                </a>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#889063] transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <a href="/#contact" className="hover:text-[#889063] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
              <li>
                <a href="tel:+33123456789" className="hover:text-[#889063] transition-colors">
                  01 23 45 67 89
                </a>
              </li>
              <li>
                <a href="mailto:contact@campingplus.fr" className="hover:text-[#889063] transition-colors">
                  contact@campingplus.fr
                </a>
              </li>
              <li className="text-gray-400">
                123 Avenue des Campeurs<br />
                75001 Paris, France
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Suivez-nous</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#889063] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#889063] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#889063] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400" style={{ fontFamily: "'Inter', sans-serif" }}>
          <p>© {currentYear} NOUT’ FONNKER. Tous droits réservés.</p>
          <p className="flex items-center gap-1">
            Fait avec <Heart className="w-4 h-4 text-red-500 fill-red-500" /> pour les amoureux de la nature
          </p>
        </div>
      </div>
    </footer>
  );
}