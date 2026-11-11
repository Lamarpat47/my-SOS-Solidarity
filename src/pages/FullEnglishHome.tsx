import React, { useState } from 'react';
import { 
  Play, 
  Check, 
  Users, 
  Utensils, 
  FolderCheck, 
  HeartHandshake,
  ChevronLeft,
  ChevronRight,
  Quote
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
// @ts-ignore
import './FullEnglishHome.css';

export const FullEnglishHome: React.FC = () => {
  const { t, lang } = useLanguage();
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const teamMembers = [
    {
      name: 'Françoise DJIATCHEU K.',
      role: lang === 'en' ? 'President' : lang === 'it' ? 'Presidente' : 'Présidente',
      image: 'https://sos-solidaritepourtous.org/img/team-1.jpg',
    },
    {
      name: 'Williane A. MONKAM',
      role: lang === 'en' ? 'Project Coordinator' : lang === 'it' ? 'Coordinatore dei progetti' : 'Coordinatrice des projets',
      image: 'https://sos-solidaritepourtous.org/img/team-2.jpg',
    },
    {
      name: 'Boris FOTSO',
      role: lang === 'en' ? 'Littoral Region Delegate' : lang === 'it' ? 'Delegato della regione del Littoral' : 'Délégué de la région du Littoral',
      image: 'https://sos-solidaritepourtous.org/img/team-3.jpg',
    },
    {
      name: 'Ilario PASTORE',
      role: lang === 'en' ? 'Training Manager' : lang === 'it' ? 'Responsabile della formazione' : 'Responsable de la formation',
      image: 'https://sos-solidaritepourtous.org/img/team-4.jpg',
    },
  ];

  const testimonials = [
    {
      quote: lang === 'en' 
        ? "Life was becoming very difficult for me, especially with my health problems. Thanks to SOS SOLIDARITY FOR ALL, I was able to receive regular visits and they also helped me access medical care."
        : lang === 'it'
        ? "La vita stava diventando molto difficile per me, soprattutto con i miei problemi di salute. Grazie a SOS SOLIDARITY FOR ALL, ho potuto ricevere visite regolari e mi hanno anche aiutato ad accedere alle cure mediche."
        : "La vie devenait très difficile pour moi, surtout avec mes problèmes de santé. Grâce à SOS SOLIDARITÉ POUR TOUS, j'ai pu recevoir des visites régulières et ils m'ont aussi aidé à accéder à des soins médicaux.",
      author: "Christoph",
      role: lang === 'en' ? 'Beneficiary' : lang === 'it' ? 'Beneficiario' : 'Bénéficiaire',
      image: "https://sos-solidaritepourtous.org/img/testimonial-1.jpg",
    },
    {
      quote: lang === 'en'
        ? "My life changed thanks to SOS SOLIDARITY FOR ALL. Before, my children and I didn't always have enough to eat, and school seemed a distant dream. We received food, clothing, and my children were able to go to school."
        : lang === 'it'
        ? "La mia vita è cambiata grazie a SOS SOLIDARITY FOR ALL. Prima, io e i miei figli non avevamo sempre abbastanza da mangiare e la scuola sembrava un sogno lontano. Abbiamo ricevuto cibo, vestiti e i miei figli hanno potuto andare a scuola."
        : "Ma vie a changé grâce à SOS SOLIDARITÉ POUR TOUS. Avant, mes enfants et moi n'avions pas toujours de quoi manger, et l'école semblait un rêve lointain. Nous avons reçu de la nourriture, des vêtements, et mes enfants ont pu aller à l'école.",
      author: "Josephine",
      role: lang === 'en' ? 'Beneficiary' : lang === 'it' ? 'Beneficiario' : 'Bénéficiaire',
      image: "https://sos-solidaritepourtous.org/img/testimonial-2.jpg",
    },
    {
      quote: lang === 'en'
        ? "Life was a constant challenge for my children and me after losing everything. SOS SOLIDARITY FOR ALL not only provided us with a safe shelter and food to hold on, but they also helped my children return to school."
        : lang === 'it'
        ? "La vita è stata una sfida costante per me e i miei figli dopo aver perso tutto. SOS SOLIDARITY FOR ALL non solo ci ha fornito un rifugio sicuro e cibo per andare avanti, ma ha anche aiutato i miei figli a tornare a scuola."
        : "La vie était un défi constant pour mes enfants et moi après avoir tout perdu. SOS SOLIDARITÉ POUR TOUS nous a non seulement fourni un abri sûr et de la nourriture pour tenir, mais ils ont aussi aidé mes enfants à retourner à l'école.",
      author: "Elodie",
      role: lang === 'en' ? 'Beneficiary' : lang === 'it' ? 'Beneficiario' : 'Bénéficiaire',
      image: "https://sos-solidaritepourtous.org/img/testimonial-3.jpg",
    },
  ];

  return (
    <div className="home-wrapper page-fade-in">
      
      {/* HERO BANNER */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>{t('heroTitle')}</h1>
          <p>{t('heroDesc')}</p>
          <div className="hero-buttons">
            <a href="#donate" className="btn-primary-amber">{t('donateBtn')}</a>
            <a href="#about" className="btn-secondary-green">{t('joinBtn')}</a>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img
            src="https://sos-solidaritepourtous.org/img/carousel-1.jpg"
            alt="Enfant en classe"
            loading="lazy"
          />
        </div>
      </section>

      {/* AMBER QUOTE STRIP */}
      <div className="quote-strip">
        <div className="play-icon-box">
          <Play size={20} fill="#ffffff" color="#ffffff" />
        </div>
        <p className="quote-strip-text">{t('quoteText')}</p>
        <span className="vertical-tag">{t('scrollDown')}</span>
      </div>

      {/* ABOUT US SECTION */}
      <section id="about" className="about-section">
        <div className="about-grid">
          <div className="about-image">
            <img
              src="https://sos-solidaritepourtous.org/img/about-1.jpg"
              alt="Rassemblé communautaire"
              loading="lazy"
            />
          </div>

          <div className="about-text">
            <span className="section-subtitle">
              {lang === 'en' ? '— ABOUT US —' : lang === 'it' ? '— CHI SIAMO —' : '— A PROPOS DE NOUS —'}
            </span>
            <h2>{lang === 'en' ? 'Join our forces, change the world' : lang === 'it' ? 'Uniamo le nostre forze, cambiamo il mondo' : 'Unissons nos forces, changeons le monde'}</h2>
            <p className="description">
              {lang === 'en'
                ? "Every act of kindness brings us closer to a world without suffering. Join a global movement working for a future where equality and compassion thrive."
                : lang === 'it'
                ? "Ogni atto di gentilezza ci avvicina a un mondo senza sofferenza. Unisciti a un movimento globale che lavora per un futuro in cui uguaglianza e compassione fioriscono."
                : "Chaque geste de bonté nous rapproche d'un monde sans souffrance. Rejoignez un mouvement mondial qui œuvre pour un avenir où l'égalité et la compassion s'épanouissent."}
            </p>

            <div className="mission-content">
              <h3>{lang === 'en' ? 'Our Mission' : lang === 'it' ? 'La Nostra Missione' : 'Notre Mission'}</h3>
              <p>
                {lang === 'en'
                  ? "Our mission is to help underprivileged communities thrive by providing them with resources, education, and tools for their development."
                  : lang === 'it'
                  ? "La nostra missione è aiutare le comunità svantaggiate a prosperare fornendo loro risorse, istruzione e strumenti per il loro sviluppo."
                  : "Notre mission est d'aider les communautés défavorisées à s'épanouir en leur fournissant des ressources, une éducation et des outils pour leur développement."}
              </p>
              <ul className="checklist">
                <li><Check size={16} className="check-icon" /> {lang === 'en' ? 'No one should go to bed hungry.' : lang === 'it' ? 'Nessuno dovrebbe andare a letto a stomaco vuoto.' : 'Personne ne devrait aller se coucher le ventre vide.'}</li>
                <li><Check size={16} className="check-icon" /> {lang === 'en' ? 'We spread kindness and support.' : lang === 'it' ? 'Diffondiamo gentilezza e supporto.' : 'Nous répandons la bienveillance et le soutien.'}</li>
                <li><Check size={16} className="check-icon" /> {lang === 'en' ? "We can change someone's life." : lang === 'it' ? 'Possiamo cambiare la vita di qualcuno.' : "Nous pouvons changer la vie de quelqu'un."}</li>
              </ul>
            </div>
          </div>

          <div className="about-amber-card">
            <p>
              {lang === 'en'
                ? 'Thanks to your donations, we spread kindness and support to children and families.'
                : lang === 'it'
                ? 'Grazie alle vostre donazioni, diffondiamo gentilezza e supporto a bambini e famiglie.'
                : 'Grâce à vos dons, nous répandons la bienveillance et le soutien auprès des enfants et des familles.'}
            </p>
            <a href="#donate" className="btn-dark-green">{t('donateBtn')}</a>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stats-boxes">
            <div className="stat-box box-amber">
              <Users size={28} />
              <span className="stat-number">50</span>
              <span className="stat-label">{lang === 'en' ? 'Active Volunteers' : lang === 'it' ? 'Volontari attivi' : 'Bénévoles actifs'}</span>
            </div>
            <div className="stat-box box-green">
              <Utensils size={28} />
              <span className="stat-number">1000</span>
              <span className="stat-label">{lang === 'en' ? 'Meals Served' : lang === 'it' ? 'Pasti serviti' : 'Repas servis'}</span>
            </div>
            <div className="stat-box box-green">
              <FolderCheck size={28} />
              <span className="stat-number">30</span>
              <span className="stat-label">{lang === 'en' ? 'Projects' : lang === 'it' ? 'Progetti' : 'Projets'}</span>
            </div>
            <div className="stat-box box-amber">
              <HeartHandshake size={28} />
              <span className="stat-number">1000</span>
              <span className="stat-label">{lang === 'en' ? 'People Helped' : lang === 'it' ? 'Persone aiutate' : 'Personnes aidées'}</span>
            </div>
          </div>

          <div className="stats-info">
            <span className="section-subtitle">
              {lang === 'en' ? '— WHY US —' : lang === 'it' ? '— PERCHÉ SCEGLIERCI —' : '— POURQUOI NOUS —'}
            </span>
            <h2>{lang === 'en' ? 'A few reasons why people choose us!' : lang === 'it' ? 'Alcuni motivi per cui le persone ci scelgono!' : 'Quelques raisons pour lesquelles les gens nous choisissent !'}</h2>
            <p>
              {lang === 'en'
                ? 'We believe in creating opportunities and empowering communities through education, healthcare, and sustainable development. Your support helps us bring smiles, hope, and a better future to those in need.'
                : lang === 'it'
                ? 'Crediamo nella creazione di opportunità e nell’empowerment delle comunità attraverso l’istruzione, l’assistenza sanitaria e lo sviluppo sostenibile. Il tuo supporto ci aiuta a portare sorrisi, speranza e un futuro migliore a chi ne ha bisogno.'
                : "Nous croyons en la création d'opportunités et l'autonomisation des communautés par l'éducation, les soins de santé et le développement durable. Votre soutien nous aide à apporter sourires, espoir et un avenir meilleur à ceux qui en ont besoin."}
            </p>
            <ul className="checklist">
              <li><Check size={16} className="check-icon" /> {lang === 'en' ? 'Support for disadvantaged children.' : lang === 'it' ? 'Supporto ai bambini svantaggiati.' : 'Soutien aux enfants défavorisés.'}</li>
              <li><Check size={16} className="check-icon" /> {lang === 'en' ? 'Help for isolated elderly people.' : lang === 'it' ? 'Aiuto agli anziani isolati.' : 'Aide aux personnes âgées isolées.'}</li>
              <li><Check size={16} className="check-icon" /> {lang === 'en' ? 'Defense of fundamental rights.' : lang === 'it' ? 'Difesa dei diritti fondamentali.' : 'Défense des droits fondamentaux.'}</li>
            </ul>

            <div className="stats-buttons">
              <a href="#donate" className="btn-primary-amber">{t('donateBtn')}</a>
              <a href="#about" className="btn-secondary-green">{t('joinBtn')}</a>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section className="team-section">
        <div className="section-header-centered">
          <span className="section-subtitle">
            {lang === 'en' ? '— OUR TEAM —' : lang === 'it' ? '— IL NOSTRO TEAM —' : '— NOTRE EQUIPE —'}
          </span>
          <h2>{lang === 'en' ? 'Meet the dedicated members of our team' : lang === 'it' ? 'Incontra i membri dedicati del nostro team' : 'Faites la connaissance des membres dévoués de notre équipe'}</h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card hover-zoom">
              <div className="team-image">
                <img src={member.image} alt={member.name} loading="lazy" />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CAUSES SECTION */}
      <section className="causes-section section-container">
        <div className="section-header-centered">
          <span className="section-subtitle">
            {lang === 'en' ? '— DONATION —' : lang === 'it' ? '— DONAZIONE —' : '— DONATION —'}
          </span>
          <h2 className="section-title">
            {lang === 'en' ? 'Our donation causes across Cameroon' : lang === 'it' ? 'Le nostre cause di donazione in tutto il Camerun' : 'Nos causes de dons à travers le Cameroun'}
          </h2>
        </div>

        <div className="cards-grid">
          <div className="cause-card hover-lift">
            <div className="card-image-wrap">
              <img
                src="https://sos-solidaritepourtous.org/img/causes-1.jpg"
                alt="Fournir des besoins de base"
                loading="lazy"
              />
              <span className="cause-tag">{lang === 'en' ? 'ESSENTIALS' : lang === 'it' ? 'ESSENZIALI' : 'ESSENTIELS'}</span>
            </div>
            <div className="card-body">
              <h3>{lang === 'en' ? 'Providing basic needs' : lang === 'it' ? 'Fornire bisogni di base' : 'Fournir des besoins de base'}</h3>
              <p>
                {lang === 'en'
                  ? 'Ensuring that the elderly and destitute children have access to essential needs such as food, water, clothing, and shelter.'
                  : lang === 'it'
                  ? 'Garantire che gli anziani e i bambini bisognosi abbiano accesso a beni essenziali come cibo, acqua, vestiti e un alloggio.'
                  : "Assurer que les personnes âgées et les enfants démunis aient accès à des besoins essentiels tels que la nourriture, l'eau, les vêtements et un abri."}
              </p>
            </div>
            <div className="card-footer">
              <a href="#donate" className="btn-amber">{t('donateBtn')}</a>
            </div>
          </div>

          <div className="cause-card hover-lift">
            <div className="card-image-wrap">
              <img
                src="https://sos-solidaritepourtous.org/img/causes-2.jpg"
                alt="Soutenir la santé"
                loading="lazy"
              />
              <span className="cause-tag">{lang === 'en' ? 'HEALTH' : lang === 'it' ? 'SALUTE' : 'SANTE'}</span>
            </div>
            <div className="card-body">
              <h3>{lang === 'en' ? 'Supporting health' : lang === 'it' ? 'Sostenere la salute' : 'Soutenir la santé'}</h3>
              <p>
                {lang === 'en'
                  ? 'Organizing health awareness campaigns, offering basic medical care and mental health services for the elderly and children in need.'
                  : lang === 'it'
                  ? 'Organizzare campagne di sensibilizzazione sulla salute, offrire cure mediche di base e servizi di salute mentale per anziani e bambini bisognosi.'
                  : "Organiser des campagnes de sensibilisation à la santé, offrir des soins médicaux de base et des services de santé mentale pour les personnes âgées et les enfants dans le besoin."}
              </p>
            </div>
            <div className="card-footer">
              <a href="#donate" className="btn-amber">{t('donateBtn')}</a>
            </div>
          </div>

          <div className="cause-card hover-lift">
            <div className="card-image-wrap">
              <img
                src="https://sos-solidaritepourtous.org/img/causes-3.jpg"
                alt="Offrir un soutien éducatif"
                loading="lazy"
              />
              <span className="cause-tag">{lang === 'en' ? 'EDUCATION' : lang === 'it' ? 'EDUCAZIONE' : 'EDUCATION'}</span>
            </div>
            <div className="card-body">
              <h3>{lang === 'en' ? 'Providing educational support' : lang === 'it' ? 'Offrire supporto educativo' : 'Offrir un soutien éducatif'}</h3>
              <p>
                {lang === 'en'
                  ? 'Setting up educational programs for underprivileged children, including access to formal education and vocational training courses.'
                  : lang === 'it'
                  ? 'Creare programmi educativi per bambini svantaggiati, compreso l’accesso all’istruzione formale e corsi di formazione professionale.'
                  : "Mettre en place des programmes éducatifs pour les enfants démunis, y compris l'accès à l'éducation formelle et à des cours de formations professionnelles."}
              </p>
            </div>
            <div className="card-footer">
              <a href="#donate" className="btn-amber">{t('donateBtn')}</a>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="testimonial-section">
        <div className="testimonial-grid">
          <div className="testimonial-left-panel">
            <h2>{lang === 'en' ? 'What people say about our activities.' : lang === 'it' ? 'Cosa dicono le persone delle nostre attività.' : 'Ce que les gens disent de nos activités.'}</h2>
            <p>
              {lang === 'en'
                ? 'We work to bring smiles, hope, and a better future to those in need.'
                : lang === 'it'
                ? 'Lavoriamo per portare sorrisi, speranza e un futuro migliore a chi ne ha bisogno.'
                : "Nous œuvrons pour apporter des sourires, de l'espoir et un avenir meilleur à ceux qui en ont besoin."}
            </p>
          </div>

          <div className="testimonial-image-wrapper">
            <img
              src={testimonials[testimonialIdx].image}
              alt="Bénéficiaire"
              className="fade-transition"
              loading="lazy"
            />
            <div className="testimonial-controls">
              <button
                onClick={() =>
                  setTestimonialIdx(
                    testimonialIdx === 0
                      ? testimonials.length - 1
                      : testimonialIdx - 1
                  )
                }
                aria-label="Previous"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={() =>
                  setTestimonialIdx(
                    testimonialIdx === testimonials.length - 1
                      ? 0
                      : testimonialIdx + 1
                  )
                }
                aria-label="Next"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="testimonial-right-panel">
            <div className="star-rating">★★★★★</div>
            <p className="quote-text">
              {`"${testimonials[testimonialIdx].quote}"`}
            </p>
            <div className="author-box">
              <Quote size={20} className="quote-icon" />
              <div>
                <span className="author-name">
                  {testimonials[testimonialIdx].author}
                </span>
                <span className="author-role">
                  {testimonials[testimonialIdx].role}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="section-container">
        <div className="section-header-centered">
          <span className="section-subtitle">
            {lang === 'en' ? '— OUR PROJECTS —' : lang === 'it' ? '— I NOSTRI PROGETTI —' : '— NOS PROJETS —'}
          </span>
          <h2 className="section-title">
            {lang === 'en' ? 'Our various projects across Cameroon' : lang === 'it' ? 'I nostri vari progetti in tutto il Camerun' : 'Nos différents Projets à travers le Cameroun'}
          </h2>
        </div>

        <div className="cards-grid">
          <div className="project-card hover-lift">
            <div className="project-sidebar">
              <div className="raised-tag">{lang === 'en' ? 'Raised £2000' : lang === 'it' ? 'Raccolti £2000' : 'Levé £2000'}</div>
              <div className="percent-box">20%</div>
              <div className="goal-tag">{lang === 'en' ? 'Goal £10000' : lang === 'it' ? 'Obiettivo £10000' : 'Objectif £10000'}</div>
            </div>

            <div className="project-content">
              <div className="card-image-wrap">
                <img
                  src="https://sos-solidaritepourtous.org/img/causes-1.jpg"
                  alt="Achat d'un terrain"
                  loading="lazy"
                />
                <span className="cause-tag">{lang === 'en' ? 'HEADQUARTERS' : lang === 'it' ? 'SEDE' : 'SIEGE'}</span>
              </div>
              <div className="card-body">
                <h3>{lang === 'en' ? 'Purchase of land' : lang === 'it' ? 'Acquisto di un terreno' : "Achat d'un terrain"}</h3>
                <p>
                  {lang === 'en'
                    ? 'Purchase of a site for the construction of the association headquarters.'
                    : lang === 'it'
                    ? 'Acquisto di un’area per la costruzione della sede dell’associazione.'
                    : "Achat d'un site pour la construction du siège de l'association."}
                </p>
              </div>
              <div className="card-footer">
                <a href="#donate" className="btn-amber">{t('donateBtn')}</a>
              </div>
            </div>
          </div>

          <div className="project-card hover-lift">
            <div className="project-sidebar">
              <div className="raised-tag">{lang === 'en' ? 'Raised £2500' : lang === 'it' ? 'Raccolti £2500' : 'Levé £2500'}</div>
              <div className="percent-box">25%</div>
              <div className="goal-tag">{lang === 'en' ? 'Goal £10000' : lang === 'it' ? 'Obiettivo £10000' : 'Objectif £10000'}</div>
            </div>

            <div className="project-content">
              <div className="card-image-wrap">
                <img
                  src="https://sos-solidaritepourtous.org/img/causes-2.jpg"
                  alt="Plusieurs centres de formation"
                  loading="lazy"
                />
                <span className="cause-tag">{lang === 'en' ? 'TRAINING' : lang === 'it' ? 'FORMAZIONE' : 'FORMATION'}</span>
              </div>
              <div className="card-body">
                <h3>{lang === 'en' ? 'Multiple training centers' : lang === 'it' ? 'Centri di formazione multipli' : 'Plusieurs centres de formation'}</h3>
                <p>
                  {lang === 'en'
                    ? 'An ambulance driver training center, and a training center for the integration of youth and adults into new technology professions.'
                    : lang === 'it'
                    ? 'Un centro di formazione per autisti di ambulanza e un centro di formazione per l’inserimento di giovani e adulti nelle professioni delle nuove tecnologie.'
                    : "Un centre de formation d'ambulanciers, un centre de formation pour l'insertion des jeunes et adultes aux métiers aux nouvelles technologies."}
                </p>
              </div>
              <div className="card-footer">
                <a href="#donate" className="btn-amber">{t('donateBtn')}</a>
              </div>
            </div>
          </div>

          <div className="project-card hover-lift">
            <div className="project-sidebar">
              <div className="raised-tag">{lang === 'en' ? 'Raised £2000' : lang === 'it' ? 'Raccolti £2000' : 'Levé £2000'}</div>
              <div className="percent-box">20%</div>
              <div className="goal-tag">{lang === 'en' ? 'Goal £10000' : lang === 'it' ? 'Obiettivo £10000' : 'Objectif £10000'}</div>
            </div>

            <div className="project-content">
              <div className="card-image-wrap">
                <img
                  src="https://sos-solidaritepourtous.org/img/causes-3.jpg"
                  alt="Un centre culturel"
                  loading="lazy"
                />
                <span className="cause-tag">{lang === 'en' ? 'CULTURE' : lang === 'it' ? 'CULTURA' : 'CULTURE'}</span>
              </div>
              <div className="card-body">
                <h3>{lang === 'en' ? 'A cultural center' : lang === 'it' ? 'Un centro culturale' : 'Un centre culturel'}</h3>
                <p>
                  {lang === 'en'
                    ? 'A cultural center for the exchange of culture and traditions between the elderly and youth.'
                    : lang === 'it'
                    ? 'Un centro culturale per lo scambio di cultura e tradizioni tra anziani e giovani.'
                    : "Un centre culturel pour un échange de culture et traditions entre personnes âgées et jeunes."}
                </p>
              </div>
              <div className="card-footer">
                <a href="#donate" className="btn-amber">{t('donateBtn')}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANK DONATION SECTION */}
      <section id="donate" className="bank-section-container">
        <div className="bank-banner">
          <div className="bank-left-panel">
            <div className="top-corner-accent"></div>
            <h2>
              {lang === 'en' 
                ? 'Let us donate to people in need for a better life.' 
                : lang === 'it' 
                ? 'Facciamo una donazione alle persone bisognose per una vita migliore.' 
                : 'Faisons un don aux personnes dans le besoin pour une vie meilleure.'}
            </h2>
            <p>
              {lang === 'en'
                ? 'Thanks to your donations, we spread kindness and support to children, families, and communities struggling to find stability.'
                : lang === 'it'
                ? 'Grazie alle vostre donazioni, diffondiamo gentilezza e supporto a bambini, famiglie e comunità che lottano per trovare stabilità.'
                : "Grâce à vos dons, nous répandons la bienveillance et le soutien aux enfants, aux familles et aux communautés qui luttent pour trouver la stabilité."}
            </p>
            <div className="bottom-corner-accent"></div>
          </div>

          <div className="bank-right-panel">
            <div className="info-row header-row">
              {lang === 'en' ? 'BANK TRANSFER INFORMATION' : lang === 'it' ? 'INFORMAZIONI PER IL BONIFICO BANCARIO' : 'INFORMATIONS POUR LE TRANSFERT BANCAIRE'}
            </div>
            <div className="info-row">
              {lang === 'en' ? 'BANK: ITALIAN BANK' : lang === 'it' ? 'BANCA: BANCA ITALIANA' : 'BANQUE : BANQUE ITALIENNE'}
            </div>
            <div className="info-row code-text">IBAN : IT37W3608105138247885447914</div>
            <div className="info-row">
              {lang === 'en' ? 'ACCOUNT NAME:' : lang === 'it' ? 'NOME CONTO:' : 'NOM DU COMPTE :'}
              <br />
              <strong>MONKAM WILLIANE ALVINE</strong>
            </div>
            <div className="info-row">
              {lang === 'en' ? 'TRANSFER REASON:' : lang === 'it' ? 'CAUSALE DEL TRASFERIMENTO:' : 'MOTIF DU TRANSFERT :'}
              <br />
              <span>
                {lang === 'en'
                  ? 'Purchase of land for the construction of a community center'
                  : lang === 'it'
                  ? 'Acquisto di un terreno per la costruzione di un centro comunitario'
                  : "Achat d'un terrain pour la construction d'un centre communautaire"}
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullEnglishHome;