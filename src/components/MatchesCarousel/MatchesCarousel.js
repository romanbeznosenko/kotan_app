import { useState } from "react";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import "./MatchesCarousel.css";

// Import your existing images
import kotan_logo from "../../assets/images/kotan_logo.jpeg";
import uks_sms_logo from "../../assets/images/uks_sms_logo.png";

// Enhanced match data with league information
const matchesData = [
    {
        id: 1,
        league: "ORLIK E2 • GRUPA 5",
        team1Name: "KOTAN",
        team2Name: "UKS SMS",
        team1Logo: kotan_logo,
        team2Logo: uks_sms_logo,
        date: "14.09.2025",
        location: "Ozorków, ul. Leśna 1",
        color: "from-yellow-500/20 to-yellow-600/20",
        bgColor: "#FEF3C7"
    },
    {
        id: 2,
        league: "SENIORKI • IV LIGA",
        team1Name: "KOTAN",
        team2Name: "KSK OLIMPIA",
        team1Logo: kotan_logo,
        team2Logo: uks_sms_logo,
        date: "23.10.2025",
        location: "Ozorków, ul. Leśna 1",
        color: "from-pink-500/20 to-pink-600/20",
        bgColor: "#FCE7F3"
    },
    {
        id: 3,
        league: "MŁODZIK • KLASA B",
        team1Name: "KOTAN",
        team2Name: "UKS SMS",
        team1Logo: kotan_logo,
        team2Logo: uks_sms_logo,
        date: "28.09.2025",
        location: "Ozorków, ul. Leśna 1",
        color: "from-blue-500/20 to-blue-600/20",
        bgColor: "#DBEAFE"
    },
    {
        id: 4,
        league: "TRAMPKARZE • KLASA A",
        team1Name: "KOTAN",
        team2Name: "KSK OLIMPIA",
        team1Logo: kotan_logo,
        team2Logo: uks_sms_logo,
        date: "05.11.2025",
        location: "Ozorków, ul. Leśna 1",
        color: "from-purple-500/20 to-purple-600/20",
        bgColor: "#EDE9FE"
    },
    {
        id: 5,
        league: "SENIORZY • III LIGA",
        team1Name: "KOTAN",
        team2Name: "UKS SMS",
        team1Logo: kotan_logo,
        team2Logo: uks_sms_logo,
        date: "12.11.2025",
        location: "Ozorków, ul. Leśna 1",
        color: "from-green-500/20 to-green-600/20",
        bgColor: "#D1FAE5"
    },
    {
        id: 6,
        league: "ORLICZKI • GRUPA 3",
        team1Name: "KOTAN",
        team2Name: "KSK OLIMPIA",
        team1Logo: kotan_logo,
        team2Logo: uks_sms_logo,
        date: "19.11.2025",
        location: "Ozorków, ul. Leśna 1",
        color: "from-red-500/20 to-red-600/20",
        bgColor: "#FEE2E2"
    }
];

function TeamLogo({ logo, name, isPrimary }) {
    return (
        <div className="team-logo-wrapper">
            <div className={`team-logo-container ${isPrimary ? 'team-logo-primary' : 'team-logo-secondary'}`}>
                <img src={logo} alt={name} className="team-logo-image" />
            </div>
        </div>
    );
}

function MatchCard({ match }) {
    return (
        <div className="match-card">
            {/* League Badge */}
            <div
                className="match-card-header"
                style={{ backgroundColor: match.bgColor }}
            >
                <p className="match-league">
                    {match.league}
                </p>
            </div>

            {/* Teams */}
            <div className="match-card-body">
                <div className="match-teams">
                    <div className="team-section">
                        <TeamLogo logo={match.team1Logo} name={match.team1Name} isPrimary />
                        <p className="team-name">{match.team1Name}</p>
                    </div>

                    <div className="vs-section">
                        <div className="vs-container">
                            <span className="vs-text">VS</span>
                        </div>
                    </div>

                    <div className="team-section">
                        <TeamLogo logo={match.team2Logo} name={match.team2Name} />
                        <p className="team-name">{match.team2Name}</p>
                    </div>
                </div>

                {/* Match Info */}
                <div className="match-info">
                    <div className="match-info-item">
                        <Calendar className="match-icon" />
                        <span>{match.date}</span>
                    </div>
                    <div className="match-info-item">
                        <MapPin className="match-icon" />
                        <span>{match.location}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function MatchesCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const matchesPerView = 3;

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev + matchesPerView >= matchesData.length ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? Math.max(0, matchesData.length - matchesPerView) : prev - 1
        );
    };

    const visibleMatches = matchesData.slice(currentIndex, currentIndex + matchesPerView);
    if (visibleMatches.length < matchesPerView) {
        visibleMatches.push(...matchesData.slice(0, matchesPerView - visibleMatches.length));
    }

    return (
        <section className="matches-carousel-section">
            <div className="matches-carousel-container">
                {/* Section Header */}
                <div className="matches-carousel-header">
                    <h2 className="matches-carousel-title">
                        Nadchodzące mecze
                    </h2>
                    <p className="matches-carousel-subtitle">
                        Zobacz harmonogram najbliższych spotkań
                    </p>
                </div>

                {/* Carousel */}
                <div className="carousel-wrapper">
                    <div className="carousel-content">
                        <button
                            onClick={prevSlide}
                            className="carousel-button carousel-button-prev"
                            aria-label="Previous matches"
                        >
                            <ChevronLeft className="carousel-icon" />
                        </button>

                        <div className="carousel-grid">
                            {visibleMatches.map((match) => (
                                <MatchCard key={match.id} match={match} />
                            ))}
                        </div>

                        <button
                            onClick={nextSlide}
                            className="carousel-button carousel-button-next"
                            aria-label="Next matches"
                        >
                            <ChevronRight className="carousel-icon" />
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="carousel-mobile-nav">
                        <button
                            onClick={prevSlide}
                            className="carousel-mobile-button"
                            aria-label="Previous matches"
                        >
                            <ChevronLeft className="carousel-mobile-icon" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="carousel-mobile-button"
                            aria-label="Next matches"
                        >
                            <ChevronRight className="carousel-mobile-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}