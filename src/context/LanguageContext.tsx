import React, { createContext, useContext, useState } from 'react';

type Language = 'fr' | 'en' | 'it';

interface LanguageContextType {
  lang: Language;
  language: Language; // Added to satisfy destructuring in page components
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    home: 'Accueil',
    about: 'A Propos',
    actions: 'Nos Actions',
    actionsBafoussam: 'Nos Actions À Bafoussam',
    actionsDouala: 'Nos Actions À Douala',
    actionsYaounde: 'Nos Actions À Yaoundé',
    contact: 'Contact',
    donate: 'Faire un Don',
    heroTitle: 'ENSEMBLE POUR UN AVENIR MEILLEUR',
    heroDesc: "Nous croyons en la création d'opportunités et en l'autonomisation des communautés par le biais de l'éducation, des soins de santé et du développement durable.",
    donateBtn: 'Faites un don maintenant',
    joinBtn: 'Rejoignez-Nous maintenant',
    quoteText: "Ensemble, nous pouvons bâtir un monde où chacun a la possibilité de s'épanouir.",
    scrollDown: 'Scroll Down',
    ourOffice: 'Notre bureau',
    quickLinks: 'Liens rapides',
    openingHours: 'Heures d’ouverture',
    gallery: 'Galerie',
    rights: 'Tous droits réservés.',
    designedBy: 'Conçu par',
    // Contact Page Keys
    contactUsTitle: 'Contactez-Nous',
    contactUsSubtitle: 'Nous sommes à votre écoute pour toute question ou collaboration.',
    ourAddress: 'Notre Adresse',
    phone: 'Téléphone',
    email: 'Email',
    sendMessageHeading: 'Envoyez-nous un message',
    namePlaceholder: 'Votre Nom',
    emailPlaceholder: 'Votre Email',
    subjectPlaceholder: 'Sujet',
    messagePlaceholder: 'Votre Message...',
    sendButton: 'Envoyer le message',
    messageSentTitle: 'Message Envoyé !',
    messageSentDesc: 'Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.',
  },
  en: {
    home: 'Home',
    about: 'About Us',
    actions: 'Our Actions',
    actionsBafoussam: 'Our Actions In Bafoussam',
    actionsDouala: 'Our Actions In Douala',
    actionsYaounde: 'Our Actions In Yaoundé',
    contact: 'Contact',
    donate: 'Donate',
    heroTitle: 'TOGETHER FOR A BETTER FUTURE',
    heroDesc: 'We believe in creating opportunities and empowering communities through education, healthcare, and sustainable development.',
    donateBtn: 'Make a Donation',
    joinBtn: 'Join Us Now',
    quoteText: 'Together, we can build a world where everyone has the opportunity to thrive.',
    scrollDown: 'Scroll Down',
    ourOffice: 'Our Office',
    quickLinks: 'Quick Links',
    openingHours: 'Opening Hours',
    gallery: 'Gallery',
    rights: 'All rights reserved.',
    designedBy: 'Designed By',
    // Contact Page Keys
    contactUsTitle: 'Contact Us',
    contactUsSubtitle: 'We are here to listen for any questions or collaborations.',
    ourAddress: 'Our Address',
    phone: 'Phone',
    email: 'Email',
    sendMessageHeading: 'Send us a message',
    namePlaceholder: 'Your Name',
    emailPlaceholder: 'Your Email',
    subjectPlaceholder: 'Subject',
    messagePlaceholder: 'Your Message...',
    sendButton: 'Send Message',
    messageSentTitle: 'Message Sent!',
    messageSentDesc: 'Thank you for contacting us. We will get back to you as soon as possible.',
  },
  it: {
    home: 'Home',
    about: 'Chi Siamo',
    actions: 'Le Nostre Azioni',
    actionsBafoussam: 'Le Nostre Azioni A Bafoussam',
    actionsDouala: 'Le Nostre Azioni A Douala',
    actionsYaounde: 'Le Nostre Azioni A Yaoundé',
    contact: 'Contatto',
    donate: 'Fai una Donazione',
    heroTitle: 'INSIEME PER UN FUTURO MIGLIORE',
    heroDesc: 'Crediamo nella creazione di opportunità e nell’empowerment delle comunità attraverso l’istruzione, l’assistenza sanitaria e lo sviluppo sostenibile.',
    donateBtn: 'Fai una Donazione',
    joinBtn: 'Unisciti a Noi',
    quoteText: 'Insieme, possiamo costruire un mondo in cui tutti abbiano l’opportunità di prosperare.',
    scrollDown: 'Scorri in Basso',
    ourOffice: 'Il Nostro Ufficio',
    quickLinks: 'Link Rapidi',
    openingHours: 'Orari di Apertura',
    gallery: 'Galleria',
    rights: 'Tutti i diritti riservati.',
    designedBy: 'Progettato da',
    // Contact Page Keys
    contactUsTitle: 'Contattaci',
    contactUsSubtitle: 'Siamo a vostra disposizione per qualsiasi domanda o collaborazione.',
    ourAddress: 'Il nostro indirizzo',
    phone: 'Telefono',
    email: 'Email',
    sendMessageHeading: 'Inviaci un messaggio',
    namePlaceholder: 'Il tuo nome',
    emailPlaceholder: 'La tua email',
    subjectPlaceholder: 'Oggetto',
    messagePlaceholder: 'Il tuo messaggio...',
    sendButton: 'Invia messaggio',
    messageSentTitle: 'Messaggio Inviato!',
    messageSentDesc: 'Grazie per averci contattato. Ti risponderemo il prima possibile.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>('fr');

  const t = (key: string): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, language: lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};