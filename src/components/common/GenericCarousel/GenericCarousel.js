import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Match from '../../Match/Match';
import './GenericCarousel.css'; // Custom CSS file

const GenericCarousel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <div>
        <div className="main-content">
            <div className="carousel-wrapper">
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <Match />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Match />
                    </Carousel.Item>
                    <Carousel.Item>
                        <Match />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
        </div>

    );
};



export default GenericCarousel;
