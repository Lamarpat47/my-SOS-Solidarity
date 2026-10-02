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
import './FullEnglishHome.css';

export const FullEnglishHome: React.FC = () => {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  const teamMembers = [
    {
      name: 'Françoise DJIATCHEU K.',
      role: 'President',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400',
    },
    {
      name: 'Williane A. MONKAM',
      role: 'Project Coordinator',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400',
    },
    {
      name: 'Boris FOTSO',
      role: 'Littoral Region Delegate',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400',
    },
    {
      name: 'Ilario PASTORE',
      role: 'Head of Training',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400',
    },
  ];

  const testimonials = [
    {
      quote:
        "Life was a constant challenge for my children and me after losing everything. SOS SOLIDARITY FOR ALL not only provided us with a safe shelter and food to survive, but they also helped my children return to school.",
      author: "Elodie",
      role: "Beneficiary",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600",
    },
  ];

  return (
    <div className="home-wrapper">
      {/* ==========================================
          HERO BANNER
      ========================================== */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <h1>FOR A BETTER FUTURE</h1>
          <p>
            We believe in creating opportunities and empowering communities through education, healthcare, and sustainable development.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary-amber">Donate Now</button>
            <button className="btn-secondary-green">Join Us Now</button>
          </div>
        </div>
        <div className="hero-image-wrap">
          <img
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=800"
            alt="Children in classroom"
          />
        </div>
      </section>

      {/* ==========================================
          AMBER QUOTE STRIP
      ========================================== */}
      <div className="quote-strip">
        <div className="play-icon-box">
          <Play size={20} fill="#ffffff" color="#ffffff" />
        </div>
        <p className="quote-strip-text">
          Together, we can build a world where everyone has the opportunity to thrive.
        </p>
        <span className="vertical-tag">Scroll Down</span>
      </div>

      {/* ==========================================
          ABOUT US & MISSION SECTION (id="about")
      ========================================== */}
      <section id="about" className="about-section">
        <div className="about-grid">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600"
              alt="Community gathering"
            />
          </div>

          <div className="about-text">
            <span className="section-subtitle">— ABOUT US —</span>
            <h2>Let's join forces, let's change the world</h2>
            <p className="description">
              Every act of kindness brings us closer to a world without suffering. Join a global movement that works for a dignifying future.
            </p>

            <div className="mission-content">
              <h3>Our Mission</h3>
              <p>
                Our mission is to support underprivileged communities by providing access to resources, education, and essential tools for their development.
              </p>
              <ul className="checklist">
                <li><Check size={16} className="check-icon" /> No one should go to bed hungry.</li>
                <li><Check size={16} className="check-icon" /> We provide compassion and support.</li>
                <li><Check size={16} className="check-icon" /> Together, we can transform someone's life.</li>
              </ul>
            </div>
          </div>

          <div className="about-amber-card">
            <p>
              Thanks to your donations, we spread care and support to children and families in need.
            </p>
            <button className="btn-dark-green">Donate Now</button>
          </div>
        </div>
      </section>

      {/* ==========================================
          STATS & WHY CHOOSE US
      ========================================== */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stats-boxes">
            <div className="stat-box box-amber">
              <Users size={28} />
              <span className="stat-number">50</span>
              <span className="stat-label">Active Beneficiaries</span>
            </div>
            <div className="stat-box box-green">
              <Utensils size={28} />
              <span className="stat-number">1000</span>
              <span className="stat-label">Meals Served</span>
            </div>
            <div className="stat-box box-green">
              <FolderCheck size={28} />
              <span className="stat-number">30</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-box box-amber">
              <HeartHandshake size={28} />
              <span className="stat-number">1000</span>
              <span className="stat-label">People Assisted</span>
            </div>
          </div>

          <div className="stats-info">
            <span className="section-subtitle">— WHY JOIN US —</span>
            <h2>A few reasons why people choose us!</h2>
            <p>
              We believe in creating opportunities and empowering communities through education, health services, and sustainable development. Your actions bring comfort, hope, and a better future.
            </p>
            <ul className="checklist">
              <li><Check size={16} className="check-icon" /> Support for underprivileged children</li>
              <li><Check size={16} className="check-icon" /> Assistance for isolated elderly people</li>
              <li><Check size={16} className="check-icon" /> Defense of fundamental human rights</li>
            </ul>

            <div className="stats-buttons">
              <button className="btn-primary-amber">Donate Now</button>
              <button className="btn-secondary-green">Join Us Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          TEAM MEMBERS SECTION
      ========================================== */}
      <section className="team-section">
        <div className="section-header-centered">
          <span className="section-subtitle">— OUR TEAM —</span>
          <h2>Meet the dedicated members of our team</h2>
        </div>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card">
              <div className="team-image">
                <img src={member.image} alt={member.name} />
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==========================================
          OUR DONATION CAUSES ACROSS CAMEROON
      ========================================== */}
      <section className="causes-section section-container">
        <div className="section-header-centered">
          <span className="section-subtitle">— OUR CAUSES —</span>
          <h2 className="section-title">
            Our Donation Causes Across Cameroon
          </h2>
        </div>

        <div className="cards-grid">
          <div className="cause-card">
            <div className="card-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=600"
                alt="Provide Basic Needs"
              />
              <span className="cause-tag">CAMEROON</span>
            </div>
            <div className="card-body">
              <h3>Provide Basic Needs</h3>
              <p>
                Ensuring that elderly and vulnerable individuals have access to essential needs such as food, water, clothing, and shelter.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn-amber">+ Donate Now</button>
            </div>
          </div>

          <div className="cause-card">
            <div className="card-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=600"
                alt="Support Healthcare"
              />
              <span className="cause-tag">HEALTH</span>
            </div>
            <div className="card-body">
              <h3>Support Healthcare</h3>
              <p>
                Organizing health awareness campaigns, providing basic medical care, and delivering mental health support to elderly individuals and children in need.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn-amber">+ Donate Now</button>
            </div>
          </div>

          <div className="cause-card">
            <div className="card-image-wrap">
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=600"
                alt="Offer Educational Support"
              />
              <span className="cause-tag">EDUCATION</span>
            </div>
            <div className="card-body">
              <h3>Offer Educational Support</h3>
              <p>
                Establishing educational programs for underprivileged children, including access to formal schooling and vocational training courses.
              </p>
            </div>
            <div className="card-footer">
              <button className="btn-amber">+ Donate Now</button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          TESTIMONIALS SECTION
      ========================================== */}
      <section className="testimonial-section">
        <div className="testimonial-grid">
          <div className="testimonial-left-panel">
            <h2>What people say about our activities.</h2>
            <p>
              We work to bring smiles, hope, and a better future to those who need it most.
            </p>
          </div>

          <div className="testimonial-image-wrapper">
            <img
              src={testimonials[testimonialIdx].image}
              alt="Beneficiary"
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

      {/* ==========================================
          OUR DIFFERENT PROJECTS
      ========================================== */}
      <section className="section-container">
        <div className="section-header-centered">
          <span className="section-subtitle">— OUR PROJECTS —</span>
          <h2 className="section-title">
            Our Different Projects Across Cameroon
          </h2>
        </div>

        <div className="cards-grid">
          <div className="project-card">
            <div className="project-sidebar">
              <div className="raised-tag">Raised $2000</div>
              <div className="percent-box">20%</div>
              <div className="goal-tag">Goal $10000</div>
            </div>

            <div className="project-content">
              <div className="card-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=600"
                  alt="Land Purchase"
                />
                <span className="cause-tag">HEADQUARTERS</span>
              </div>
              <div className="card-body">
                <h3>Land Purchase</h3>
                <p>
                  Purchase of a site for the construction of the organization's headquarters.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn-amber">+ Donate Now</button>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-sidebar">
              <div className="raised-tag">Raised $2500</div>
              <div className="percent-box">25%</div>
              <div className="goal-tag">Goal $10000</div>
            </div>

            <div className="project-content">
              <div className="card-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600"
                  alt="Multiple Training Centers"
                />
                <span className="cause-tag">TRAINING</span>
              </div>
              <div className="card-body">
                <h3>Multiple Training Centers</h3>
                <p>
                  A computer training center, an apprenticeship center for youth empowerment, and adaptation to new technologies.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn-amber">+ Donate Now</button>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-sidebar">
              <div className="raised-tag">Raised $2000</div>
              <div className="percent-box">20%</div>
              <div className="goal-tag">Goal $10000</div>
            </div>

            <div className="project-content">
              <div className="card-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=600"
                  alt="Cultural Center"
                />
                <span className="cause-tag">CULTURE</span>
              </div>
              <div className="card-body">
                <h3>A Cultural Center</h3>
                <p>
                  A cultural center for exchange, culture, and traditions between elderly individuals and youth.
                </p>
              </div>
              <div className="card-footer">
                <button className="btn-amber">+ Donate Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          BANK DONATION BANNER (id="donate")
      ========================================== */}
      <section id="donate" className="bank-section-container">
        <div className="bank-banner">
          <div className="bank-left-panel">
            <div className="top-corner-accent"></div>
            <h2>Let's donate to those in need for a better life.</h2>
            <p>
              Through your donations, we spread kindness and support to children, families, and communities struggling to find stability.
            </p>
            <div className="bottom-corner-accent"></div>
          </div>

          <div className="bank-right-panel">
            <div className="info-row header-row">BANK TRANSFER INFORMATION</div>
            <div className="info-row">BANK: ITALIAN BANK</div>
            <div className="info-row code-text">IBAN : IT37W3608105138247885447914</div>
            <div className="info-row">
              ACCOUNT NAME:<br />
              <strong>MONKAM WILLIANE ALVINE</strong>
            </div>
            <div className="info-row">
              REASON FOR TRANSFER:<br />
              <span>Purchase of land for the construction of a community centre</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FullEnglishHome;