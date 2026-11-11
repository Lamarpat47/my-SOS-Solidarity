import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../translations';

export default function Bafoussam() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.en;

  const actions = [
    { 
      id: 1, 
      title: t.bafoussamAction1Title || 'Soutien aux Orphelinats et Écoles', 
      desc: t.bafoussamAction1Desc || 'Distribution de fournitures scolaires, de produits de première nécessité et rénovation des espaces d’apprentissage.',
      image: 'https://sos-solidaritepourtous.org/img/bafoussam-1.jpg'
    },
    { 
      id: 2, 
      title: t.bafoussamAction2Title || 'Campagnes de Santé et Hygiène', 
      desc: t.bafoussamAction2Desc || 'Sensibilisation, dons de matériel médical et accompagnement des familles défavorisées.',
      image: 'https://sos-solidaritepourtous.org/img/bafoussam-2.jpg'
    },
  ];

  return (
    <div className="actions-page">
      <div className="actions-container" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <h1 className="heading-emerald" style={{ fontSize: '36px', color: '#1b5e4b', textAlign: 'center', marginBottom: '10px' }}>
          {t.bafoussamTitle || 'Nos Actions À Bafoussam'}
        </h1>
        <p className="text-subtle" style={{ color: '#666', textAlign: 'center', marginBottom: '40px', fontSize: '16px' }}>
          {t.bafoussamSubtitle || 'Découvrez nos initiatives et projets d’impact au cœur de Bafoussam.'}
        </p>

        <div className="actions-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {actions.map((act) => (
            <div 
              key={act.id} 
              className="action-card"
              style={{ 
                background: '#fff', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                boxShadow: '0 4px 15px rgba(0,0,0,0.08)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <img 
                src={act.image} 
                alt={act.title}
                onError={(e) => {
                  // Fallback if local original asset path is relative inside public/img/
                  (e.target as HTMLImageElement).src = `/img/bafoussam-${act.id}.jpg`;
                }}
                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
              />
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h2 className="action-card-title" style={{ fontSize: '20px', color: '#1b5e4b', marginBottom: '12px' }}>
                  {act.title}
                </h2>
                <p className="action-card-desc" style={{ color: '#555', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1 }}>
                  {act.desc}
                </p>
                <button 
                  className="btn-primary"
                  style={{ 
                    backgroundColor: '#1b5e4b', 
                    color: '#fff', 
                    border: 'none', 
                    padding: '10px 18px', 
                    borderRadius: '4px', 
                    fontWeight: 'bold', 
                    cursor: 'pointer',
                    alignSelf: 'flex-start'
                  }}
                >
                  {t.learnMoreBtn || 'En savoir plus'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}