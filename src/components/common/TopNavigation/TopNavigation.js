import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/images/kotan_logo.jpeg";
import "./TopNavigation.css";

const TopNavigation = ({ onNavigate, currentPage }) => {
  const [showTeamsDropdown, setShowTeamsDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const teams = [
    "SENIORZY",
    "TRAMPKARZ",
    "MŁODZIK",
    "ORLIK",
    "ŻAK",
    "SENIORKI",
    "MŁODZICZKI",
    "ORLICZKI"
  ];

  return (
    <nav className="navigation-sticky">
      <div className="navigation-container">
        <div className="navigation-content">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')} 
            className="logo-button"
          >
            <div className="logo-circle">
              <img src={logo} alt="Kotan Logo" className="logo-image" />
            </div>
            <div className="logo-text">
              <div className="logo-title">KOTAN OZORKÓW</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <button 
              onClick={() => onNavigate('home')}
              className={`nav-button ${currentPage === 'home' ? 'nav-button-active' : ''}`}
            >
              Strona główna
            </button>

            {/* Teams Dropdown */}
            <div 
              className="dropdown-wrapper"
              onMouseEnter={() => setShowTeamsDropdown(true)}
              onMouseLeave={() => setShowTeamsDropdown(false)}
            >
              <button 
                onClick={() => onNavigate('teams')}
                className={`nav-button ${currentPage === 'teams' || showTeamsDropdown ? 'nav-button-active' : ''}`}
              >
                Zespoły
              </button>

              {showTeamsDropdown && (
                <div className="dropdown-menu">
                  {teams.map((team, index) => (
                    <button
                      key={index}
                      onClick={() => onNavigate('teams')}
                      className="dropdown-item"
                    >
                      {team}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button 
              onClick={() => onNavigate('news')}
              className={`nav-button ${currentPage === 'news' ? 'nav-button-active' : ''}`}
            >
              Aktualności
            </button>

            <button 
              onClick={() => onNavigate('matches')}
              className={`nav-button ${currentPage === 'matches' ? 'nav-button-active' : ''}`}
            >
              Rozgrywki
            </button>

            <button 
              onClick={() => onNavigate('gallery')}
              className={`nav-button ${currentPage === 'gallery' ? 'nav-button-active' : ''}`}
            >
              Galeria
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-button"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="mobile-nav">
            <div className="mobile-nav-content">
              <button 
                onClick={() => { onNavigate('home'); setMobileMenuOpen(false); }}
                className={`mobile-nav-button ${currentPage === 'home' ? 'mobile-nav-button-active' : ''}`}
              >
                Strona główna
              </button>
              <button 
                onClick={() => { onNavigate('teams'); setMobileMenuOpen(false); }}
                className={`mobile-nav-button ${currentPage === 'teams' ? 'mobile-nav-button-active' : ''}`}
              >
                Zespoły
              </button>
              <button 
                onClick={() => { onNavigate('news'); setMobileMenuOpen(false); }}
                className={`mobile-nav-button ${currentPage === 'news' ? 'mobile-nav-button-active' : ''}`}
              >
                Aktualności
              </button>
              <button 
                onClick={() => { onNavigate('matches'); setMobileMenuOpen(false); }}
                className={`mobile-nav-button ${currentPage === 'matches' ? 'mobile-nav-button-active' : ''}`}
              >
                Rozgrywki
              </button>
              <button 
                onClick={() => { onNavigate('gallery'); setMobileMenuOpen(false); }}
                className={`mobile-nav-button ${currentPage === 'gallery' ? 'mobile-nav-button-active' : ''}`}
              >
                Galeria
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default TopNavigation;