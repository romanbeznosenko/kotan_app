import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import './GenericCarousel.css'; // Custom CSS file

function GenericCarousel({ 
    components = [], 
    itemsPerSlide = 3, 
    autoSlide = true, 
    interval = 5000,
    showIndicators = true,
    showControls = true,
    title = null,
    className = ""
}) {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    // Group components into slides
    const groupComponents = (items, size) => {
        const groups = [];
        for (let i = 0; i < items.length; i += size) {
            groups.push(items.slice(i, i + size));
        }
        return groups;
    };

    const componentGroups = groupComponents(components, itemsPerSlide);

    // If no components provided, return empty div
    if (components.length === 0) {
        return <div className="generic-carousel-empty">No items to display</div>;
    }

    return (
        <div className={`generic-carousel-container ${className}`}>
            {title && (
                <h2 className="generic-carousel-title">
                    {title}
                </h2>
            )}
            <Carousel 
                activeIndex={index} 
                onSelect={handleSelect}
                interval={autoSlide ? interval : null}
                indicators={showIndicators}
                controls={showControls}
                className="generic-carousel"
            >
                {componentGroups.map((group, groupIndex) => (
                    <Carousel.Item key={groupIndex}>
                        <div className="generic-slide">
                            {group.map((component, componentIndex) => (
                                <div key={`${groupIndex}-${componentIndex}`} className="generic-item">
                                    {component}
                                </div>
                            ))}
                        </div>
                        {showIndicators && (
                            <Carousel.Caption className="generic-carousel-caption">
                                <p>
                                    Slide {groupIndex + 1} of {componentGroups.length}
                                </p>
                            </Carousel.Caption>
                        )}
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default GenericCarousel;
