import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import "./Footer.css";
import logo from "../../../assets/images/kotan_logo.jpeg";

export default function Footer({ onNavigate }) {
    const handleNavigate = (section) => {
        if (onNavigate) {
            onNavigate(section);
        }
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    {/* Brand */}
                    <div className="footer-brand">
                        <div className="footer-logo-wrapper">
                            <div className="footer-logo-circle">
                                <img src={logo} alt="KOTAN Logo" className="footer-logo-image" />
                            </div>
                            <div className="footer-logo-text">
                                <div className="footer-brand-name">KOTAN OZORKÓW</div>
                                <div className="footer-brand-subtitle">Akademia Piłkarska</div>
                            </div>
                        </div>
                        <p className="footer-description">
                            Rozwijamy młode talenty piłkarskie i budujemy sportową przyszłość Ozorkowa.
                            Dołącz do naszej akademii i rozwijaj swoją pasję do piłki nożnej.
                        </p>
                        <div className="footer-social">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="Facebook"
                            >
                                <Facebook className="footer-social-icon" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="Instagram"
                            >
                                <Instagram className="footer-social-icon" />
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="footer-social-link"
                                aria-label="Youtube"
                            >
                                <Youtube className="footer-social-icon" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links-section">
                        <h3 className="footer-section-title">Nawigacja</h3>
                        <ul className="footer-links-list">
                            <li>
                                <button
                                    onClick={() => handleNavigate('home')}
                                    className="footer-link"
                                >
                                    Strona główna
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavigate('teams')}
                                    className="footer-link"
                                >
                                    Zespoły
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavigate('news')}
                                    className="footer-link"
                                >
                                    Aktualności
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavigate('matches')}
                                    className="footer-link"
                                >
                                    Rozgrywki
                                </button>
                            </li>
                            <li>
                                <button
                                    onClick={() => handleNavigate('gallery')}
                                    className="footer-link"
                                >
                                    Galeria
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-contact-section">
                        <h3 className="footer-section-title">Kontakt</h3>
                        <ul className="footer-contact-list">
                            <li className="footer-contact-item">
                                <MapPin className="footer-contact-icon" />
                                <span>Łęczycka, 95-036 Ozorków</span>
                            </li>
                            <li className="footer-contact-item">
                                <Phone className="footer-contact-icon" />
                                <a
                                    href="tel:660906041"
                                    className="footer-contact-link"
                                >
                                    660 906 041
                                </a>
                            </li>
                            <li className="footer-contact-item">
                                <Mail className="footer-contact-icon" />
                                <a
                                    href="mailto:kotanklub@gmail.com"
                                    className="footer-contact-link"
                                >
                                    kotanklub@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="footer-bottom">
                    <div className="footer-bottom-content">
                        <p className="footer-copyright">
                            © {currentYear} KOTAN Ozorków. Wszelkie prawa zastrzeżone.
                        </p>
                        <div className="footer-legal-links">
                            <button
                                onClick={() => handleNavigate('privacy')}
                                className="footer-legal-link"
                            >
                                Polityka prywatności
                            </button>
                            <button
                                onClick={() => handleNavigate('terms')}
                                className="footer-legal-link"
                            >
                                Regulamin
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}