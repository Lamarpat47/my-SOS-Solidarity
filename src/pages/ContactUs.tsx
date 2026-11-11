import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import './ContactUs.css';

export const ContactUs: React.FC = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page">
      {/* Main Contact Content Area */}
      <div className="contact-container" style={{ padding: '60px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <h1 style={{ fontSize: '36px', color: '#1b5e4b', fontWeight: 'bold', marginBottom: '10px' }}>
            {t('contactUsTitle') || 'Contactez-Nous'}
          </h1>
          <p style={{ color: '#666', fontSize: '16px' }}>
            {t('contactUsSubtitle') || 'Nous sommes à votre écoute pour toute question ou collaboration.'}
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {/* Contact Details Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', background: '#f9f9f9', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #e8982c' }}>
              <div style={{ background: '#e8982c', padding: '12px', borderRadius: '6px', color: '#fff' }}>
                <MapPin size={24} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>{t('ourAddress') || 'Notre Adresse'}</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>Fadac, Tougang Village, Bafoussam, Cm</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', background: '#f9f9f9', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #e8982c' }}>
              <div style={{ background: '#e8982c', padding: '12px', borderRadius: '6px', color: '#fff' }}>
                <Phone size={24} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>{t('phone') || 'Téléphone'}</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>+39 371 442 1945</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', background: '#f9f9f9', padding: '20px', borderRadius: '8px', borderLeft: '4px solid #e8982c' }}>
              <div style={{ background: '#e8982c', padding: '12px', borderRadius: '6px', color: '#fff' }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>{t('email') || 'Email'}</h4>
                <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>oeuvresociale237@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <h3 style={{ color: '#1b5e4b', marginBottom: '10px' }}>{t('messageSentTitle') || 'Message Envoyé !'}</h3>
                <p style={{ color: '#666' }}>{t('messageSentDesc') || 'Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais.'}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#1b5e4b' }}>{t('sendMessageHeading') || 'Envoyez-nous un message'}</h3>
                <div>
                  <input 
                    type="text" 
                    name="name" 
                    placeholder={t('namePlaceholder') || 'Votre Nom'} 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                    style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd' }}
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    name="email" 
                    placeholder={t('emailPlaceholder') || 'Votre Email'} 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                    style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd' }}
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    name="subject" 
                    placeholder={t('subjectPlaceholder') || 'Sujet'} 
                    value={formData.subject} 
                    onChange={handleChange} 
                    required 
                    style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd' }}
                  />
                </div>
                <div>
                  <textarea 
                    name="message" 
                    rows={4} 
                    placeholder={t('messagePlaceholder') || 'Votre Message...'} 
                    value={formData.message} 
                    onChange={handleChange} 
                    required 
                    style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ddd', resize: 'vertical' }}
                  />
                </div>
                <button 
                  type="submit" 
                  style={{ background: '#1b5e4b', color: '#fff', padding: '12px', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  <Send size={16} /> {t('sendButton') || 'Envoyer le message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;