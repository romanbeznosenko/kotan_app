import { ArrowRight } from "lucide-react";
import "./NewsSection.css";

// Import placeholder images (you can replace these with your actual images)
import newsPlaceholder1 from "../../assets/images/banner_photo_1.png";
import newsPlaceholder2 from "../../assets/images/banner_photo_2.png";
import newsPlaceholder3 from "../../assets/images/banner_photo_3.png";

const newsArticles = [
    {
        id: 1,
        image: newsPlaceholder1,
        // Fallback to unsplash if local image not available
        imageFallback: "https://images.unsplash.com/photo-1478851814281-61a21b884e62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21lbiUyMHNvY2NlciUyMHRlYW18ZW58MXx8fHwxNzYwMzU3OTAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "KOTAN GIRLS",
        title: "KOTAN GIRLS IV LIGA WRACA DO OZORKOWA",
        titleParts: {
            kotan: "KOTAN ",
            girls: "GIRLS ",
            rest: "IV LIGA WRACA DO OZORKOWA"
        },
        featured: false
    },
    {
        id: 2,
        image: newsPlaceholder2,
        imageFallback: "https://images.unsplash.com/photo-1677119966332-8c6e9fb0efab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXJzJTIwYWN0aW9ufGVufDF8fHx8MTc2MDMxMjcyNHww&ixlib=rb-4.1.0&q=80&w=1080",
        category: "KOTAN GIRLS",
        title: "KOTAN GIRLS CZTERY ZAWODNICZKI KOTANA PONOWNIE POWOŁANE DO KADRY",
        titleParts: {
            kotan: "KOTAN ",
            girls: "GIRLS ",
            rest: "CZTERY ZAWODNICZKI KOTANA PONOWNIE POWOŁANE DO KADRY"
        },
        featured: true
    },
    {
        id: 3,
        image: newsPlaceholder3,
        imageFallback: "https://images.unsplash.com/photo-1752673510841-275144e92ed3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxraWRzJTIwZm9vdGJhbGwlMjBwcmFjdGljZXxlbnwxfHx8fDE3NjAzNTc5MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
        category: "KOTAN KIDS",
        title: "KOTAN KIDS WYSOKIE ZWYCIĘSTWO ORLIKÓW",
        titleParts: {
            kotan: "KOTAN ",
            kids: { k: "K", i: "I", d: "D", s: "S" },
            rest: "WYSOKIE ZWYCIĘSTWO ORLIKÓW"
        },
        featured: false
    }
];

function ImageWithFallback({ src, fallback, alt, className }) {
    const handleError = (e) => {
        if (fallback && e.target.src !== fallback) {
            e.target.src = fallback;
        }
    };

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={handleError}
        />
    );
}

function NewsCard({ image, imageFallback, title, titleParts, category, featured, onClick }) {
    const renderTitle = () => {
        if (titleParts) {
            if (titleParts.kids) {
                // KOTAN KIDS special rendering
                return (
                    <div className="news-card-title">
                        <span className="title-kotan">{titleParts.kotan}</span>
                        <span className="title-kids-k">{titleParts.kids.k}</span>
                        <span className="title-kids-i">{titleParts.kids.i}</span>
                        <span className="title-kids-d">{titleParts.kids.d}</span>
                        <span className="title-kids-s">{titleParts.kids.s}</span>
                        <span className="title-rest"> {titleParts.rest}</span>
                    </div>
                );
            } else if (titleParts.girls) {
                // KOTAN GIRLS special rendering
                return (
                    <div className="news-card-title">
                        <span className="title-kotan">{titleParts.kotan}</span>
                        <span className="title-girls">{titleParts.girls}</span>
                        <span className="title-rest">{titleParts.rest}</span>
                    </div>
                );
            }
        }
        return <div className="news-card-title">{title}</div>;
    };

    return (
        <article
            onClick={onClick}
            className={`news-card ${featured ? 'news-card-featured' : ''}`}
        >
            <div className={`news-card-image-wrapper ${featured ? 'news-card-image-featured' : ''}`}>
                <ImageWithFallback
                    src={image}
                    fallback={imageFallback}
                    alt="News"
                    className="news-card-image"
                />
                <div className="news-card-overlay" />

                {/* Category Badge */}
                <div className="news-card-badge-wrapper">
                    <span className="news-card-badge">
                        {category}
                    </span>
                </div>

                {/* Read More */}
                <div className="news-card-read-more">
                    <div className="news-card-read-more-content">
                        <span>Czytaj więcej</span>
                        <ArrowRight className="news-card-arrow" />
                    </div>
                </div>
            </div>

            <div className="news-card-content">
                {renderTitle()}
            </div>
        </article>
    );
}

export default function NewsSection({ onNavigate }) {
    const handleNavigate = (section) => {
        if (onNavigate) {
            onNavigate(section);
        }
    };

    return (
        <section className="news-section">
            <div className="news-section-container">
                {/* Section Header */}
                <div className="news-section-header">
                    <h2 className="news-section-title">
                        Aktualności
                    </h2>
                    <p className="news-section-subtitle">
                        Najnowsze wiadomości z życia klubu
                    </p>
                </div>

                {/* News Grid */}
                <div className="news-grid">
                    {newsArticles.map((article) => (
                        <NewsCard
                            key={article.id}
                            image={article.image}
                            imageFallback={article.imageFallback}
                            category={article.category}
                            title={article.title}
                            titleParts={article.titleParts}
                            featured={article.featured}
                            onClick={() => handleNavigate('news-detail')}
                        />
                    ))}
                </div>

                {/* View All Button */}
                <div className="news-section-button-wrapper">
                    <button
                        onClick={() => handleNavigate('news')}
                        className="news-section-button"
                    >
                        <span>Zobacz wszystkie aktualności</span>
                        <ArrowRight className="news-section-button-icon" />
                    </button>
                </div>
            </div>
        </section>
    );
}