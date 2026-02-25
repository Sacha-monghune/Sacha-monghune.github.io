import { Link, useLocation } from 'react-router';

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  const scrollToSection = (id: string) => {
    if (!isHome) {
      window.location.href = `/#${id}`;
      return;
    }
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#EAE5DC]/95 backdrop-blur-sm z-50 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Left - Mon compte */}
          <div className="flex-1">
            <Link to="/" className="text-sm text-gray-700 hover:text-[#354024] transition-colors">
              Mon compte
            </Link>
          </div>

          {/* Center - Logo */}
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-3xl tracking-wider" style={{ fontFamily: "'Playfair Display', serif" }}>
              NOUT’ FONNKER
            </h1>
          </Link>

          {/* Right - Navigation */}
          <nav className="flex-1 flex items-center justify-end gap-8">
            {isHome ? (
              <>
                <button onClick={() => scrollToSection('services')} className="text-sm text-gray-700 hover:text-[#354024] transition-colors hidden md:block">
                  Les services
                </button>
                <button onClick={() => scrollToSection('about')} className="text-sm text-gray-700 hover:text-[#354024] transition-colors hidden md:block">
                  À propos
                </button>
              </>
            ) : (
              <Link to="/" className="text-sm text-gray-700 hover:text-[#354024] transition-colors hidden md:block">
                Accueil
              </Link>
            )}
            <Link to="/blog" className="text-sm text-gray-700 hover:text-[#354024] transition-colors hidden md:block">
              Blog
            </Link>
            <Link
              to="/reservation"
              className="text-sm text-gray-700 hover:text-[#354024] transition-colors"
            >
              Réservation
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
