import React from "react";
import "./Banner.css";

import bannerPhoto1 from "../../../assets/images/banner_photo_1.png";
import bannerPhoto2 from "../../../assets/images/banner_photo_2.png";
import bannerPhoto3 from "../../../assets/images/banner_photo_3.png";
import ozorkow_logo from "../../../assets/images/ozorkow_logo.png";
import orlen_logo from "../../../assets/images/orlen_logo.png";


const Banner = () => {
    return (
        <div className="banner">
            <p>
                KOTAN OZORKÓW • KOTAN
                <div className="kids-container">
                    <div className="kids-text">
                        <span className="letter-k">K</span>
                        <span className="letter-i">I</span>
                        <span className="letter-d">D</span>
                        <span className="letter-s">S</span>
                    </div>
                </div>
                • KOTAN
                <div className="girls-container">
                    <span className="grils-text">GIRLS</span>
                </div>
            </p>
            <div className="banner-photos">
                <img src={bannerPhoto1}></img>
                <img src={bannerPhoto2}></img>
                <img src={bannerPhoto3}></img>
            </div>
            <div className="bottom">
                <img src={ozorkow_logo} alt="Ozorkow Logo" />
                <div className="text-content">
                    <p>PIŁKARSKA PRZYSZŁOŚĆ Z ORLENEM</p>
                    <p>DOŁĄCZ DO NAS</p>
                </div>
                <img src={orlen_logo} alt="Orlen Logo" />
            </div>

        </div>
    );
};

export default Banner;