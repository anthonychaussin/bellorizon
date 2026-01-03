import {Helmet} from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  noindex?: boolean;
  includeResidenceSchema?: boolean;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const SEO = ({
               title = 'Résidence Bellôrizon - Résidence à Jonzier-Épagny',
               description = 'Résidence Bellôrizon située à Jonzier-Épagny. Découvrez notre résidence conviviale avec connexion fibre optique, annonces et services pour les résidents.',
               keywords = 'résidence, Bellôrizon, Jonzier-Épagny, logement, fibre optique, résidence immobilière',
               image = '/picture/belhorizon.jpg',
               url = 'https://bellorizon.ovh',
               type = 'website',
               noindex = false,
               includeResidenceSchema = true,
               structuredData
             }: SEOProps) => {
  const fullTitle = title.includes('Résidence Bellôrizon') ? title : `${title} | Résidence Bellôrizon`;
  const fullUrl = url.startsWith('http') ? url : `https://bellorizon.ovh${url}`;
  const fullImage = image.startsWith('http') ? image : `https://bellorizon.ovh${image}`;
  const extraStructuredData = Array.isArray(structuredData)
                              ? structuredData
                              : structuredData
                                ? [structuredData]
                                : [];

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle}/>
      <meta name="description" content={description}/>
      <meta name="keywords" content={keywords}/>
      {noindex && <meta name="robots" content="noindex, nofollow"/>}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type}/>
      <meta property="og:url" content={fullUrl}/>
      <meta property="og:title" content={fullTitle}/>
      <meta property="og:description" content={description}/>
      <meta property="og:image" content={fullImage}/>
      <meta property="og:locale" content="fr_FR"/>
      <meta property="og:site_name" content="Résidence Bellôrizon"/>

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image"/>
      <meta name="twitter:url" content={fullUrl}/>
      <meta name="twitter:title" content={fullTitle}/>
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={fullImage}/>

      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl}/>

      {includeResidenceSchema && (
        <script type="application/ld+json">
          {JSON.stringify({
                            '@context': 'https://schema.org',
                            '@type': 'Residence',
                            name: 'Résidence Bellôrizon',
                            description: description,
                            address: {
                              '@type': 'PostalAddress',
                              addressLocality: 'Jonzier-Épagny',
                              addressCountry: 'FR'
                            },
                            url: fullUrl,
                            image: fullImage,
                            contactPoint: {
                              '@type': 'ContactPoint',
                              email: 'syndic.bellhorizon@gmail.com',
                              contactType: 'Conseil syndical'
                            }
                          })}
        </script>
      )}

      {/* Structured Data - WebSite */}
      <script type="application/ld+json">
        {JSON.stringify({
                          '@context': 'https://schema.org',
                          '@type': 'WebSite',
                          name: 'Résidence Bellôrizon',
                          url: 'https://bellorizon.ovh',
                          potentialAction: {
                            '@type': 'SearchAction',
                            target: {
                              '@type': 'EntryPoint',
                              urlTemplate: 'https://bellorizon.ovh/?q={search_term_string}'
                            },
                            'query-input': 'required name=search_term_string'
                          }
                        })}
      </script>
      {extraStructuredData.map((data, index) => (
        <script key={`ld-${index}`} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
};

export default SEO;

