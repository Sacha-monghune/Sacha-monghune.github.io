import { Link } from 'react-router';
import { Calendar, MapPin, Users } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Blog() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-[#354024] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl mb-4">Nos Campings Réalisés</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Découvrez les aventures de nos clients et laissez-vous inspirer pour votre prochain séjour camping
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                to={`/blog/${post.id}`}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <ImageWithFallback
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{post.location}</span>
                    </div>
                  </div>
                  <h2 className="text-xl mb-3 group-hover:text-[#354024] transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 text-[#354024] group-hover:text-[#4C3D19] transition-colors inline-flex items-center gap-2">
                    <span>Lire la suite</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Prêt pour votre aventure ?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactez-nous dès maintenant et nous trouverons l'emplacement parfait pour votre prochain camping
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-[#354024] text-white px-8 py-4 rounded-full hover:bg-[#4C3D19] transition-colors"
          >
            <span>Retour à l'accueil</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
