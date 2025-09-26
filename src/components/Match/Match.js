import "./Match.css";

import kotan_logo from "../../../src/assets/images/kotan_logo.jpeg";
import uks_sms_logo from "../../../src/assets/images/uks_sms_logo.png";

const Match = ({ 
    match_date = "14.09.2025", 
    match_address = "OZORKÓW, UL.LEŚNA 1", 
    match_background = "#012A97",
    home_team_logo = kotan_logo,
    away_team_logo = uks_sms_logo
}) => {

    return (
        <>
            <div 
                className="div-match"
                style={{ backgroundColor: match_background }}
            >
                <div className="div-match-logos">
                    <img src={home_team_logo} className="match-img" alt="Home team logo" />
                    <p className="match-vs-text">VS</p>
                    <img src={away_team_logo} className="match-img" alt="Away team logo" />
                </div>
                <div className="div-match-text">
                    <span>
                        {match_date}
                    </span>
                    <span>
                        {match_address}
                    </span>
                </div>
            </div>
        </>
    )
}

export default Match;