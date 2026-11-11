import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Phone, Mail, MapPin, ChevronDown, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

export const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  // Use global language context
  const { lang, setLang, t } = useLanguage();

  const navigate = useNavigate();
  const location = useLocation();

  // Map context language ('en' | 'fr' | 'it') to display labels ('EN' | 'FR' | 'IT')
  const currentLangDisplay = lang === 'en' ? 'EN' : lang === 'fr' ? 'FR' : 'IT';

  // Scroll or Navigate to section on Home page
  const handleSectionClick = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);

    if (location.pathname === '/') {
      const elementId = targetId.replace('#', '');
      const element = document.getElementById(elementId);

      if (element) {
        const navbar = document.querySelector('.navbar-container');
        const navbarHeight = navbar ? navbar.clientHeight : 0;
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    } else {
      navigate(`/${targetId}`);
    }
  };

  const handleLangSelect = (selectedLang: 'EN' | 'FR' | 'IT') => {
    if (selectedLang === 'EN') setLang('en');
    else if (selectedLang === 'FR') setLang('fr');
    else if (selectedLang === 'IT') setLang('it');
    
    setIsLangMenuOpen(false);
  };

  return (
    <header className="navbar-container">
      {/* Top Bar with Logo and Contact Info */}
      <div className="top-bar">
        <div className="brand-section">
          <Link to="/" className="logo-placeholder" style={{ display: 'inline-block', lineHeight: 0 }}>
            <svg 
              width="50" 
              height="50" 
              viewBox="0 0 200 200" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              aria-label="SOS SOLIDARITE POUR TOUS Logo"
            >
              <text x="100" y="32" fill="#ffffff" fontSize="26" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                SOS
              </text>
              <circle cx="100" cy="100" r="52" fill="#e8982c" />
              <circle cx="100" cy="70" r="8" fill="#1b5e4b" />
              <path d="M100 82 C90 68 72 82 100 108 C128 82 110 68 100 82 Z" fill="#1b5e4b" />
              <path d="M68 102 C64 116 78 130 100 136 C122 130 136 116 132 102 C124 118 112 124 100 124 C88 124 76 118 68 102 Z" fill="#1b5e4b" />
              <text x="100" y="176" fill="#ffffff" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="sans-serif" letterSpacing="0.5">
                SOLIDARITE POUR TOUS
              </text>
            </svg>
          </Link>

          <Link to="/" className="brand-title" style={{ textDecoration: 'none', color: 'inherit' }}>
            SOS SOLIDARITY FOR ALL
          </Link>
        </div>

        <div className="contact-info-group">
          {/* Phone */}
          <a href="tel:+393714421945" className="contact-item">
            <div className="icon-square">
              <Phone size={18} />
            </div>
            <div className="contact-text">
              <span className="contact-label">Call Us</span>
              <span className="contact-value">+39 371 442 1945</span>
            </div>
          </a>

          {/* Email */}
          <a href="mailto:oeuvresociale237@gmail.com" className="contact-item">
            <div className="icon-square">
              <Mail size={18} />
            </div>
            <div className="contact-text">
              <span className="contact-label">Email Us</span>
              <span className="contact-value">oeuvresociale237@gmail.com</span>
            </div>
          </a>

          {/* Address */}
          <div className="contact-item">
            <div className="icon-square">
              <MapPin size={18} />
            </div>
            <div className="contact-text">
              <span className="contact-label">Address</span>
              <span className="contact-value">Bafoussam, Cameroon</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="main-nav">
        <button 
          className="hamburger-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-visible' : ''}`}>
          <li>
            <Link 
              to="/" 
              className={location.pathname === '/' ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('home')}
            </Link>
          </li>

          <li>
            <a href="#about" onClick={(e) => handleSectionClick(e, '#about')}>
              {t('about')}
            </a>
          </li>

          <li 
            className="dropdown-item"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button 
              type="button"
              className="dropdown-toggle"
              onClick={(e) => {
                e.stopPropagation();
                setIsDropdownOpen(!isDropdownOpen);
              }}
            >
              {t('actions')} <ChevronDown size={16} className={`chevron-icon ${isDropdownOpen ? 'open' : ''}`} />
            </button>
            
            <ul 
              className="dropdown-menu" 
              style={{ display: isDropdownOpen ? 'block' : 'none' }}
            >
              <li>
                <Link to="/ActionsBafoussam" onClick={() => setIsDropdownOpen(false)}>
                  {t('actionsBafoussam')}
                </Link>
              </li>
              <li>
                <Link to="/ActionsYaounde" onClick={() => setIsDropdownOpen(false)}>
                  {t('actionsYaounde')}
                </Link>
              </li>
              <li>
                <Link to="/ActionsDouala" onClick={() => setIsDropdownOpen(false)}>
                  {t('actionsDouala')}
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link 
              to="/contact" 
              className={location.pathname === '/contact' ? 'active' : ''}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t('contact')}
            </Link>
          </li>

          <li>
            <a 
              href="#donate" 
              className="nav-btn-donate" 
              onClick={(e) => handleSectionClick(e, '#donate')}
            >
              {t('donate')}
            </a>
          </li>
        </ul>

        {/* Language Selector */}
        <div className="lang-container">
          <button 
            type="button"
            className="lang-btn" 
            onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
          >
            <Globe size={16} />
            <span>{currentLangDisplay === 'EN' ? 'English' : currentLangDisplay === 'FR' ? 'Français' : 'Italiano'}</span>
            <ChevronDown size={14} />
          </button>

          {isLangMenuOpen && (
            <div className="lang-dropdown">
              <button type="button" onClick={() => handleLangSelect('EN')}>English</button>
              <button type="button" onClick={() => handleLangSelect('FR')}>Français</button>
              <button type="button" onClick={() => handleLangSelect('IT')}>Italiano</button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;