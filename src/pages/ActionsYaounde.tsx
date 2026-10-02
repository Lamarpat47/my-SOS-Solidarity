
import React, { useState } from 'react';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import './ActionsYaounde.css';

const yaoundeImages = [
  'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800',
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800',
  'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=800'
];

export const ActionsYaounde: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  return (
    <div className="yaounde-page">
      {/* Page Title Header */}
      <header className="page-header">
        <h1>Some images of our actions in Yaoundé</h1>
      </header>

      {/* Interactive Gallery Section */}
      <section className="gallery-section">
        <div className="gallery-container">
          <div className="carousel-controls">
            <button 
              onClick={() => setCurrentIdx(currentIdx === 0 ? yaoundeImages.length - 1 : currentIdx - 1)}
              className="carousel-btn"
              aria-label="Previous image"
            >
              <ChevronLeft size={16} />
            </button>
            <button 
              onClick={() => setCurrentIdx(currentIdx === yaoundeImages.length - 1 ? 0 : currentIdx + 1)}
              className="carousel-btn"
              aria-label="Next image"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="image-frame">
            <img 
              src={yaoundeImages[currentIdx]} 
              alt="Action in Yaoundé" 
              className="gallery-img"
            />
          </div>
        </div>
      </section>

      {/* Video Callout Banner */}
      <section className="banner-callout">
        <div className="banner-content">
          <div className="play-button">
            <Play size={18} fill="#ffffff" />
          </div>
          <p>Together, we can build a world where everyone has the opportunity to thrive.</p>
        </div>
        <div className="scroll-indicator">Scroll Down</div>
      </section>

      {/* Donation Information Section */}
      <div className="donation-navbar-wrapper">
        <section className="donation-section">
          <div className="donation-left">
            <div className="accent-top-left"></div>
            <h2>Let's donate to those in need for a better life.</h2>
            <p>
              Through your donations, we spread kindness and support to children, families, and communities struggling to find stability.
            </p>
            <div className="accent-bottom-right"></div>
          </div>
          <div className="donation-right">
            <div className="card-item header-card">BANK TRANSFER INFORMATION</div>
            <div className="card-item">BANK: ITALIAN BANK</div>
            <div className="card-item">IBAN : IT37W3608105138247885447914</div>
            <div className="card-item">
              ACCOUNT NAME:<br />
              <strong>MONKAM WILLIANE ALVINE</strong>
            </div>
            <div className="card-item reason-card">
              REASON FOR TRANSFER:<br />
              <span>Purchase of land for the construction of a community centre</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ActionsYaounde;
