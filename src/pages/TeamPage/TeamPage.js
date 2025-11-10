import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TopNavigation from "../../components/common/TopNavigation/TopNavigation";
import Footer from "../../components/common/Footer/Footer";
import SponsorsSection from "../../components/common/SponsorSection/SponsorsSection";
import PlayerCard from "../../components/PlayerCard/PlayerCard";
import "./TeamPage.css";

// Import team banner image
import teamBanner from "../../assets/images/banner_photo_1.png";

// Sample players data - replace with your actual data
const playersData = {
    goalkeepers: [
        { id: 1, number: "1", name: "JAN KOWALSKI", position: "GK", image: null },
        { id: 2, number: "12", name: "PIOTR NOWAK", position: "GK", image: null }
    ],
    defenders: [
        { id: 3, number: "2", name: "ADAM WIŚNIEWSKI", position: "DF", image: null },
        { id: 4, number: "3", name: "TOMASZ LEWANDOWSKI", position: "DF", image: null },
        { id: 5, number: "4", name: "MICHAŁ WÓJCIK", position: "DF", image: null },
        { id: 6, number: "5", name: "JAKUB KAMIŃSKI", position: "DF", image: null },
        { id: 7, number: "13", name: "MATEUSZ ZIELIŃSKI", position: "DF", image: null }
    ],
    midfielders: [
        { id: 8, number: "6", name: "PAWEŁ SZYMAŃSKI", position: "MF", image: null },
        { id: 9, number: "7", name: "MARCIN WOŹNIAK", position: "MF", image: null },
        { id: 10, number: "8", name: "ŁUKASZ DĄBROWSKI", position: "MF", image: null },
        { id: 11, number: "14", name: "KRZYSZTOF PAWLAK", position: "MF", image: null }
    ],
    forwards: [
        { id: 12, number: "9", name: "ROBERT KUBIAK", position: "FW", image: null },
        { id: 13, number: "10", name: "SEBASTIAN KRÓL", position: "FW", image: null },
        { id: 14, number: "11", name: "DAMIAN MAZUR", position: "FW", image: null }
    ]
};

// Teams list for navigation
const teams = [
    { id: "seniorzy", name: "SENIORZY", color: "#2563eb" },
    { id: "trampkarz", name: "TRAMPKARZ", color: "#3b82f6" },
    { id: "mlodzik", name: "MŁODZIK", color: "#60a5fa" },
    { id: "orlik", name: "ORLIK", color: "#7dd3fc" },
    { id: "zak", name: "ŻAK", color: "#bae6fd" },
    { id: "seniorki", name: "SENIORKI", color: "#9333ea" },
    { id: "mlodziczki", name: "MŁODZICZKI", color: "#a855f7" },
    { id: "orliczki", name: "ORLICZKI", color: "#c084fc" }
];

function SectionHeader({ title, color = "#012A97" }) {
    return (
        <div
            className="section-header"
            style={{ backgroundColor: color }}
        >
            <h3 className="section-header-title">{title}</h3>
        </div>
    );
}

function PlayerSection({ title, players, color }) {
    return (
        <div className="player-section">
            <div className="player-section-container">
                <SectionHeader title={title} color={color} />
                <div className="player-section-content">
                    <div className="players-grid">
                        {players.map((player) => (
                            <PlayerCard
                                key={player.id}
                                number={player.number}
                                name={player.name}
                                position={player.position}
                                image={player.image}
                                onClick={() => console.log(`Clicked player: ${player.name}`)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function TeamSelector({ teams, selectedTeam, onSelectTeam }) {
    return (
        <div className="team-selector">
            <div className="team-selector-container">
                <h3 className="team-selector-title">Wybierz zespół</h3>
                <div className="team-selector-grid">
                    {teams.map((team) => (
                        <button
                            key={team.id}
                            onClick={() => onSelectTeam(team.id)}
                            className={`team-selector-button ${selectedTeam === team.id ? 'team-selector-button-active' : ''
                                }`}
                            style={{
                                '--team-color': team.color
                            }}
                        >
                            {team.name}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function TeamsPage({ onNavigate }) {
    const [selectedTeam, setSelectedTeam] = useState('trampkarz');

    // Get current team data
    const currentTeam = teams.find(t => t.id === selectedTeam) || teams[1];

    return (
        <div className="teams-page">
            <TopNavigation onNavigate={onNavigate} currentPage="teams" />

            {/* Hero Banner */}
            <div className="teams-hero">
                <div className="teams-hero-image-wrapper">
                    <img
                        src={teamBanner}
                        alt="Team Banner"
                        className="teams-hero-image"
                        onError={(e) => {
                            e.target.src = "https://images.unsplash.com/photo-1547228080-50a58f33b43e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHRlYW0lMjBncm91cHxlbnwxfHx8fDE3NjAzNTc5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080";
                        }}
                    />
                    <div className="teams-hero-overlay" />
                </div>
                <div className="teams-hero-content">
                    <div className="teams-hero-text">
                        <h1 className="teams-hero-title">{currentTeam.name}</h1>
                        <p className="teams-hero-subtitle">Sezon 2024/2025</p>
                    </div>
                </div>
            </div>

            {/* Team Selector */}
            <TeamSelector
                teams={teams}
                selectedTeam={selectedTeam}
                onSelectTeam={setSelectedTeam}
            />

            {/* Main Content */}
            <div className="teams-content">
                <div className="teams-content-container">
                    {/* Goalkeepers */}
                    <PlayerSection
                        title="BRAMKARZE"
                        players={playersData.goalkeepers}
                        color={currentTeam.color}
                    />

                    {/* Defenders */}
                    <PlayerSection
                        title="OBROŃCY"
                        players={playersData.defenders}
                        color={currentTeam.color}
                    />

                    {/* Midfielders */}
                    <PlayerSection
                        title="POMOCNICY"
                        players={playersData.midfielders}
                        color={currentTeam.color}
                    />

                    {/* Forwards */}
                    <PlayerSection
                        title="NAPASTNICY"
                        players={playersData.forwards}
                        color={currentTeam.color}
                    />

                    {/* Team Stats (Optional) */}
                    <div className="team-stats">
                        <div className="team-stats-container">
                            <h2 className="team-stats-title">Statystyki sezonu</h2>
                            <div className="team-stats-grid">
                                <div className="stat-card">
                                    <div className="stat-value">15</div>
                                    <div className="stat-label">Mecze</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-value">10</div>
                                    <div className="stat-label">Zwycięstwa</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-value">3</div>
                                    <div className="stat-label">Remisy</div>
                                </div>
                                <div className="stat-card">
                                    <div className="stat-value">2</div>
                                    <div className="stat-label">Porażki</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sponsors Section */}
            <SponsorsSection />

            <Footer onNavigate={onNavigate} />
        </div>
    );
}