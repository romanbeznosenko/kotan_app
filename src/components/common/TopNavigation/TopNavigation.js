import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../../assets/images/kotan_logo.jpeg";
import "./TopNavigation.css";

const TopNavigation = ({ onNavigate, currentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navigation-sticky">
      <div className="navigation-container">
        <div className="navigation-content">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
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
              onClick={() => handleNavClick('home')}
              className={`nav-button ${currentPage === 'home' ? 'nav-button-active' : ''}`}
            >
              Strona główna
            </button>

            {/* Teams Dropdown */}
            <div
              className="dropdown-wrapper"
            >
              <button
                onClick={() => handleNavClick('teams')}
                className={`nav-button ${currentPage === 'teams' || currentPage === 'zespoly'}`}
              >
                Zespoły
              </button>
            </div>

            <button
              onClick={() => handleNavClick('news')}
              className={`nav-button ${currentPage === 'news' || currentPage === 'aktualnosci' ? 'nav-button-active' : ''}`}
            >
              Aktualności
            </button>

            <button
              onClick={() => handleNavClick('matches')}
              className={`nav-button ${currentPage === 'matches' || currentPage === 'rozgrywki' ? 'nav-button-active' : ''}`}
            >
              Rozgrywki
            </button>

            <button
              onClick={() => handleNavClick('gallery')}
              className={`nav-button ${currentPage === 'gallery' || currentPage === 'galeria' ? 'nav-button-active' : ''}`}
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
                onClick={() => handleNavClick('home')}
                className={`mobile-nav-button ${currentPage === 'home' ? 'mobile-nav-button-active' : ''}`}
              >
                Strona główna
              </button>
              <button
                onClick={() => handleNavClick('teams')}
                className={`mobile-nav-button ${currentPage === 'teams' || currentPage === 'zespoly' ? 'mobile-nav-button-active' : ''}`}
              >
                Zespoły
              </button>
              <button
                onClick={() => handleNavClick('news')}
                className={`mobile-nav-button ${currentPage === 'news' || currentPage === 'aktualnosci' ? 'mobile-nav-button-active' : ''}`}
              >
                Aktualności
              </button>
              <button
                onClick={() => handleNavClick('matches')}
                className={`mobile-nav-button ${currentPage === 'matches' || currentPage === 'rozgrywki' ? 'mobile-nav-button-active' : ''}`}
              >
                Rozgrywki
              </button>
              <button
                onClick={() => handleNavClick('gallery')}
                className={`mobile-nav-button ${currentPage === 'gallery' || currentPage === 'galeria' ? 'mobile-nav-button-active' : ''}`}
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