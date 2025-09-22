import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import logo from "../../../assets/images/kotan_logo.jpeg";
import "./TopNavigation.css"

const TopNavigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSquadOpen, setIsSquadOpen] = useState(false);
    const [isMobileSquadOpen, setIsMobileSquadOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleSquad = () => {
        setIsSquadOpen(!isSquadOpen);
    };

    const toggleMobileSquad = () => {
        setIsMobileSquadOpen(!isMobileSquadOpen);
    };

    const navItems = [
        {
            label: "Zespoły",
            isDropDown: true,
            dropdownListItems: [
                { label: "Seniorzy", href: "#squad/seniors" },
                { label: "Trampkarz", href: "#squad/trampkarz" },
                { label: "Młodzik", href: "#squad/mlodzik" },
                { label: "Orlik", href: "#squad/orlik" },
                { label: "Żak", href: "#squad/zak" },
                { label: "Seniorki", href: "#squad/seniorki" },
                { label: "Młodziczki", href: "#squad/mlodziczki" },
                { label: "Orliczki", href: "#squad/orliczki" }
            ]
        },
        { label: "Aktualności", href: "#news" },
        { label: "Rozgrywki", href: "#matches" },
        { label: "Galeria", href: "#galery" }
    ];

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <a className="navbar-brand" href="#">
                            <img
                                src={logo}
                                alt="Kotan App Logo"
                                className="d-inline-block align-text-top logo"
                            />
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            onClick={toggleMenu}>
                            <div className={`menu-icon ${isMenuOpen ? 'menu-icon-open' : ''}`}>
                                {isMenuOpen ? (
                                    <FaTimes />
                                ) : (
                                    <FaBars />
                                )}
                            </div>

                        </button>
                    </div>

                    <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''} d-none d-lg-flex`} id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {navItems.map((item, index) => {
                                if (item.label === "Zespoły" && item.isDropDown) {
                                    return (
                                        <li key={index} className="nav-item dropdown">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                style={{ textTransform: 'uppercase' }}
                                                href="#"
                                                role="button"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    toggleSquad();
                                                }}
                                                aria-expanded={isSquadOpen}
                                            >
                                                {item.label}
                                            </a>
                                            <ul className={`dropdown-menu ${isSquadOpen ? 'show' : ''}`}>
                                                {item.dropdownListItems.map((dropdownItem, dropIndex) => (
                                                    <li key={dropIndex}>
                                                        <a className="dropdown-item" href={dropdownItem.href} style={{ textTransform: 'uppercase' }}>
                                                            {dropdownItem.label}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </li>
                                    );
                                }

                                return (
                                    <li key={index} className="nav-item">
                                        <a className="nav-link" href={item.href} style={{ textTransform: 'uppercase' }}>
                                            {item.label}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </nav>

            <div className={`mobile-sidebar-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                <div className="mobile-sidebar" onClick={(e) => e.stopPropagation()}>
                    <div className="sidebar-header">
                        <img src={logo} alt="Kotan Logo" className="sidebar-logo" />
                        <button className="close-btn" onClick={toggleMenu}>
                            <FaTimes />
                        </button>
                    </div>


                    <nav className="sidebar-nav">
                        {navItems.map((item, index) => {
                            if (item.label === "Zespoły" && item.isDropDown) {
                                return (
                                    <li key={index} className="nav-item dropdown">
                                        <a
                                            className="nav-link dropdown-toggle"
                                            style={{ textTransform: 'uppercase' }}
                                            href="#"
                                            role="button"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                toggleSquad();
                                            }}
                                            aria-expanded={isSquadOpen}
                                        >
                                            {item.label}
                                        </a>
                                        <ul className={`dropdown-menu ${isSquadOpen ? 'show' : ''}`}>
                                            {item.dropdownListItems.map((dropdownItem, dropIndex) => (
                                                <li key={dropIndex}>
                                                    <a className="dropdown-item" href={dropdownItem.href} style={{ textTransform: 'uppercase' }}>
                                                        {dropdownItem.label}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </li>
                                );
                            }

                            return (
                                <li key={index} className="nav-item">
                                    <a className="nav-link" href={item.href} style={{ textTransform: 'uppercase' }}>
                                        {item.label}
                                    </a>
                                </li>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </>
    );
};

export default TopNavigation;