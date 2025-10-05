// mockData.js
// Mock data for 6 matches

import kotan_logo from "../../../src/assets/images/kotan_logo.jpeg";
import uks_sms_logo from "../../../src/assets/images/uks_sms_logo.png";

export const matchesData = [
    {
        id: 1,
        match_date: "14.09.2025",
        match_address: "OZORKÓW, UL. LEŚNA 1",
        match_background: "#012A97",
        home_team_logo: kotan_logo,
        away_team_logo: uks_sms_logo
    },
    {
        id: 2,
        match_date: "21.09.2025",
        match_address: "WARSZAWA, UL. MARSZAŁKOWSKA 15",
        match_background: "#FF5733",
        home_team_logo: uks_sms_logo,
        away_team_logo: kotan_logo
    },
    {
        id: 3,
        match_date: "28.09.2025",
        match_address: "KRAKÓW, UL. FLORIAŃSKA 8",
        match_background: "#28A745",
        home_team_logo: kotan_logo,
        away_team_logo: uks_sms_logo
    },
    {
        id: 4,
        match_date: "05.10.2025",
        match_address: "GDAŃSK, UL. DŁUGA 22",
        match_background: "#6F42C1",
        home_team_logo: uks_sms_logo,
        away_team_logo: kotan_logo
    },
    {
        id: 5,
        match_date: "12.10.2025",
        match_address: "WROCŁAW, UL. RYNEK 10",
        match_background: "#FD7E14",
        home_team_logo: kotan_logo,
        away_team_logo: uks_sms_logo
    },
    {
        id: 6,
        match_date: "19.10.2025",
        match_address: "POZNAŃ, UL. ŚWIĘTY MARCIN 30",
        match_background: "#20C997",
        home_team_logo: uks_sms_logo,
        away_team_logo: kotan_logo
    }
];

// Helper function to get matches by date range
export const getMatchesByDateRange = (startDate, endDate) => {
    return matchesData.filter(match => {
        const matchDate = new Date(match.match_date.split('.').reverse().join('-'));
        const start = new Date(startDate);
        const end = new Date(endDate);
        return matchDate >= start && matchDate <= end;
    });
};

// Helper function to get matches by team
export const getMatchesByTeam = (teamLogo) => {
    return matchesData.filter(match => 
        match.home_team_logo === teamLogo || match.away_team_logo === teamLogo
    );
};

// Helper function to get upcoming matches (from today)
export const getUpcomingMatches = () => {
    const today = new Date();
    return matchesData.filter(match => {
        const matchDate = new Date(match.match_date.split('.').reverse().join('-'));
        return matchDate >= today;
    });
};

// Helper function to get matches by location/city
export const getMatchesByCity = (city) => {
    return matchesData.filter(match => 
        match.match_address.toUpperCase().includes(city.toUpperCase())
    );
};