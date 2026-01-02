export type Announcement = {
  title: string;
  date: string;
  description: string;
};

export const announcements: Announcement[] = [
  {
    title: 'Remplacement de l\'ascenseur',
    date: '2024-11-02',
    description:
      "L'ascenseur du bâtiment B sera hors service du 12 au 14 novembre pour maintenance complète. Merci pour votre compréhension.",
  },
  {
    title: 'Collecte des encombrants',
    date: '2024-10-18',
    description:
      'Une benne sera disponible sur le parking principal samedi 26 octobre de 9h à 16h pour vos encombrants.',
  },
  {
    title: 'Fête des voisins',
    date: '2024-09-05',
    description:
      'Retrouvons-nous autour d\'un buffet partagé le vendredi 20 septembre à partir de 19h au jardin commun.',
  },
];
