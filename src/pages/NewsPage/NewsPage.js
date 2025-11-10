import { useState } from "react";
import { ArrowRight, Calendar, Filter } from "lucide-react";
import TopNavigation from "../../components/common/TopNavigation/TopNavigation";
import Footer from "../../components/common/Footer/Footer";
import SponsorsSection from "../../components/common/SponsorSection/SponsorsSection";
import "./NewsPage.css";

// Import images
import newsPlaceholder1 from "../../assets/images/banner_photo_1.png";
import newsPlaceholder2 from "../../assets/images/banner_photo_2.png";
import newsPlaceholder3 from "../../assets/images/banner_photo_3.png";

// Extended news articles data
const allNewsArticles = [
    {
        id: 1,
        image: newsPlaceholder1,
        fallbackImage: "https://images.unsplash.com/photo-1478851814281-61a21b884e62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHNvY2NlciUyMHRlYW18ZW58MXx8fHwxNzYwMzU3OTAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "KOTAN GIRLS",
        title: "KOTAN GIRLS | CZTERY ZAWODNICZKI KOTANA NA ZGRUPOWANIU KADRY",
        titleParts: {
            kotan: "KOTAN ",
            girls: "GIRLS ",
            rest: "| CZTERY ZAWODNICZKI KOTANA NA ZGRUPOWANIU KADRY"
        },
        excerpt: "Dzisiaj cztery nasze zawodniczki przebywały na zgrupowaniu kadry wojewódzkiej ŁZPN U15 Kobiet",
        date: "2025-09-15",
        featured: true
    },
    {
        id: 2,
        image: newsPlaceholder2,
        fallbackImage: "https://images.unsplash.com/photo-1677119966332-8c6e9fb0efab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXJzJTIwYWN0aW9ufGVufDF8fHx8MTc2MDMxMjcyNHww&ixlib=rb-4.1.0&q=80&w=1080",
        category: "KOTAN GIRLS",
        title: "KOTAN GIRLS | IV LIGA WRACA DO OZORKOWA",
        titleParts: {
            kotan: "KOTAN ",
            girls: "GIRLS ",
            rest: "| IV LIGA WRACA DO OZORKOWA"
        },
        excerpt: "Po latach wyczekiwania, IV Liga Kobiet powraca do Ozorkowa. To historyczny moment dla klubu",
        date: "2025-09-10",
        featured: false
    },
    {
        id: 3,
        image: newsPlaceholder3,
        fallbackImage: "https://images.unsplash.com/photo-1752673510841-275144e92ed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZm9vdGJhbGwlMjBwcmFjdGljZXxlbnwxfHx8fDE3NjAzNTc5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "KOTAN KIDS",
        title: "KOTAN KIDS | WYSOKIE ZWYCIĘSTWO ORLIKÓW",
        titleParts: {
            kotan: "KOTAN ",
            kids: { k: "K", i: "I", d: "D", s: "S" },
            rest: " | WYSOKIE ZWYCIĘSTWO ORLIKÓW"
        },
        excerpt: "Nasze Orliki pokazały pełnię swoich możliwości w ostatnim meczu wygrywając 5:0",
        date: "2025-09-08",
        featured: false
    },
    {
        id: 4,
        image: null,
        fallbackImage: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjB0cmFpbmluZ3xlbnwxfHx8fDE3NjAzNTc5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "ZESPÓŁ SENIORÓW",
        title: "TRENING OTWARTY DLA KIBICÓW",
        titleParts: null,
        excerpt: "Zapraszamy wszystkich fanów na specjalny trening otwarty z naszą drużyną seniorów",
        date: "2025-09-05",
        featured: false
    },
    {
        id: 5,
        image: null,
        fallbackImage: "https://images.unsplash.com/photo-1551958219-acbc608c6377?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBnb2FsfGVufDF8fHx8MTc2MDM1NzkwMnww&ixlib=rb-4.1.0&q=80&w=1080",
        category: "ZESPÓŁ SENIORÓW",
        title: "PEWNE ZWYCIĘSTWO W DERBACH REGIONU",
        titleParts: null,
        excerpt: "W emocjonujących derbach regionu nasz zespół pokazał pełnię swoich możliwości",
        date: "2025-09-03",
        featured: false
    },
    {
        id: 6,
        image: null,
        fallbackImage: "https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NjAzNTc5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "KOTAN GIRLS",
        title: "HISTORYCZNE ZWYCIĘSTWO W PUCHARZE",
        titleParts: null,
        excerpt: "Nasze dziewczyny zapisały się złotymi zgłoskami w historii klubu zdobywając Puchar",
        date: "2025-08-28",
        featured: false
    },
    {
        id: 7,
        image: null,
        fallbackImage: "https://images.unsplash.com/photo-1489944440615-453fc2b6a9a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHlvdXRofGVufDF8fHx8MTc2MDM1NzkwMnww&ixlib=rb-4.1.0&q=80&w=1080",
        category: "KOTAN KIDS",
        title: "NOWY NABÓR DO AKADEMII PIŁKARSKIEJ",
        titleParts: null,
        excerpt: "Rozpoczynamy nabór młodych talentów do naszej akademii. Zapraszamy dzieci w wieku 6-12 lat",
        date: "2025-08-25",
        featured: false
    },
    {
        id: 8,
        image: null,
        fallbackImage: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBzdGFkaXVtfGVufDF8fHx8MTc2MDM1NzkwMnww&ixlib=rb-4.1.0&q=80&w=1080",
        category: "KLUB",
        title: "MODERNIZACJA STADIONU W PEŁNI",
        titleParts: null,
        excerpt: "Prace nad modernizacją naszego stadionu postępują zgodnie z planem",
        date: "2025-08-20",
        featured: false
    },
    {
        id: 9,
        image: null,
        fallbackImage: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwcmFjdGljZXxlbnwxfHx8fDE3NjAzNTc5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "ZESPÓŁ SENIORÓW",
        title: "NOWY TRENER PROWADZI PIERWSZY TRENING",
        titleParts: null,
        excerpt: "Poznajcie naszego nowego trenera, który poprowadził już pierwszy trening z drużyną",
        date: "2025-08-15",
        featured: false
    }
];

const categories = ["WSZYSTKIE", "KOTAN GIRLS", "KOTAN KIDS", "ZESPÓŁ SENIORÓW", "KLUB"];

function ImageWithFallback({ src, fallback, alt, className }) {
    const handleError = (e) => {
        if (fallback && e.target.src !== fallback) {
            e.target.src = fallback;
        }
    };

    return (
        <img
            src={src || fallback}
            alt={alt}
            className={className}
            onError={handleError}
        />
    );
}

function NewsCard({ article, onClick }) {
    const getCategoryColor = (category) => {
        switch (category) {
            case "KOTAN GIRLS":
                return "news-category-girls";
            case "KOTAN KIDS":
                return "news-category-kids";
            case "ZESPÓŁ SENIORÓW":
                return "news-category-seniors";
            default:
                return "news-category-club";
        }
    };

    const renderTitle = () => {
        if (article.titleParts) {
            if (article.titleParts.kids) {
                return (
                    <h3 className={`news-card-title ${article.featured ? 'news-card-title-featured' : ''}`}>
                        <span className="title-kotan">{article.titleParts.kotan}</span>
                        <span className="title-kids-k">{article.titleParts.kids.k}</span>
                        <span className="title-kids-i">{article.titleParts.kids.i}</span>
                        <span className="title-kids-d">{article.titleParts.kids.d}</span>
                        <span className="title-kids-s">{article.titleParts.kids.s}</span>
                        <span className="title-rest">{article.titleParts.rest}</span>
                    </h3>
                );
            } else if (article.titleParts.girls) {
                return (
                    <h3 className={`news-card-title ${article.featured ? 'news-card-title-featured' : ''}`}>
                        <span className="title-kotan">{article.titleParts.kotan}</span>
                        <span className="title-girls">{article.titleParts.girls}</span>
                        <span className="title-rest">{article.titleParts.rest}</span>
                    </h3>
                );
            }
        }
        return <h3 className={`news-card-title ${article.featured ? 'news-card-title-featured' : ''}`}>{article.title}</h3>;
    };

    return (
        <article
            onClick={onClick}
            className={`news-card ${article.featured ? 'news-card-featured' : ''}`}
        >
            <div className={`news-card-image-wrapper ${article.featured ? 'news-card-image-featured' : ''}`}>
                <ImageWithFallback
                    src={article.image}
                    fallback={article.fallbackImage}
                    alt={article.title}
                    className="news-card-image"
                />
                <div className="news-card-overlay" />

                {/* Category Badge */}
                <div className="news-card-badge-container">
                    <span className={`news-card-badge ${getCategoryColor(article.category)}`}>
                        {article.category}
                    </span>
                </div>

                {/* Featured Badge */}
                {article.featured && (
                    <div className="news-card-featured-badge-container">
                        <span className="news-card-featured-badge">
                            WYRÓŻNIONE
                        </span>
                    </div>
                )}

                {/* Read More */}
                <div className="news-card-read-more">
                    <div className="news-card-read-more-content">
                        <span>Czytaj więcej</span>
                        <ArrowRight className="news-card-icon" />
                    </div>
                </div>
            </div>

            <div className={`news-card-content ${article.featured ? 'news-card-content-featured' : ''}`}>
                {/* Date */}
                <div className="news-card-date">
                    <Calendar className="news-card-date-icon" />
                    <time dateTime={article.date}>
                        {new Date(article.date).toLocaleDateString('pl-PL', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })}
                    </time>
                </div>

                {/* Title */}
                {renderTitle()}

                {/* Excerpt */}
                <p className={`news-card-excerpt ${article.featured ? 'news-card-excerpt-featured' : ''}`}>
                    {article.excerpt}
                </p>
            </div>
        </article>
    );
}

export default function NewsPage({ onNavigate }) {
    const [selectedCategory, setSelectedCategory] = useState("WSZYSTKIE");

    const filteredArticles = selectedCategory === "WSZYSTKIE"
        ? allNewsArticles
        : allNewsArticles.filter(article => article.category === selectedCategory);

    return (
        <div className="news-page">
            <TopNavigation onNavigate={onNavigate} currentPage="news" />

            {/* Hero Section */}
            <div className="news-hero">
                {/* Background Pattern */}
                <div className="news-hero-pattern">
                    <div className="news-hero-pattern-svg" />
                </div>

                <div className="news-hero-container">
                    <div className="news-hero-content">
                        <h1 className="news-hero-title">
                            Aktualności
                        </h1>
                        <p className="news-hero-subtitle">
                            Najnowsze wiadomości z życia klubu KOTAN Ozorków
                        </p>
                    </div>
                </div>
            </div>

            {/* Category Filter */}
            <div className="news-filter-bar">
                <div className="news-filter-container">
                    <div className="news-filter-content">
                        <div className="news-filter-label">
                            <Filter className="news-filter-icon" />
                            <span className="news-filter-text">Kategorie:</span>
                        </div>
                        <div className="news-filter-buttons">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`news-filter-button ${selectedCategory === category ? 'news-filter-button-active' : ''
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* News Grid */}
            <div className="news-content">
                <div className="news-content-container">
                    {/* Results Count */}
                    <div className="news-results-count">
                        <p className="news-results-text">
                            Znaleziono <span className="news-results-number">{filteredArticles.length}</span> artykułów
                            {selectedCategory !== "WSZYSTKIE" && ` w kategorii "${selectedCategory}"`}
                        </p>
                    </div>

                    {/* Articles Grid */}
                    <div className="news-grid">
                        {filteredArticles.map((article) => (
                            <NewsCard
                                key={article.id}
                                article={article}
                                onClick={() => onNavigate('news-detail')}
                            />
                        ))}
                    </div>

                    {/* No Results */}
                    {filteredArticles.length === 0 && (
                        <div className="news-no-results">
                            <div className="news-no-results-icon">📰</div>
                            <h3 className="news-no-results-title">
                                Brak artykułów
                            </h3>
                            <p className="news-no-results-text">
                                Nie znaleziono artykułów w wybranej kategorii
                            </p>
                            <button
                                onClick={() => setSelectedCategory("WSZYSTKIE")}
                                className="news-no-results-button"
                            >
                                Pokaż wszystkie
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Sponsors Section */}
            <SponsorsSection />

            <Footer onNavigate={onNavigate} />
        </div>
    );
}