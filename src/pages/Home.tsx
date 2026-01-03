import {Card} from 'primereact/card';
import {Image} from 'primereact/image';
import {Link} from 'react-router-dom';
import SEO from '../components/SEO';

const HomePage = () => {
  return (
    <>
      <SEO
        title="Résidence Bellôrizon - Résidence à Jonzier-Épagny"
        description="Résidence Bellôrizon située à Jonzier-Épagny. Découvrez notre résidence conviviale avec connexion fibre optique jusqu'à 1 Gbps, annonces et services pour les résidents."
        keywords="résidence, Bellôrizon, Jonzier-Épagny, logement, fibre optique, résidence immobilière, connexion internet, fibre"
        url="/"
      />
      <main className="page p-3">
        <header className="grid">
          <div className="col-12">
            <Card className="hero-card">
              <Image
                src="/picture/belhorizon.jpg"
                alt="Vue extérieure de la Résidence Bellôrizon à Jonzier-Épagny"
                imageStyle={{width: '100%', objectFit: 'cover', objectPosition: 'center'}}
                preview
              />
            </Card>
          </div>
        </header>

        <section className="grid">
          <div className="col-12 lg:col-6">
            <Card title="Bienvenue à la résidence Bellôrizon" className="mb-3">
              <p>
                Située dans un cadre paisible, la Résidence Bellôrizon vous offre un espace de vie convivial avec toutes
                les commodités nécessaires pour votre bien-être. Découvrez la communauté dynamique et les services qui
                facilitent votre quotidien.
              </p>
              <p className="mb-0">
                <Link to="/residence">Découvrir la résidence</Link>
              </p>
            </Card>
          </div>
          <div className="col-12 lg:col-6">
            <Card title="À propos de la commune" className="mb-3">
              <p>
                La résidence est implantée dans la charmante commune de <a href="https://www.jonzier-epagny.fr">Jonzier-Épagny</a>, reconnue pour son <a
                href="https://www.jonzier-epagny.fr/Le-marche-67">marché</a> hebdomadaire et ses parcs verdoyants. Profitez des événements culturels et des installations de loisirs
                accessibles à tous.
              </p>
              <p className="mb-0">
                <Link to="/commune">Découvrir la commune en détail</Link>
              </p>
            </Card>
          </div>
        </section>

        <footer className="text-center">
          <p className="muted-text">
            Pour plus d&apos;informations, contactez le <a href="mailto:syndic.bellhorizon@gmail.com">conseil syndical</a>.
          </p>
        </footer>
      </main>
    </>
  );
};

export default HomePage;
