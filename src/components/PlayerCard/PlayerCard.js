import "./PlayerCard.css";

// Placeholder image fallback
const DEFAULT_PLAYER_IMAGE = "https://images.unsplash.com/photo-1656407900470-05e57070903a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NjZXIlMjBwbGF5ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjAyNzMzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080";

function ImageWithFallback({ src, alt, className, fallback = DEFAULT_PLAYER_IMAGE }) {
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

export default function PlayerCard({ number, name, position, image, onClick }) {
    return (
        <div
            className="player-card"
            onClick={onClick}
        >
            <div className="player-card-image-wrapper">
                <ImageWithFallback
                    src={image}
                    alt={name}
                    className="player-card-image"
                />

                {/* Position Badge (optional) */}
                {position && (
                    <div className="player-card-position-badge">
                        {position}
                    </div>
                )}
            </div>

            <div className="player-card-info">
                <p className="player-card-text">
                    {number} | {name}
                </p>
            </div>
        </div>
    );
}