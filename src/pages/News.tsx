import {Card} from 'primereact/card';
import {Tag} from 'primereact/tag';
import SEO from '../components/SEO';
import {announcements} from '../data/announcements';

const NewsPage = () => {
  return (
    <>
      <SEO
        title="Annonces - Résidence Bellôrizon"
        description="Consultez les dernières annonces et actualités de la Résidence Bellôrizon. Restez informé des événements et informations importantes pour les résidents."
        keywords="annonces, actualités, résidence Bellôrizon, informations résidents, nouvelles"
        url="/news"
      />
      <main className="page p-3">
        <header>
          <h1 className="mb-4">Annonces</h1>
        </header>
        <section className="grid">
          {announcements.map((announcement) => (
            <article key={announcement.title} className="col-12 md:col-6">
              <Card title={announcement.title} subTitle={<Tag value={new Date(announcement.date).toLocaleDateString('fr-FR')}/>}>
                <p>{announcement.description}</p>
              </Card>
            </article>
          ))}
        </section>
      </main>
    </>
  );
};

export default NewsPage;
