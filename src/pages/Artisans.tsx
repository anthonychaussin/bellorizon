import {Button} from 'primereact/button';
import {Card} from 'primereact/card';
import {Divider} from 'primereact/divider';
import {Tag} from 'primereact/tag';
import SEO from '../components/SEO';
import {artisans} from '../data/artisans';

const ArtisansPage = () => {
  return (
    <>
      <SEO
        title="Artisans - Résidence Bellôrizon"
        description="Liste des artisans recommandés pour la Résidence Bellôrizon. Trouvez des professionnels de confiance pour vos travaux et services."
        keywords="artisans, professionnels, travaux, services, résidence Bellôrizon"
        url="/artisans"
      />
      <main className="page p-3" style={{ overflowX: 'hidden', maxWidth: '100%' }}>
        <header>
          <h1 className="mb-4">Artisans</h1>
          <p className="mb-4">
            Liste des artisans recommandés pour la résidence. Contactez-les directement pour vos travaux et services.
          </p>
        </header>
        <section className="grid" style={{ margin: 0, width: '100%' }}>
          {artisans.map((artisan, index) => (
            <div key={`${artisan.name}-${index}`} className="col-12 md:col-6 lg:col-4" style={{ padding: '0.5rem' }}>
              <Card className="artisan-card h-full" style={{ height: '100%' }}>
                <div className="artisan-header mb-3">
                  {artisan.img && (
                    <div className="artisan-image mb-3" style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', backgroundColor: 'var(--surface-ground)' }}>
                      <img
                        src={artisan.img}
                        alt={`Logo ${artisan.name}`}
                        style={{ maxWidth: '100%', maxHeight: '120px', width: 'auto', height: 'auto', objectFit: 'contain', display: 'block' }}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          console.error(`Failed to load image: ${artisan.img}`, target.src);
                          target.style.display = 'none';
                        }}
                        onLoad={() => {
                          console.log(`Successfully loaded image: ${artisan.img}`);
                        }}
                      />
                    </div>
                  )}
                  <Tag value={artisan.type} className="mb-2" />
                  <h3 className="mt-2 mb-2" style={{ wordBreak: 'break-word' }}>{artisan.name}</h3>
                </div>
                <Divider />
                <div className="artisan-contact mt-3">
                  <div className="contact-item mb-2" style={{ display: 'flex', alignItems: 'flex-start', wordBreak: 'break-word' }}>
                    <i className="pi pi-phone mr-2" style={{ flexShrink: 0, marginTop: '0.25rem' }}></i>
                    <a href={`tel:${artisan.tel}`} className="contact-link" style={{ wordBreak: 'break-all' }}>
                      {artisan.tel}
                    </a>
                  </div>
                  <div className="contact-item mb-2" style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <i className="pi pi-envelope mr-2" style={{ flexShrink: 0, marginTop: '0.25rem' }}></i>
                    <div className="contact-emails" style={{ flex: 1, wordBreak: 'break-all' }}>
                      {artisan.mail.map((email, emailIndex) => (
                        <a key={emailIndex} href={`mailto:${email}`} className="contact-link d-block" style={{ wordBreak: 'break-all', marginBottom: emailIndex < artisan.mail.length - 1 ? '0.25rem' : '0' }}>
                          {email}
                        </a>
                      ))}
                    </div>
                  </div>
                  {artisan.url && (
                    <div className="contact-item mt-3">
                      <Button
                        label="Site web"
                        icon="pi pi-external-link"
                        className="p-button-text p-button-sm"
                        onClick={() => window.open(artisan.url!, '_blank')}
                      />
                    </div>
                  )}
                </div>
              </Card>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default ArtisansPage;

