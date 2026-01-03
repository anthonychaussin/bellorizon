import {Card} from 'primereact/card';
import {Chip} from 'primereact/chip';
import {Divider} from 'primereact/divider';
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

const mainEquipments = [
  'Connexion fibre.',
  'Chauffage collectif au gaz propane.',
  'Eau chaude sanitaire collective.',
  'Réception TV par antenne collective TNT (et antenne satellite pour abonnements).',
  'Ascenseur (8 personnes, 625 kg) desservant tous les étages.',
  'Ventilation mécanique contrôlée simple flux.',
  'Visiophone et contrôle d’accès par badges VIGIK.'
];

const sharedSpaces = [
  'Hall d’entrée et circulations intérieures avec finitions dédiées.',
  'Local vélos / poussettes.',
  'Containers semi-enterrés pour les ordures ménagères.'
];

const parkingAccess = [
  'Parkings couverts et extérieurs.',
  'Barrière d’accès commandée à distance.',
  'Éclairage extérieur par candélabres.'
];

const thermalPerformance = {
  label: 'Niveau RT 2012',
  detail:
    'La notice indique que la performance thermique du bâtiment atteint le niveau RT 2012. La RT 2012 est une réglementation française qui fixe des exigences de consommation d’énergie pour les bâtiments neufs (chauffage, eau chaude, ventilation, éclairage), afin de limiter les dépenses énergétiques et améliorer le confort.'
};

const dpeInfo = {
  date: '18 septembre 2023',
  energyClass: 'C',
  gesClass: 'C',
  epPerSquareMeter: '71 kWhEP/m2/an',
  gesPerSquareMeter: '14,4 kgCO2/m2/an',
  number: ''
};

const managementInfo = {
  text: 'La résidence est gérée par le syndic Foncia, agence Foncia Lémanique (Saint-Julien-en-Genevois).',
  href: 'https://fr.foncia.com/agence-immobiliere/saint-julien-en-genevois-74160/agence-immobiliere/foncia-lemanique-st-julien-en-genevois-7754',
  linkLabel: 'Foncia Lémanique'
};

const ResidencePage = () => {
  return (
    <>
      <SEO
        title="Résidence Bellôrizon - La résidence"
        description="Présentation de la Résidence Bellôrizon à Jonzier-Épagny : équipements, parties communes, stationnement, DPE et fibre optique."
        keywords="Résidence Bellôrizon, Jonzier-Épagny, équipements, parties communes, stationnement, DPE, fibre optique"
        image="/ressources/img/residence.webp"
        url="/residence"
      />
      <main className="page p-3">
        <header>
          <h1 className="mb-4">Résidence Bellôrizon</h1>
        </header>

        <section className="grid">
          <div className="col-12">
            <Card title="Présentation" className="mb-3">
              <p className="mb-0">
                La Résidence Bellôrizon propose des équipements collectifs modernes et des services pensés pour le confort
                des résidents. Elle compte 33 logements et l&apos;année d&apos;achèvement de construction est 2023.
              </p>
            </Card>
          </div>
        </section>

        <section className="grid">
          <div className="col-12">
            <Card title="Équipements principaux" className="mb-3">
              <ul className="list-none p-0 m-0">
                {mainEquipments.map((item) => (
                  <li key={item} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section className="grid">
          <div className="col-12 lg:col-6">
            <Card title="Parties communes" className="mb-3">
              <ul className="list-none p-0 m-0">
                {sharedSpaces.map((item) => (
                  <li key={item} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
          <div className="col-12 lg:col-6">
            <Card title="Stationnement et accès" className="mb-3">
              <ul className="list-none p-0 m-0">
                {parkingAccess.map((item) => (
                  <li key={item} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </section>

        <section className="grid">
          <div className="col-12">
            <Card title="Gestion de la résidence" className="mb-3">
              <p className="mb-0">
                {managementInfo.text} <a href={managementInfo.href}>{managementInfo.linkLabel}</a>
              </p>
            </Card>
          </div>
        </section>

        <section className="grid">
          <div className="col-12">
            <Card title="Performance thermique" className="mb-3">
              <p className="mb-3">
                <strong>{thermalPerformance.label} :</strong> {thermalPerformance.detail}
              </p>
              <Divider className="my-3"/>
              <p className="mb-2">
                <strong>DPE :</strong> le Diagnostic de Performance Énergétique mesure la consommation d’énergie et les
                émissions de gaz à effet de serre d’un bâtiment. La classe énergie renseigne sur la consommation, et la
                classe GES sur l’impact carbone.
              </p>
              <ul className="list-none p-0 m-0">
                <li className="mb-2">
                  <strong>Date du DPE :</strong> {dpeInfo.date}
                </li>
                <li className="mb-2">
                  <strong>Classe énergie :</strong> {dpeInfo.energyClass} ({dpeInfo.epPerSquareMeter})
                </li>
                <li className="mb-2">
                  <strong>Classe GES :</strong> {dpeInfo.gesClass} ({dpeInfo.gesPerSquareMeter})
                </li>
                
              </ul>
            </Card>
          </div>
        </section>

        <section>
          <Card title="État de la connexion Internet" className="mb-4">
            <p className="mb-3">
              Connexion actuelle : <strong>Fibre</strong>
            </p>
            <p>
              La connexion fibre optique est disponible dans l&apos;ensemble de la résidence, offrant des vitesses allant
              jusqu&apos;à 1 Gbps et plus. Dernière mise à jour : <strong>2 novembre 2024</strong>.
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

      </main>
    </>
  );
};

export default ResidencePage;
