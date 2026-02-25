export interface BlogPost {
  id: string;
  title: string;
  location: string;
  date: string;
  excerpt: string;
  image: string;
  content: {
    description: string;
    clientName: string;
    duration: string;
    groupSize: string;
    highlights: string[];
    testimonial?: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Camping Familial dans les Alpes',
    location: 'Chamonix-Mont-Blanc',
    date: '15 Janvier 2026',
    excerpt: 'Une expérience inoubliable pour la famille Dupont au cœur des montagnes alpines avec vue sur le Mont-Blanc.',
    image: 'https://images.unsplash.com/photo-1642737399476-fd009385afe4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGNhbXBpbmclMjBsYW5kc2NhcGV8ZW58MXx8fHwxNzcxOTI2NTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: {
      description: 'La famille Dupont souhaitait une première expérience de camping en montagne avec leurs deux enfants. Nous avons sélectionné un emplacement exceptionnel à Chamonix, offrant une vue panoramique sur le Mont-Blanc. Le site était équipé de toutes les commodités nécessaires pour un séjour familial confortable.',
      clientName: 'Famille Dupont',
      duration: '5 jours',
      groupSize: '4 personnes (2 adultes, 2 enfants)',
      highlights: [
        'Vue imprenable sur le Mont-Blanc',
        'Proximité des sentiers de randonnée adaptés aux enfants',
        'Accès à un point d\'eau potable et sanitaires modernes',
        'Zone de jeux naturelle pour les enfants',
        'Observation de la faune locale (marmottes, chamois)',
      ],
      testimonial: '"Une expérience magique ! Les enfants ont adoré et nous avons découvert des paysages à couper le souffle. Merci CampingPlus pour ce choix parfait !" - Marie Dupont',
    },
  },
  {
    id: '2',
    title: 'Aventure au Bord du Lac d\'Annecy',
    location: 'Annecy, Haute-Savoie',
    date: '02 Février 2026',
    excerpt: 'Un couple en quête de tranquillité a profité d\'un emplacement exclusif en bord de lac avec couchers de soleil spectaculaires.',
    image: 'https://images.unsplash.com/photo-1597631002627-a3f7585dbdd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWtlc2lkZSUyMGNhbXBpbmclMjBzdW5zZXR8ZW58MXx8fHwxNzcxOTEyMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: {
      description: 'Sophie et Thomas recherchaient un lieu romantique et paisible pour célébrer leur anniversaire de mariage. Notre équipe a trouvé un emplacement privé au bord du lac d\'Annecy, l\'un des lacs les plus purs d\'Europe. Un véritable havre de paix loin de l\'agitation touristique.',
      clientName: 'Sophie & Thomas Martin',
      duration: '3 jours',
      groupSize: '2 personnes',
      highlights: [
        'Accès direct au lac pour la baignade',
        'Emplacement isolé et privé',
        'Couchers de soleil exceptionnels',
        'Possibilité de kayak et paddle',
        'Proximité du village d\'Annecy',
      ],
      testimonial: '"Un moment hors du temps. L\'emplacement était parfait, exactement ce que nous recherchions pour notre anniversaire. Nous reviendrons !" - Sophie Martin',
    },
  },
  {
    id: '3',
    title: 'Camping Aventure en Forêt de Fontainebleau',
    location: 'Fontainebleau, Seine-et-Marne',
    date: '18 Février 2026',
    excerpt: 'Un groupe d\'amis a vécu une aventure unique au cœur de la forêt historique de Fontainebleau.',
    image: 'https://images.unsplash.com/photo-1631051202319-7710a8735775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwdGVudCUyMGZvcmVzdCUyMG5hdHVyZXxlbnwxfHx8fDE3NzE5MjY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: {
      description: 'Un groupe de cinq amis passionnés d\'escalade souhaitait camper près des célèbres blocs de Fontainebleau. Nous avons déniché un emplacement forestier authentique, proche des sites d\'escalade tout en respectant les zones protégées de cette forêt historique.',
      clientName: 'Groupe Aventure',
      duration: '4 jours',
      groupSize: '5 personnes',
      highlights: [
        'Proximité immédiate des sites d\'escalade',
        'Ambiance forestière authentique',
        'Sentiers de randonnée balisés',
        'Observation de la biodiversité locale',
        'Feux de camp autorisés dans la zone',
      ],
      testimonial: '"CampingPlus a trouvé l\'endroit idéal pour notre weekend escalade. Un emplacement de rêve en pleine nature !" - Lucas, membre du groupe',
    },
  },
  {
    id: '4',
    title: 'Séjour Familial en Bretagne',
    location: 'Presqu\'île de Crozon',
    date: '20 Février 2026',
    excerpt: 'Une grande famille a découvert la beauté sauvage de la côte bretonne lors d\'un camping mémorable.',
    image: 'https://images.unsplash.com/photo-1770808444385-53009f70fa88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjYW1waW5nJTIwb3V0ZG9vcnxlbnwxfHx8fDE3NzE5MjY1NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: {
      description: 'La famille Bernard, avec trois générations réunies, souhaitait un camping convivial près de la mer. Nous avons choisi un emplacement spacieux sur la Presqu\'île de Crozon, offrant un accès facile aux plages et criques bretonnes tout en étant abrité du vent.',
      clientName: 'Famille Bernard',
      duration: '7 jours',
      groupSize: '8 personnes (3 générations)',
      highlights: [
        'Proximité des plages de sable fin',
        'Emplacement spacieux pour plusieurs tentes',
        'Découverte de la gastronomie bretonne',
        'Sentiers côtiers spectaculaires',
        'Observation des marées',
      ],
      testimonial: '"Un séjour qui restera gravé dans nos mémoires. Les petits-enfants ont adoré les plages et nous avons tous profité de ce cadre exceptionnel." - Jacqueline Bernard',
    },
  },
  {
    id: '5',
    title: 'Camping Sauvage dans les Pyrénées',
    location: 'Parc National des Pyrénées',
    date: '22 Février 2026',
    excerpt: 'Des randonneurs expérimentés ont exploré les hauteurs des Pyrénées avec un campement en altitude.',
    image: 'https://images.unsplash.com/photo-1759397496041-63d7889bd305?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwZXF1aXBtZW50JTIwc2V0dXB8ZW58MXx8fHwxNzcxOTI2NTU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: {
      description: 'Deux randonneurs aguerris recherchaient une expérience de bivouac en haute montagne. Notre expertise nous a permis de leur proposer un emplacement légal et sécurisé à 1800m d\'altitude, dans le respect de la réglementation du Parc National des Pyrénées.',
      clientName: 'Emma & Pierre',
      duration: '2 jours',
      groupSize: '2 personnes',
      highlights: [
        'Vue panoramique à 360° sur les sommets',
        'Ciel étoilé exceptionnel',
        'Observation de la faune montagnarde',
        'Lever de soleil sur les crêtes',
        'Expérience de camping en autonomie',
      ],
      testimonial: '"Une expérience extraordinaire ! CampingPlus connaît parfaitement la réglementation et nous a guidés vers un spot absolument magique." - Emma',
    },
  },
  {
    id: '6',
    title: 'Week-end Détente en Provence',
    location: 'Luberon, Vaucluse',
    date: '24 Février 2026',
    excerpt: 'Un couple de retraités a savouré la douceur provençale dans un cadre bucolique au milieu des lavandes.',
    image: 'https://images.unsplash.com/photo-1631051202319-7710a8735775?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW1waW5nJTIwdGVudCUyMGZvcmVzdCUyMG5hdHVyZXxlbnwxfHx8fDE3NzE5MjY1NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    content: {
      description: 'Monsieur et Madame Lefebvre voulaient redécouvrir le camping après des années. Nous leur avons proposé un emplacement paisible dans le Luberon, entouré de champs de lavande et d\'oliviers, avec tout le confort moderne pour un séjour relaxant.',
      clientName: 'M. et Mme Lefebvre',
      duration: '4 jours',
      groupSize: '2 personnes',
      highlights: [
        'Ambiance provençale authentique',
        'Proximité des villages perchés',
        'Champs de lavande à perte de vue',
        'Marchés locaux à proximité',
        'Climat doux et ensoleillé',
      ],
      testimonial: '"Nous avons retrouvé le plaisir du camping dans un cadre idyllique. Le choix de l\'emplacement était parfait pour notre âge et nos attentes." - Robert Lefebvre',
    },
  },
];
