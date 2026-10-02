import React from 'react';
import { 
  Play, 
  Mail, 
  Phone, 
  MapPin, 
  Search, 
  ChevronRight, 
  Facebook, 
  Youtube, 
  Instagram, 
  Star 
} from 'lucide-react';
import './FrenchPage.css';

const FrenchPage: React.FC = () => {
  return (
    <div className="fr-page">
      {/* Top Contact Bar */}
      <div className="fr-top-bar">
        <div className="fr-brand">
          <div className="fr-logo-icon"></div>
          <span className="fr-logo-text">SOS SOLIDARITE POUR TOUS</span>
        </div>
        <div className="fr-top-info">
          <div className="fr-top-item">
            <Phone size={14} className="fr-icon" />
            <div>
              <span className="fr-label">Appelez-nous :</span>
              <span className="fr-val">+237 670 00 00 00</span>
            </div>
          </div>
          <div className="fr-top-item">
            <Mail size={14} className="fr-icon" />
            <div>
              <span className="fr-label">Envoyez un e-mail :</span>
              <span className="fr-val">info@sos-solidaritepourtous.org</span>
            </div>
          </div>
          <div className="fr-top-item">
            <MapPin size={14} className="fr-icon" />
            <div>
              <span className="fr-label">Adresse :</span>
              <span className="fr-val">Cameroun</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="fr-navbar">
        <div className="fr-nav-links">
          <a href="#accueil" className="active">ACCUEIL</a>
          <a href="#a-propos">À PROPOS</a>
          <a href="#NOS-ACTIONS">NOS ACTIONS</a>
          <a href="#CAUSES">CAUSES</a>
          <a href="#CONTACT">CONTACT</a>
        </div>
        <div className="fr-nav-actions">
          <button className="fr-btn-search" aria-label="Search">
            <Search size={14} />
          </button>
          <button className="fr-btn-donate">FAIRE UN DON</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="fr-hero-section">
        <div className="fr-hero-content">
          <div className="fr-accent-bar"></div>
          <h1 className="fr-hero-title">
            UN GESTE,<br />
            UN ESPOIR.
          </h1>
          <p className="fr-hero-desc">
            Ensemble, nous pouvons offrir aux plus vulnérables la possibilité de s'épanouir. Faites un don pour soutenir nos causes.
          </p>
          <div className="fr-hero-btns">
            <button className="fr-btn-yellow">Rejoignez-nous</button>
            <button className="fr-btn-green">Faire un don maintenant</button>
          </div>
        </div>
        <div className="fr-hero-img-box">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800&auto=format&fit=crop" 
            alt="Enfants souriants" 
            className="fr-hero-img"
          />
        </div>
      </section>

      {/* Yellow Video Callout Banner */}
      <section className="fr-banner">
        <div className="fr-banner-play">
          <Play size={18} fill="#ffffff" color="#ffffff" />
        </div>
        <div className="fr-banner-text">
          <span>Ensemble, nous pouvons bâtir un monde où chacun a la possibilité de s'épanouir.</span>
          <span className="fr-banner-right">REJOIGNEZ-NOUS</span>
        </div>
      </section>

      {/* Section: Unissons nos forces */}
      <section className="fr-about-section">
        <div className="fr-about-img-box">
          <img 
            src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop" 
            alt="Groupe de communauté" 
          />
        </div>

        <div className="fr-about-content">
          <span className="fr-subtitle">À PROPOS DE NOUS</span>
          <h2 className="fr-section-title">Unissons nos forces, changeons le monde</h2>
          <p className="fr-text-muted">
            Notre objectif principal est d'apporter un soutien concret aux personnes dans le besoin, de promouvoir l'éducation et d'assurer une meilleure santé pour tous.
          </p>

          <div className="fr-mission-block">
            <h3>Notre Mission</h3>
            <p className="fr-text-muted">
              Nous aidons les populations vulnérables à construire un avenir meilleur grâce à l'accès à l'éducation et aux soins.
            </p>
            <ul className="fr-bullet-list">
              <li>— Nous aidons les enfants pauvres</li>
              <li>— Nous soutenons la formation</li>
              <li>— Nous offrons du soutien aux familles</li>
            </ul>
          </div>

          <div className="fr-yellow-card">
            <p className="fr-yellow-card-text">
              Il n'y a pas de meilleure façon de se tenir debout que de se soutenir les uns les autres dans le besoin.
            </p>
            <button className="fr-btn-green-sm">EN SAVOIR PLUS SUR NOUS</button>
          </div>
        </div>
      </section>

      {/* 4 Stats Grid Section */}
      <section className="fr-stats-section">
        <div className="fr-stats-grid">
          <div className="fr-stat-box fr-yellow-bg">
            <span className="fr-stat-num">50</span>
            <span className="fr-stat-lbl">BÉNÉVOLES</span>
          </div>
          <div className="fr-stat-box fr-teal-bg">
            <span className="fr-stat-num">1000</span>
            <span className="fr-stat-lbl">DONATEURS</span>
          </div>
          <div className="fr-stat-box fr-teal-bg">
            <span className="fr-stat-num">30</span>
            <span className="fr-stat-lbl">PROJETS</span>
          </div>
          <div className="fr-stat-box fr-yellow-bg">
            <span className="fr-stat-num">1000</span>
            <span className="fr-stat-lbl">FAMILLES AIDÉES</span>
          </div>
        </div>

        <div className="fr-stats-text">
          <span className="fr-subtitle">POURQUOI NOUS CHOISIR</span>
          <h3 className="fr-stats-title">
            Quelques raisons pour lesquelles les gens nous choisissent !
          </h3>
          <p className="fr-text-muted">
            Nous garantissons une transparence totale dans la gestion de vos dons et nous intervenons directement sur le terrain.
          </p>
          <ul className="fr-bullet-list">
            <li>— Actions 100% transparentes</li>
            <li>— Intervention directe auprès des familles</li>
            <li>— Soutien durable dans le temps</li>
          </ul>
          <div className="fr-stats-btns">
            <button className="fr-btn-yellow">Soutenir notre action</button>
            <button className="fr-btn-green">Devenir bénévoles</button>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="fr-team-section">
        <div className="fr-section-center-header">
          <span className="fr-subtitle">MEMBRES DE L'ÉQUIPE</span>
          <h2>Faites la connaissance des membres dévoués de notre équipe</h2>
        </div>

        <div className="fr-team-grid">
          <div className="fr-team-card">
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=300" alt="Françoise DIATCHOU K." />
            <h4>Françoise DIATCHOU K.</h4>
            <p>Présidente</p>
          </div>
          <div className="fr-team-card">
            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=300" alt="Willeme A. MONKAM" />
            <h4>Willeme A. MONKAM</h4>
            <p>Secrétaire Générale</p>
          </div>
          <div className="fr-team-card">
            <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300" alt="Boris TCHOU" />
            <h4>Boris TCHOU</h4>
            <p>Trésorier Général</p>
          </div>
          <div className="fr-team-card">
            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=300" alt="Serge PASTORE" />
            <h4>Serge PASTORE</h4>
            <p>Conseiller</p>
          </div>
        </div>
      </section>

      {/* Donation Causes Section */}
      <section className="fr-causes-section">
        <div className="fr-section-center-header">
          <span className="fr-subtitle">NOS CAUSES DE DONS</span>
          <h2>Nos causes de dons à travers le Cameroun</h2>
        </div>

        <div className="fr-causes-grid">
          <div className="fr-cause-card">
            <div className="fr-cause-img-box">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=400" alt="Fournir des besoins de base" />
              <span className="fr-tag">DONS</span>
            </div>
            <div className="fr-cause-content">
              <h3>Fournir des besoins de base</h3>
              <p className="fr-text-muted">
                Collecte et distribution de vêtements, d'aliments et de produits de première nécessité pour les orphelins et familles défavorisées.
              </p>
              <button className="fr-btn-yellow-full">Faire un don maintenant</button>
            </div>
          </div>

          <div className="fr-cause-card">
            <div className="fr-cause-img-box">
              <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=400" alt="Soutenir la santé" />
              <span className="fr-tag">SANTE</span>
            </div>
            <div className="fr-cause-content">
              <h3>Soutenir la santé</h3>
              <p className="fr-text-muted">
                Prise en charge des soins médicaux de base, achat de médicaments et campagnes de sensibilisation à l'hygiène.
              </p>
              <button className="fr-btn-yellow-full">Faire un don maintenant</button>
            </div>
          </div>

          <div className="fr-cause-card">
            <div className="fr-cause-img-box">
              <img src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=400" alt="Offrir un soutien éducatif" />
              <span className="fr-tag">EDUCATION</span>
            </div>
            <div className="fr-cause-content">
              <h3>Offrir un soutien éducatif</h3>
              <p className="fr-text-muted">
                Achat de fournitures scolaires, paiement des frais de scolarité et suivi pédagogique pour les enfants démunis.
              </p>
              <button className="fr-btn-yellow-full">Faire un don maintenant</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="fr-testimonial-section">
        <div className="fr-testimonial-layout">
          <div className="fr-testimonial-left">
            <span className="fr-subtitle">TÉMOIGNAGES</span>
            <h2>Ce que les gens disent de nos activités.</h2>
            <p className="fr-text-muted">
              Découvrez les avis de ceux qui nous accompagnent au quotidien et des familles qui ont bénéficié de notre soutien.
            </p>
          </div>

          <div className="fr-testimonial-card-container">
            <div className="fr-testimonial-img">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300" alt="Bénéficiaire" />
            </div>
            <div className="fr-testimonial-content">
              <div className="fr-stars">
                <Star size={14} fill="#f2a900" color="#f2a900" />
                <Star size={14} fill="#f2a900" color="#f2a900" />
                <Star size={14} fill="#f2a900" color="#f2a900" />
                <Star size={14} fill="#f2a900" color="#f2a900" />
                <Star size={14} fill="#f2a900" color="#f2a900" />
              </div>
              <p className="fr-quote">
                "Grâce à SOS Solidarité Pour Tous, mes enfants ont pu retourner à l'école avec tout le matériel nécessaire. Leur accompagnement sur le terrain est concret et sincère."
              </p>
              <p className="fr-author">Donatrice</p>
              <span className="fr-city">Bafoussam</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Bottom Banner */}
      <section className="fr-cta-banner">
        <div className="fr-cta-box">
          <h2>Let's donate to those in need for a better life.</h2>
          <p>Ensemble, redonnons le sourire et l'espoir à ceux qui en ont le plus besoin.</p>
        </div>
        <div className="fr-cta-info-card">
          <div className="fr-pill">WhatsApp / Telephone</div>
          <div className="fr-pill-white">+237 670 00 00 00</div>
          <div className="fr-pill">SOS SOLIDARITE POUR TOUS</div>
          <div className="fr-pill-white">ORANGE MONEY / MTN MONEY</div>
          <div className="fr-pill">BANQUE: UBA CAMEROUN</div>
          <div className="fr-pill-white">IBAN: CM21 1003 3000...</div>
        </div>
      </section>

      {/* Dark Footer */}
      <footer className="fr-footer">
        <div className="fr-footer-grid">
          <div className="fr-footer-col">
            <h3>Our Office</h3>
            <p><MapPin size={14} color="#f2a900" /> Fadac, Tougang Village, Bafoussam, Cm</p>
            <p><Phone size={14} color="#f2a900" /> +39 371 442 1945</p>
            <p><Mail size={14} color="#f2a900" /> oeuvresociale237@gmail.com</p>
            <div className="fr-socials">
              <a href="#"><Facebook size={14} /></a>
              <a href="#"><Youtube size={14} /></a>
              <a href="#"><Instagram size={14} /></a>
            </div>
          </div>

          <div className="fr-footer-col">
            <h3>Quick Links</h3>
            <ul>
              <li><ChevronRight size={12} /> À propos de nous</li>
              <li><ChevronRight size={12} /> Contactez-nous</li>
              <li><ChevronRight size={12} /> Nos actions à Bafoussam</li>
              <li><ChevronRight size={12} /> Nos actions à Douala</li>
              <li><ChevronRight size={12} /> Faire un don</li>
            </ul>
          </div>

          <div className="fr-footer-col">
            <h3>Opening hours</h3>
            <p>Monday - Friday: 9:00 am - 7:00 pm</p>
            <p>Saturday: 9:00 am - 12:00 pm</p>
            <p>Sunday: Closed</p>
          </div>

          <div className="fr-footer-col">
            <h3>Gallery</h3>
            <div className="fr-gallery">
              <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=150" alt="G1" />
              <img src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=150" alt="G2" />
            </div>
          </div>
        </div>

        <div className="fr-footer-bottom">
          <p>© 2026 SOS Solidarity For All, All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default FrenchPage;