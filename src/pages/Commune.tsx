import {Card} from 'primereact/card';
import SEO from '../components/SEO';

const keyFacts = [
  {label: 'Région', value: 'Auvergne-Rhône-Alpes'},
  {label: 'Département', value: 'Haute-Savoie'},
  {label: 'Arrondissement', value: 'Saint-Julien-en-Genevois'},
  {label: 'Canton', value: 'Saint-Julien-en-Genevois'},
  {label: 'Intercommunalité', value: 'Communauté de communes du Genevois'},
  {label: 'Superficie', value: '7,16 km2'},
  {label: 'Altitude', value: '518 à 733 m'},
  {label: 'Code postal', value: '74520'},
  {label: 'Code INSEE', value: '74144'},
  {label: 'Aire d\'attraction', value: 'Genève - Annemasse (partie française)'}
];

const localHighlights = [
  {
    label: 'Marché hebdomadaire',
    detail: 'Tous les jeudis à partir de 16h00 avec des producteurs locaux.',
    href: 'https://jonzier-epagny.fr/Le-marche-67',
    linkLabel: 'Le marché'
  },
  {
    label: 'Commerces de proximité',
    detail: 'Épicerie Vival, Boulangerie Le Fournil Jonziérois, Auberge de la Goutte d’Or.',
    href: 'https://jonzier-epagny.fr/Commerces',
    linkLabel: 'Commerces'
  },
  {
    label: 'Point d’arrêt Hé! Léman',
    detail: 'Affiche locale disponible en ligne.',
    href: 'https://jonzier-epagny.fr/IMG/pdf/affiche_jonzier_1_.pdf',
    linkLabel: 'Affiche Hé! Léman'
  }
];

const accessHighlights = [
  {
    label: 'Route départementale',
    detail: 'La RD 992 traverse le chef-lieu.',
    href: 'https://fr.wikipedia.org/wiki/Jonzier-%C3%89pagny',
    linkLabel: 'Source'
  },
  {
    label: 'Autoroute',
    detail: 'Accès par l’A40, sortie “Saint-Julien-en-Genevois”.',
    href: 'https://fr.wikipedia.org/wiki/Jonzier-%C3%89pagny',
    linkLabel: 'Source'
  },
  {
    label: 'Gares',
    detail: 'TGV/TER via Genève, Bellegarde-sur-Valserine et Annecy.',
    href: 'https://fr.wikipedia.org/wiki/Jonzier-%C3%89pagny',
    linkLabel: 'Source'
  },
  {
    label: 'Aéroports',
    detail: 'Genève Cointrin, Lyon Saint-Exupéry, Annecy et Chambéry.',
    href: 'https://fr.wikipedia.org/wiki/Jonzier-%C3%89pagny',
    linkLabel: 'Source'
  },
  {
    label: 'Proximité',
    detail: 'Frangy (9 km), Saint-Julien-en-Genevois (13 km), Annecy (31 km).',
    href: 'https://fr.wikipedia.org/wiki/Jonzier-%C3%89pagny',
    linkLabel: 'Source'
  },
  {
    label: 'Lignes de bus',
    detail: 'Lignes 62 et 63.',
    href: 'https://jonzier-epagny.fr/Nouvelles-lignes-62-et-63',
    linkLabel: 'Lignes 62 et 63'
  }
];

const servicesHighlights = [
  {
    label: 'Enfance et jeunesse',
    detail: 'Informations scolaires et périscolaires.',
    href: 'https://jonzier-epagny.fr/Enfance-et-jeunesse',
    linkLabel: 'Enfance et jeunesse'
  },
  {
    label: 'Service périscolaire',
    detail: 'Organisation et inscriptions.',
    href: 'https://jonzier-epagny.fr/Service-periscolaire',
    linkLabel: 'Service périscolaire'
  },
  {
    label: 'École',
    detail: 'Enseignement primaire.',
    href: 'https://www.jonzier-epagny.fr/Enseignement-primaire',
    linkLabel: 'Source'
  },
  {
    label: 'ADMR',
    detail: 'Aide et services à domicile.',
    href: 'https://jonzier-epagny.fr/ADMR-148',
    linkLabel: 'ADMR'
  },
  {
    label: 'Téléalarme',
    detail: 'Service de téléassistance.',
    href: 'https://jonzier-epagny.fr/Telealarme',
    linkLabel: 'Téléalarme'
  },
  {
    label: 'Accorderie',
    detail: 'Échanges de services entre habitants.',
    href: 'https://jonzier-epagny.fr/Accorderie',
    linkLabel: 'Accorderie'
  },
  {
    label: 'Ma commune, ma santé',
    detail: 'Dispositif de santé locale.',
    href: 'https://jonzier-epagny.fr/Ma-commune-ma-sante',
    linkLabel: 'Ma commune, ma santé'
  },
  {
    label: 'Télé-services',
    detail: 'Démarches administratives et formulaires.',
    href: 'https://jonzier-epagny.fr/Tele-services',
    linkLabel: 'Télé-services'
  },
  {
    label: 'Démarches administratives',
    detail: 'Accès aux formalités en ligne.',
    href: 'https://jonzier-epagny.fr/Demarches-administratives',
    linkLabel: 'Démarches administratives'
  },
  {
    label: 'Actes d’état civil',
    detail: 'Demande d’actes en ligne.',
    href: 'https://jonzier-epagny.fr/Demande-d-actes-d-etat-civil',
    linkLabel: 'Actes d’état civil'
  }
];

const equipmentHighlights = [
  {
    label: 'Complexe sportif',
    detail: 'Complexe sportif sur la commune (football et basket).',
    href: 'https://jonzier-epagny.fr/FC-Vuache-65',
    linkLabel: 'FC Vuache'
  }
];

const associationHighlights = [
  {
    label: 'Auto’Mne rétro',
    detail: 'Association de voitures anciennes.',
    href: 'https://jonzier-epagny.fr/Auto-mne-Retro',
    linkLabel: 'Auto’Mne rétro'
  },
  {
    label: 'Association Culturelle',
    detail: 'Organisation de la fête du village.',
    href: 'https://jonzier-epagny.fr/Assciation-Culturelle',
    linkLabel: 'Association Culturelle'
  },
  {
    label: 'Association des Parents d’Élèves',
    detail: 'APE de Jonzier-Épagny.',
    href: 'https://jonzier-epagny.fr/APE-ARTICLE',
    linkLabel: 'APE'
  },
  {
    label: 'Confrérie Les Charrettes',
    detail: 'Repas et actions de solidarité.',
    href: 'https://jonzier-epagny.fr/Confrerie-Les-Charrettes-66',
    linkLabel: 'Confrérie Les Charrettes'
  },
  {
    label: 'FC Vuache',
    detail: 'Club de football local.',
    href: 'https://jonzier-epagny.fr/FC-Vuache-65',
    linkLabel: 'FC Vuache'
  },
  {
    label: 'Paroisse Saint-Jacques Val des Usses',
    detail: 'Vie paroissiale locale.',
    href: 'https://jonzier-epagny.fr/Paroisse-Saint-Jacques-Val-des-63',
    linkLabel: 'Paroisse Saint-Jacques'
  }
];

const CommunePage = () => {
  return (
    <>
      <SEO
        title="Jonzier-Épagny - La commune"
        description="Présentation de la commune de Jonzier-Épagny, située en Haute-Savoie dans la région Auvergne-Rhône-Alpes."
        keywords="Jonzier-Épagny, commune, Haute-Savoie, Genevois, Auvergne-Rhône-Alpes"
        url="/commune"
      />
      <main className="page p-3">
        <header>
          <h1 className="mb-4">Jonzier-Épagny</h1>
        </header>

        <section className="grid">
          <div className="col-12 lg:col-7">
            <Card title="Présentation" className="mb-3">
              <p>
                Jonzier-Épagny est une commune française du département de la Haute-Savoie, en région Auvergne-Rhône-Alpes.
                Elle fait partie de l&apos;arrondissement et du canton de Saint-Julien-en-Genevois, ainsi que de la Communauté
                de communes du Genevois.
              </p>
              <p>
                Le territoire communal s&apos;étend sur 7,16 km2 avec une altitude comprise entre 518 et 733 m. Il rassemble
                le bourg et plusieurs hameaux : les Barraques, Épagny et Vigny, ainsi que le lieu-dit du Mont-Sion.
              </p>
              <p className="mb-0">
                La commune est intégrée à l&apos;aire d&apos;attraction de Genève - Annemasse (partie française), tout en
                conservant un caractère rural à habitat dispersé.
              </p>
            </Card>
          </div>
          <div className="col-12 lg:col-5">
            <Card title="Chiffres clés" className="mb-3">
              <ul className="list-none p-0 m-0">
                {keyFacts.map((fact) => (
                  <li key={fact.label} className="mb-2">
                    <strong>{fact.label} :</strong> {fact.value}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section className="grid">
          <div className="col-12">
            <Card title="Accès" className="mb-3">
              <ul className="list-none p-0 m-0">
                {accessHighlights.map((item) => (
                  <li key={item.label} className="mb-2">
                    <strong>{item.label} :</strong> {item.detail}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section className="grid">
          <div className="col-12">
            <Card title="Vie locale" className="mb-3">
              <ul className="list-none p-0 m-0">
                {localHighlights.map((item) => (
                  <li key={item.label} className="mb-2">
                    <strong>{item.label} :</strong> {item.detail} <a href={item.href}>{item.linkLabel}</a>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section className="grid">
          <div className="col-12">
            <Card title="Services" className="mb-3">
              <ul className="list-none p-0 m-0">
                {servicesHighlights.map((item) => (
                  <li key={item.label} className="mb-2">
                    <strong>{item.label} :</strong> {item.detail} <a href={item.href}>{item.linkLabel}</a>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section className="grid">
          <div className="col-12">
            <Card title="Équipements" className="mb-3">
              <ul className="list-none p-0 m-0">
                {equipmentHighlights.map((item) => (
                  <li key={item.label} className="mb-2">
                    <strong>{item.label} :</strong> {item.detail}{' '}
                    {item.href ? <a href={item.href}>{item.linkLabel}</a> : null}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section className="grid">
          <div className="col-12">
            <Card title="Associations" className="mb-3">
              <ul className="list-none p-0 m-0">
                {associationHighlights.map((item) => (
                  <li key={item.label} className="mb-2">
                    <strong>{item.label} :</strong> {item.detail} <a href={item.href}>{item.linkLabel}</a>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
};

export default CommunePage;
