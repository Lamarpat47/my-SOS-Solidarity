import React from 'react';
import { Play, ChevronDown } from 'lucide-react';
import './ContactUs.css';

export const ContactUs: React.FC = () => {
  return (
    <div className="contact-page-wrapper">
      {/* ==========================================
          HEADER TITLE
      ========================================== */}
      <h1 className="main-title">Contact Us</h1>

      {/* ==========================================
          AMBER BANNER STRIP
      ========================================== */}
      <section className="amber-banner-strip">
        <div className="play-icon-box">
          <Play size={18} fill="#ffffff" color="#ffffff" />
        </div>
        <p>
          Together, we can build a world where everyone has the opportunity to thrive.
        </p>
        <span className="side-label">Scroll Down</span>
      </section>

      {/* ==========================================
          MAP & CONTACTS SECTION
      ========================================== */}
      <section className="map-contact-container">
        {/* Left Side: Map Info */}
        <div className="map-card-side">
          <h2>Find our headquarters easily</h2>
          <div className="map-frame">
            <iframe
              title="Headquarters Location"
              src="https://maps.google.com/maps?q=Carrefour%202bar%20Tchitchap,%20Bafoussam&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
        </div>

        {/* Right Side: WhatsApp Contacts */}
        <div className="contacts-card-side">
          <h3>Our different contacts (WhatsApp)</h3>

          <div className="contact-pill">
            <span>Italy:</span> <strong>+39 371 442 1945</strong>
          </div>

          <div className="contact-pill">
            <span>Bafoussam, Cameroon:</span> <strong>+237 673 67 63 42</strong>
          </div>

          <div className="contact-pill">
            <span>Douala, Cameroon:</span> <strong>+237 679 69 64 39</strong>
          </div>

          <div className="contact-pill email-pill">
            <span>Email:</span> <strong>oeuvresociale237@gmail.com</strong>
          </div>
        </div>
      </section>

      {/* ==========================================
          NAVIGATION BAR
      ========================================== */}
      <nav className="contact-nav-bar">
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li className="dropdown">
            <a href="#actions">Our Actions <ChevronDown size={14} /></a>
          </li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#donate" className="btn-donate-link">Make a Donation</a></li>
        </ul>
        <button className="btn-italiano">Italiano</button>
      </nav>
    </div>
  );
};

export default ContactUs;