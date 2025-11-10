import { Calendar, ArrowLeft, Facebook, Instagram, Share2 } from "lucide-react";
import TopNavigation from "../../components/common/TopNavigation/TopNavigation";
import Footer from "../../components/common/Footer/Footer";
import SponsorsSection from "../../components/common/SponsorSection/SponsorsSection";
import "./NewsPageDetails.css"

// Import images
import newsImage1 from "../../assets/images/banner_photo_1.png";
import newsImage2 from "../../assets/images/banner_photo_2.png";
import newsImage3 from "../../assets/images/banner_photo_3.png";

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

export default function NewsDetailPage({ onNavigate }) {
    // Related articles
    const relatedArticles = [
        {
            id: 1,
            image: newsImage3,
            fallback: "https://images.unsplash.com/photo-1752673510841-275144e92ed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZm9vdGJhbGwlMjBwcmFjdGljZXxlbnwxfHx8fDE3NjAzNTc5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
            category: "KOTAN KIDS",
            title: "KOTAN KIDS - WYSOKIE ZWYCIĘSTWO ORLIKÓW"
        },
        {
            id: 2,
            image: newsImage2,
            fallback: "https://images.unsplash.com/photo-1677119966332-8c6e9fb0efab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXJzJTIwYWN0aW9ufGVufDF8fHx8MTc2MDMxMjcyNHww&ixlib=rb-4.1.0&q=80&w=1080",
            category: "KOTAN GIRLS",
            title: "IV LIGA WRACA DO OZORKOWA"
        }
    ];

    return (
        <div className="news-detail-page">
            <TopNavigation onNavigate={onNavigate} currentPage="news" />

            {/* Hero Image */}
            <div className="news-detail-hero">
                <ImageWithFallback
                    src={newsImage1}
                    fallback="https://images.unsplash.com/photo-1478851814281-61a21b884e62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHNvY2NlciUyMHRlYW18ZW58MXx8fHwxNzYwMzU3OTAxfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="KOTAN GIRLS Zgrupowanie Kadry"
                    className="news-detail-hero-image"
                />
                <div className="news-detail-hero-overlay" />
            </div>

            {/* Article Content */}
            <article className="news-detail-content">
                {/* Back Button */}
                <button
                    onClick={() => onNavigate('news')}
                    className="news-detail-back-button"
                >
                    <ArrowLeft className="news-detail-back-icon" />
                    <span className="news-detail-back-text">Powrót do aktualności</span>
                </button>

                {/* Category Badge */}
                <div className="news-detail-category-wrapper">
                    <span className="news-detail-category-badge">
                        KOTAN GIRLS
                    </span>
                </div>

                {/* Date */}
                <div className="news-detail-date">
                    <Calendar className="news-detail-date-icon" />
                    <time dateTime="2025-09-15T16:10">15.09.2025 16:10</time>
                </div>

                {/* Title */}
                <h1 className="news-detail-title">
                    KOTAN GIRLS | CZTERY ZAWODNICZKI KOTANA NA ZGRUPOWANIU KADRY
                </h1>

                {/* Article Body */}
                <div className="news-detail-body">
                    <p className="news-detail-lead">
                        Dzisiaj Cztery Nasze Zawodniczki przebywały na Zgrupowaniu Kadry Wojewódzkiej ŁZPN U15 Kobiet
                    </p>

                    <div className="news-detail-highlight">
                        <h2 className="news-detail-highlight-title">Powołane Zawodniczki:</h2>
                        <ul className="news-detail-list">
                            <li className="news-detail-list-item">
                                <div className="news-detail-list-bullet" />
                                <span className="news-detail-list-text">Dymińska Oliwia</span>
                            </li>
                            <li className="news-detail-list-item">
                                <div className="news-detail-list-bullet" />
                                <span className="news-detail-list-text">Andrzejczak Zuzanna</span>
                            </li>
                            <li className="news-detail-list-item">
                                <div className="news-detail-list-bullet" />
                                <span className="news-detail-list-text">Zamolska Maria</span>
                            </li>
                            <li className="news-detail-list-item">
                                <div className="news-detail-list-bullet" />
                                <span className="news-detail-list-text">Domańska Wiktoria</span>
                            </li>
                        </ul>
                    </div>

                    <p className="news-detail-paragraph">
                        Kotanki wzięły udział w Konsultacjach Kadry, które odbyły się w Ośrodku Konferencyjnym przy Patykach (Kolonia Łabudzice - Zelów)
                    </p>

                    <div className="news-detail-quote">
                        <p className="news-detail-quote-text">
                            Gratulujemy i jesteśmy pewni, że Dziewczyny pokazały się z jak najlepszej strony
                        </p>
                    </div>
                </div>

                {/* Social Share Section */}
                <div className="news-detail-share">
                    <h3 className="news-detail-share-title">Udostępnij artykuł:</h3>
                    <div className="news-detail-share-buttons">
                        <button className="news-detail-share-button news-detail-share-facebook">
                            <Facebook className="news-detail-share-icon" />
                        </button>
                        <button className="news-detail-share-button news-detail-share-instagram">
                            <Instagram className="news-detail-share-icon" />
                        </button>
                        <button className="news-detail-share-button news-detail-share-twitter">
                            <Share2 className="news-detail-share-icon" />
                        </button>
                    </div>
                </div>

                {/* Related Articles */}
                <div className="news-detail-related">
                    <h3 className="news-detail-related-title">Powiązane artykuły</h3>
                    <div className="news-detail-related-grid">
                        {relatedArticles.map((article) => (
                            <button
                                key={article.id}
                                onClick={() => onNavigate('news')}
                                className="news-detail-related-card"
                            >
                                <div className="news-detail-related-image-wrapper">
                                    <ImageWithFallback
                                        src={article.image}
                                        fallback={article.fallback}
                                        alt={article.title}
                                        className="news-detail-related-image"
                                    />
                                </div>
                                <div className="news-detail-related-content">
                                    <span className={`news-detail-related-badge ${article.category === "KOTAN KIDS"
                                            ? "news-detail-related-badge-kids"
                                            : "news-detail-related-badge-girls"
                                        }`}>
                                        {article.category}
                                    </span>
                                    <h4 className="news-detail-related-title-text">
                                        {article.title}
                                    </h4>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </article>

            {/* Sponsors Section */}
            <div className="news-detail-sponsors">
                <SponsorsSection />
            </div>

            <Footer onNavigate={onNavigate} />
        </div>
    );
}  