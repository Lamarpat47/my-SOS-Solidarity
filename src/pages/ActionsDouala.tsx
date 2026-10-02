import React from 'react';
import { 
  Play, 
  ChevronLeft, 
  ChevronRight
} from 'lucide-react';
import './ActionsDouala.css';

export const ActionsDouala: React.FC = () => {
  return (
    <div className="action-douala-wrapper">
      {/* ==========================================
          MAIN HEADING SECTION
      ========================================== */}
      <section className="title-section">
        <h1>Some images of our actions in Douala</h1>
      </section>

      {/* ==========================================
          GALLERY / CAROUSEL DISPLAY
      ========================================== */}
      <section className="gallery-display-section">
        <div className="carousel-nav-btn left-btn">
          <ChevronLeft size={20} />
        </div>

        <div className="image-frame-wrapper">
          <div className="image-frame">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800" 
              alt="Action in Douala" 
            />
          </div>
        </div>

        <div className="carousel-nav-btn right-btn">
          <ChevronRight size={20} />
        </div>
      </section>

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
          BANK TRANSFER / DONATION BANNER
      ========================================== */}
      <section id="donate" className="donation-banner-section">
        <div className="donation-banner-card">
          <div className="donation-text-side">
            <h2>Let's donate to those in need for a better life.</h2>
            <p>
              Thanks to your donations, we spread kindness and support to children, families, and communities struggling to find stability.
            </p>
          </div>

          <div className="bank-info-side">
            <div className="info-header">BANK TRANSFER INFORMATION</div>
            <div className="info-row">
              <strong>BANK:</strong> ITALIAN BANK
            </div>
            <div className="info-row iban-highlight">
              <strong>IBAN :</strong> IT37W3608105138247885447914
            </div>
            <div className="info-row">
              <strong>ACCOUNT NAME:</strong><br />
              MONKAM WILLIANE ALVINE
            </div>
            <div className="info-row">
              <strong>REASON FOR TRANSFER:</strong><br />
              Purchase of land for the construction of a community centre
            </div>
          </div>
        </div>

        {/* BOTTOM NAVIGATION BAR */}
        <nav className="bottom-nav">
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#actions">Our Actions</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#donate" className="btn-donate-link">Make a Donation</a></li>
          </ul>
          <button className="btn-italiano">Italiano</button>
        </nav>
      </section>
    </div>
  );
};

export default ActionsDouala;