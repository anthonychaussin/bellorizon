import {Card} from 'primereact/card';
import {Chip} from 'primereact/chip';
import {Divider} from 'primereact/divider';
import {Image} from 'primereact/image';
import SEO from '../components/SEO';

const debits = [
  {fai: 'Bouygues Telecom', up: '1 Gbit/s et plus', down: '100 Mbit/s à 1 Gbit/s'},
  {fai: 'Free', up: '1 Gbit/s et plus', down: '1 Gbit/s et plus'},
  {fai: 'Orange', up: '1 Gbit/s et plus', down: '1 Gbit/s et plus'},
  {fai: 'SFR', up: '1 Gbit/s et plus', down: '100 Mbit/s à 1 Gbit/s'},
  {fai: 'Kiwi', up: '1 Gbit/s et plus', down: '1 Gbit/s et plus'},
  {fai: 'MilkyWan', up: '1 Gbit/s et plus', down: '100 Mbit/s à 1 Gbit/s'},
  {fai: 'Nordnet', up: '1 Gbit/s et plus', down: '1 Gbit/s et plus'},
  {fai: 'Ozone', up: '100 Mbit/s à 1 Gbit/s', down: '100 Mbit/s à 1 Gbit/s'}
];

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
                imageStyle={{width: '100%', objectFit: 'cover'}}
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
            </Card>
          </div>
          <div className="col-12 lg:col-6">
            <Card title="À propos de la commune" className="mb-3">
              <p>
                La résidence est implantée dans la charmante commune de <a href="https://www.jonzier-epagny.fr">Jonzier-Épagny</a>, reconnue pour son <a
                href="https://www.jonzier-epagny.fr/Le-marche-67">marché</a>
                hebdomadaire et ses parcs verdoyants. Profitez des événements culturels et des installations de loisirs
                accessibles à tous.
              </p>
            </Card>
          </div>
        </section>

        <section>
          <Card title="État de la connexion Internet" className="mb-4">
        <p className="mb-3">
          Connexion actuelle : <strong>Fibre</strong>
        </p>
        <p>
          La connexion fibre optique est disponible dans l&apos;ensemble de la résidence, offrant des vitesses allant jusqu&apos;à
          1 Gbps et plus. Dernière mise à jour : <strong>2 novembre 2024</strong>.
        </p>

        <Divider className="my-4"/>

        <div className="grid">
          {debits.map((debit) => (
            <div key={debit.fai} className="col-12 md:col-6 lg:col-4">
              <Card className="debit-card">
                <div className="debit-header">
                  <Chip label={debit.fai} icon="pi pi-wifi" className="mb-2"/>
                </div>
                <div className="debit-row">
                  <span className="label">Réception</span>
                  <span className="value">
                    <i className="pi pi-arrow-up mr-2"></i>
                    {debit.up}
                  </span>
                </div>
                <div className="debit-row">
                  <span className="label">Émission</span>
                  <span className="value">
                    <i className="pi pi-arrow-down mr-2"></i>
                    {debit.down}
                  </span>
                </div>
              </Card>
            </div>
          ))}
        </div>
        </Card>
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
