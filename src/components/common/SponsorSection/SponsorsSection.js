import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./SponsorsSection.css";

// Import sponsor logos (you'll need to add these to your assets folder)
// Main sponsors
import orlenLogo from "../../../assets/images/orlen_logo.png";
import ozorkowLogo from "../../../assets/images/ozorkow_logo.png";

// Other sponsors (placeholders - replace with your actual sponsor logos)
import sponsor1 from "../../../assets/images/sponsor_1.png";
import sponsor2 from "../../../assets/images/sponsor_2.jpg";
import sponsor3 from "../../../assets/images/sponsor_3.png";
import sponsor4 from "../../../assets/images/sponsor_4.png";
import sponsor5 from "../../../assets/images/sponsor_5.png";
import sponsor6 from "../../../assets/images/sponsor_6.svg";

// Main sponsors data
const mainSponsors = [
    {
        id: 1,
        name: "PKN ORLEN",
        logo: orlenLogo,
        description: "Generalny Partner",
        website: "https://www.orlen.pl"
    },
    {
        id: 2,
        name: "Miasto Ozorków",
        logo: ozorkowLogo,
        description: "Partner Strategiczny",
        website: "https://www.ozorkow.pl"
    }
];

// Other sponsors data
const otherSponsors = [
    {
        id: 3,
        name: "Sponsor 1",
        logo: sponsor1,
        website: "#"
    },
    {
        id: 4,
        name: "Sponsor 2",
        logo: sponsor2,
        website: "#"
    },
    {
        id: 5,
        name: "Sponsor 3",
        logo: sponsor3,
        website: "#"
    },
    {
        id: 6,
        name: "Sponsor 4",
        logo: sponsor4,
        website: "#"
    },
    {
        id: 7,
        name: "Sponsor 5",
        logo: sponsor5,
        website: "#"
    },
    {
        id: 8,
        name: "Sponsor 6",
        logo: sponsor6,
        website: "#"
    }
];

function MainSponsorCard({ sponsor }) {
    return (
        <a
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="main-sponsor-card"
        >
            <div className="main-sponsor-badge">
                {sponsor.description}
            </div>
            <div className="main-sponsor-logo-wrapper">
                <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="main-sponsor-logo"
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
            </div>
            <div className="main-sponsor-name">
                {sponsor.name}
            </div>
        </a>
    );
}

function SponsorLogo({ sponsor }) {
    return (
        <a
            href={sponsor.website}
            target="_blank"
            rel="noopener noreferrer"
            className="sponsor-logo-link"
        >
            <div className="sponsor-logo-card">
                <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="sponsor-logo-image"
                    onError={(e) => {
                        e.target.style.display = 'none';
                    }}
                />
            </div>
        </a>
    );
}

export default function SponsorsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [sponsorsPerView, setSponsorsPerView] = useState(4);

    // Auto-play carousel
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(timer);
    }, [currentIndex, sponsorsPerView]);

    // Update sponsors per view based on screen size
    useEffect(() => {
        const updateSponsorsPerView = () => {
            if (window.innerWidth < 640) {
                setSponsorsPerView(2);
            } else if (window.innerWidth < 768) {
                setSponsorsPerView(3);
            } else if (window.innerWidth < 1024) {
                setSponsorsPerView(4);
            } else {
                setSponsorsPerView(5);
            }
        };

        updateSponsorsPerView();
        window.addEventListener('resize', updateSponsorsPerView);
        return () => window.removeEventListener('resize', updateSponsorsPerView);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + sponsorsPerView >= otherSponsors.length ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? Math.max(0, otherSponsors.length - sponsorsPerView) : prev - 1
        );
    };

    const visibleSponsors = otherSponsors.slice(currentIndex, currentIndex + sponsorsPerView);
    if (visibleSponsors.length < sponsorsPerView && otherSponsors.length >= sponsorsPerView) {
        visibleSponsors.push(...otherSponsors.slice(0, sponsorsPerView - visibleSponsors.length));
    }

    return (
        <section className="sponsors-section">
            <div className="sponsors-container">
                {/* Section Header */}
                <div className="sponsors-header">
                    <h2 className="sponsors-title">
                        Nasi Partnerzy
                    </h2>
                    <p className="sponsors-subtitle">
                        Dziękujemy za wsparcie i zaufanie
                    </p>
                </div>

                {/* Main Sponsors */}
                <div className="main-sponsors-wrapper">
                    <div className="main-sponsors-grid">
                        {mainSponsors.map((sponsor) => (
                            <MainSponsorCard key={sponsor.id} sponsor={sponsor} />
                        ))}
                    </div>
                </div>

                {/* Other Sponsors Carousel */}
                <div className="other-sponsors-section">
                    <h3 className="other-sponsors-title">Pozostali Partnerzy</h3>

                    <div className="sponsors-carousel-wrapper">
                        <button
                            onClick={prevSlide}
                            className="sponsors-carousel-button sponsors-carousel-button-prev"
                            aria-label="Previous sponsors"
                        >
                            <ChevronLeft className="carousel-icon" />
                        </button>

                        <div className="sponsors-carousel">
                            <div className="sponsors-carousel-track">
                                {visibleSponsors.map((sponsor) => (
                                    <div key={sponsor.id} className="sponsor-slide">
                                        <SponsorLogo sponsor={sponsor} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button
                            onClick={nextSlide}
                            className="sponsors-carousel-button sponsors-carousel-button-next"
                            aria-label="Next sponsors"
                        >
                            <ChevronRight className="carousel-icon" />
                        </button>
                    </div>

                    {/* Carousel Indicators */}
                    <div className="carousel-indicators">
                        {Array.from({ length: Math.ceil(otherSponsors.length / sponsorsPerView) }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index * sponsorsPerView)}
                                className={`carousel-indicator ${Math.floor(currentIndex / sponsorsPerView) === index ? 'carousel-indicator-active' : ''
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}