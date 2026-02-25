import { useParams, Link } from 'react-router';
import { Calendar, MapPin, Users, Clock, ArrowLeft, CheckCircle } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl mb-4">Article non trouvé</h1>
          <Link to="/blog" className="text-[#354024] hover:text-[#4C3D19]">
            Retour au blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-[#354024] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Retour au blog</span>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative h-[400px] sm:h-[500px] overflow-hidden">
        <ImageWithFallback
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 text-white p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl md:text-5xl mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{post.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Quick Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
            <div className="bg-[#889063]/10 rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-[#354024] mx-auto mb-2" />
              <h3 className="text-sm text-gray-600 mb-1">Groupe</h3>
              <p className="text-lg">{post.content.groupSize}</p>
            </div>
            <div className="bg-[#889063]/10 rounded-xl p-6 text-center">
              <Clock className="w-8 h-8 text-[#354024] mx-auto mb-2" />
              <h3 className="text-sm text-gray-600 mb-1">Durée</h3>
              <p className="text-lg">{post.content.duration}</p>
            </div>
            <div className="bg-[#889063]/10 rounded-xl p-6 text-center">
              <MapPin className="w-8 h-8 text-[#354024] mx-auto mb-2" />
              <h3 className="text-sm text-gray-600 mb-1">Client</h3>
              <p className="text-lg">{post.content.clientName}</p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12">
            <h2 className="text-2xl mb-4">Le Séjour</h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              {post.content.description}
            </p>
          </div>

          {/* Highlights */}
          <div className="mb-12">
            <h2 className="text-2xl mb-6">Points Forts</h2>
            <ul className="space-y-3">
              {post.content.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#889063] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Testimonial */}
          {post.content.testimonial && (
            <div className="bg-[#354024] text-white rounded-2xl p-8 relative">
              <div className="text-6xl text-[#889063] absolute top-4 left-8 opacity-50">"</div>
              <blockquote className="relative z-10 pl-8">
                <p className="text-lg italic mb-4">{post.content.testimonial}</p>
              </blockquote>
            </div>
          )}
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl mb-4">Envie de vivre la même expérience ?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Contactez-nous et nous trouverons l'emplacement parfait pour votre aventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+33123456789"
              className="inline-flex items-center justify-center gap-2 bg-[#354024] text-white px-8 py-4 rounded-full hover:bg-[#4C3D19] transition-colors"
            >
              <span>Appelez-nous</span>
            </a>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#354024] px-8 py-4 rounded-full hover:bg-gray-100 transition-colors border-2 border-[#354024]"
            >
              <span>Retour à l'accueil</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
