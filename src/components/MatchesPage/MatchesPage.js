import { useState } from "react";
import { Calendar, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import TopNavigation from "../common/TopNavigation/TopNavigation";
import Footer from "../common/Footer/Footer";
import SponsorsSection from "../common/SponsorSection/SponsorsSection";
import "./MatchesPage.css";

// Import team logos
import kotanLogo from "../../assets/images/kotan_logo.jpeg";

const teams = [
    { id: "seniorzy", name: "SENIORZY", color: "from-blue-600 to-blue-700", bgColor: "#2563eb" },
    { id: "trampkarz", name: "TRAMPKARZ", color: "from-blue-500 to-blue-600", bgColor: "#3b82f6" },
    { id: "mlodzik", name: "MŁODZIK", color: "from-blue-400 to-blue-500", bgColor: "#60a5fa" },
    { id: "orlik", name: "ORLIK", color: "from-sky-300 to-sky-400", bgColor: "#7dd3fc" },
    { id: "zak", name: "ŻAK", color: "from-sky-200 to-sky-300", bgColor: "#bae6fd" },
    { id: "seniorki", name: "SENIORKI", color: "from-purple-600 to-purple-700", bgColor: "#9333ea" },
    { id: "mlodziczki", name: "MŁODZICZKI", color: "from-purple-500 to-purple-600", bgColor: "#a855f7" },
    { id: "orliczki", name: "ORLICZKI", color: "from-purple-400 to-purple-500", bgColor: "#c084fc" }
];

const matchesData = {
    seniorzy: [
        { league: "III LIGA • GRUPA 2", date: "14.09.2025", location: "Ozorków, ul. Leśna 1", opponent: "KS ŁÓDŹ" },
        { league: "III LIGA • GRUPA 2", date: "23.10.2025", location: "Łódź, ul. Sportowa 15", opponent: "WIDZEW II" },
        { league: "III LIGA • GRUPA 2", date: "05.11.2025", location: "Ozorków, ul. Leśna 1", opponent: "RKS RADOMSKO" }
    ],
    trampkarz: [
        { league: "TRAMPKARZE • KLASA A", date: "14.09.2025", location: "Ozorków, ul. Leśna 1", opponent: "UKS SMS" },
        { league: "TRAMPKARZE • KLASA A", date: "23.10.2025", location: "Zgierz, ul. Centralna 8", opponent: "KSK ZGIERZ" },
        { league: "TRAMPKARZE • KLASA A", date: "12.11.2025", location: "Ozorków, ul. Leśna 1", opponent: "ACADEMIA" }
    ],
    mlodzik: [
        { league: "MŁODZIK • KLASA B", date: "14.09.2025", location: "Ozorków, ul. Leśna 1", opponent: "MKS ŁASK" },
        { league: "MŁODZIK • KLASA B", date: "23.10.2025", location: "Łask, ul. Polna 3", opponent: "SPARTA ŁASK" },
        { league: "MŁODZIK • KLASA B", date: "08.11.2025", location: "Ozorków, ul. Leśna 1", opponent: "UNIA SIERADZ" }
    ],
    orlik: [
        { league: "ORLIK E2 • GRUPA 5", date: "14.09.2025", location: "Ozorków, ul. Leśna 1", opponent: "UKS SMS" },
        { league: "ORLIK E2 • GRUPA 5", date: "23.10.2025", location: "Łódź, ul. Piotrkowska 99", opponent: "ŁKS ŁÓDŹ" },
        { league: "ORLIK E2 • GRUPA 5", date: "15.11.2025", location: "Ozorków, ul. Leśna 1", opponent: "AKADEMIA" }
    ],
    zak: [
        { league: "ŻAK • GRUPA 3", date: "14.09.2025", location: "Ozorków, ul. Leśna 1", opponent: "DELTA ŁÓDŹ" },
        { league: "ŻAK • GRUPA 3", date: "23.10.2025", location: "Konstantynów, ul.主ôdzia 12", opponent: "CZARNI" },
        { league: "ŻAK • GRUPA 3", date: "18.11.2025", location: "Ozorków, ul. Leśna 1", opponent: "VICTORIA" }
    ],
    seniorki: [
        { league: "SENIORKI • IV LIGA", date: "14.09.2025", location: "Ozorków, ul. Leśna 1", opponent: "KSK OLIMPIA" },
        { league: "SENIORKI • IV LIGA", date: "23.10.2025", location: "Sieradz, ul. Sportowa 7", opponent: "SPARTA SIERADZ" },
        { league: "SENIORKI • IV LIGA", date: "10.11.2025", location: "Ozorków, ul. Leśna 1", opponent: "WIDZEW LADIES" }
    ],
    mlodziczki: [
        { league: "MŁODZICZKI • GRUPA A", date: "14.09.2025", location: "Ozorków, ul. Leśna 1", opponent: "AKADEMIA GIRLS" },
        { league: "MŁODZICZKI • GRUPA A", date: "23.10.2025", location: "Łódź, ul. Zachodnia 44", opponent: "ŁKS GIRLS" },
        { league: "MŁODZICZKI • GRUPA A", date: "14.11.2025", location: "Ozorków, ul. Leśna 1", opponent: "DELTA GIRLS" }
    ],
    orliczki: [
        { league: "ORLICZKI • GRUPA 2", date: "14.09.2025", location: "Ozorków, ul. Leśna 1", opponent: "SPARTA GIRLS" },
        { league: "ORLICZKI • GRUPA 2", date: "23.10.2025", location: "Pabianice, ul. Kolejowa 5", opponent: "VICTORIA" },
        { league: "ORLICZKI • GRUPA 2", date: "20.11.2025", location: "Ozorków, ul. Leśna 1", opponent: "UKS SMS GIRLS" }
    ]
};

function TeamLogo({ name, size = "md" }) {
    const sizes = {
        sm: "team-logo-sm",
        md: "team-logo-md",
        lg: "team-logo-lg"
    };

    const isPrimary = name === "KOTAN";

    return (
        <div className={`team-logo ${sizes[size]} ${isPrimary ? 'team-logo-primary' : 'team-logo-opponent'}`}>
            {isPrimary ? (
                <img src={kotanLogo} alt="KOTAN" className="team-logo-img" />
            ) : (
                <span className={`team-logo-letter ${size === 'lg' ? 'text-3xl' : size === 'md' ? 'text-2xl' : 'text-lg'}`}>
                    {name.charAt(0)}
                </span>
            )}
        </div>
    );
}

function MatchCard({ match, bgColor }) {
    return (
        <div
            className="match-detail-card"
            style={{
                background: `linear-gradient(135deg, ${bgColor}, ${bgColor}dd)`
            }}
        >
            {/* League */}
            <div className="match-detail-league">
                <p className="match-detail-league-text">{match.league}</p>
            </div>

            {/* Teams */}
            <div className="match-detail-teams">
                <div className="match-detail-team">
                    <TeamLogo name="KOTAN" size="lg" />
                    <p className="match-detail-team-name">KOTAN</p>
                </div>

                <div className="match-detail-vs">
                    <div className="match-detail-vs-container">
                        <span className="match-detail-vs-text">VS</span>
                    </div>
                </div>

                <div className="match-detail-team">
                    <TeamLogo name={match.opponent} size="lg" />
                    <p className="match-detail-team-name">{match.opponent}</p>
                </div>
            </div>

            {/* Match Info */}
            <div className="match-detail-info">
                <div className="match-detail-info-item">
                    <Calendar className="match-detail-icon" />
                    <span>{match.date}</span>
                </div>
                <div className="match-detail-info-item">
                    <MapPin className="match-detail-icon" />
                    <span>{match.location}</span>
                </div>
            </div>
        </div>
    );
}

function TeamSection({ team, matches }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % matches.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + matches.length) % matches.length);
    };

    return (
        <div
            className="team-section"
            style={{
                background: `linear-gradient(135deg, ${team.bgColor}, ${team.bgColor}dd)`
            }}
        >
            {/* Team Name */}
            <h3 className="team-section-title">
                {team.name}
            </h3>

            {/* Matches Carousel */}
            <div className="team-matches-carousel">
                <div className="team-matches-content">
                    <button
                        onClick={prevSlide}
                        className="team-carousel-button team-carousel-button-desktop"
                        aria-label="Previous match"
                    >
                        <ChevronLeft className="carousel-button-icon" />
                    </button>

                    <div className="team-matches-grid">
                        {matches.map((match, index) => (
                            <div
                                key={index}
                                className={`team-match-slide ${index === currentIndex ? 'team-match-slide-active' : 'team-match-slide-hidden'
                                    }`}
                            >
                                <MatchCard match={match} bgColor={team.bgColor} />
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={nextSlide}
                        className="team-carousel-button team-carousel-button-desktop"
                        aria-label="Next match"
                    >
                        <ChevronRight className="carousel-button-icon" />
                    </button>
                </div>

                {/* Mobile Navigation */}
                <div className="team-carousel-mobile-nav">
                    <button
                        onClick={prevSlide}
                        className="team-carousel-mobile-button"
                        aria-label="Previous match"
                    >
                        <ChevronLeft className="carousel-mobile-icon" />
                    </button>
                    <div className="team-carousel-indicators">
                        {matches.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`team-carousel-indicator ${index === currentIndex ? 'team-carousel-indicator-active' : ''
                                    }`}
                                aria-label={`Go to match ${index + 1}`}
                            />
                        ))}
                    </div>
                    <button
                        onClick={nextSlide}
                        className="team-carousel-mobile-button"
                        aria-label="Next match"
                    >
                        <ChevronRight className="carousel-mobile-icon" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function MatchesPage({ onNavigate }) {
    const [selectedTeam, setSelectedTeam] = useState(null);

    const filteredTeams = selectedTeam
        ? teams.filter(team => team.id === selectedTeam)
        : teams;

    return (
        <div className="matches-page">
            <TopNavigation onNavigate={onNavigate} currentPage="matches" />

            {/* Hero Section */}
            <div className="matches-hero">
                <div className="matches-hero-container">
                    <div className="matches-hero-content">
                        <h1 className="matches-hero-title">
                            Rozgrywki
                        </h1>
                        <p className="matches-hero-subtitle">
                            Zobacz terminarz meczów wszystkich zespołów KOTAN
                        </p>
                    </div>

                    {/* Team Filter Pills */}
                    <div className="matches-filter">
                        <button
                            onClick={() => setSelectedTeam(null)}
                            className={`matches-filter-pill ${selectedTeam === null ? 'matches-filter-pill-active' : ''
                                }`}
                        >
                            Wszystkie
                        </button>
                        {teams.map((team) => (
                            <button
                                key={team.id}
                                onClick={() => setSelectedTeam(team.id)}
                                className={`matches-filter-pill ${selectedTeam === team.id ? 'matches-filter-pill-active' : ''
                                    }`}
                            >
                                {team.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Matches Grid */}
            <div className="matches-content">
                <div className="matches-content-container">
                    <div className="matches-grid">
                        {filteredTeams.map((team) => (
                            <TeamSection
                                key={team.id}
                                team={team}
                                matches={matchesData[team.id]}
                            />
                        ))}
                    </div>

                    {/* Info Box */}
                    <div className="matches-info-box">
                        <div className="matches-info-content">
                            <h3 className="matches-info-title">
                                Bądź na bieżąco
                            </h3>
                            <p className="matches-info-text">
                                Śledź wyniki i nadchodzące mecze naszych drużyn.
                                Terminarz jest regularnie aktualizowany.
                            </p>
                            <div className="matches-info-buttons">
                                <button className="matches-info-button-secondary">
                                    Pobierz kalendarz
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SponsorsSection />
            <Footer onNavigate={onNavigate} />
        </div>
    );
}