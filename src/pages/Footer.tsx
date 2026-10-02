import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Custom Facebook Icon
const FacebookIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

// Custom YouTube Icon
const YoutubeIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

// Custom Instagram Icon
const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// Custom X (formerly Twitter) Icon
const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="footer-columns">
        {/* Our Office Column */}
        <div className="footer-col">
          <h3>Our Office</h3>
          <p className="flex items-center gap-2">
            <MapPin size={16} /> Fadac, Tougang Village, Bafoussam, Cm
          </p>
          <p className="flex items-center gap-2">
            <Phone size={16} /> 
            <a href="tel:+393714421945">+39 371 442 1945</a>
          </p>
          <p className="flex items-center gap-2">
            <Mail size={16} /> 
            <a href="mailto:oeuvresociale237@gmail.com">oeuvresociale237@gmail.com</a>
          </p>

          {/* Social Media Links */}
          <div className="social-links flex gap-3 mt-4">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Facebook"
              className="social-icon-btn"
            >
              <FacebookIcon size={20} />
            </a>
            <a 
              href="https://x.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="X (Twitter)"
              className="social-icon-btn"
            >
              <XIcon size={20} />
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="YouTube"
              className="social-icon-btn"
            >
              <YoutubeIcon size={20} />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Instagram"
              className="social-icon-btn"
            >
              <InstagramIcon size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/ActionsBafoussam">Our Actions In Bafoussam</Link></li>
            <li><Link to="/ActionsDouala">Our Actions In Douala</Link></li>
            <li><Link to="/ActionsYaounde">Our Actions In Yaoundé</Link></li>
            <li><Link to="/donate">Donate</Link></li>
          </ul>
        </div>

        {/* Opening Hours Column */}
        <div className="footer-col">
          <h3>Opening hours</h3>
          <p><strong>Monday - Friday</strong><br />9:00 am - 7:00 pm</p>
          <p><strong>Saturday</strong><br />9:00 am - 12:00 pm</p>
          <p><strong>Sunday</strong><br />Closed</p>
        </div>

        {/* Gallery Column */}
        <div className="footer-col">
          <h3>Gallery</h3>
          <div className="footer-thumbs">
            <img src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=150" alt="Thumb 1" />
            <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150" alt="Thumb 2" />
            <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=150" alt="Thumb 3" />
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 SOS Solidarity For All. All rights reserved. By <a href="#">Kamyan</a></p>
        <p>Designed By <a href="#">HTML Codex</a></p>
      </div>
    </footer>
  );
};

export default Footer;