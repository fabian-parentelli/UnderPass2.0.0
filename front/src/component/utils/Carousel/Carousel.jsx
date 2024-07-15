import './carousel.scss';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Carousel = ({ items, interval = 4000 }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, interval);
        return () => clearInterval(slideInterval);
    }, [items.length, interval]);

    return (
        <div className="carousel">
            <div className="carousel__slide">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`carousel__item ${index === currentIndex ? 'carousel__item--active' : ''}`}
                    >
                        {item.links ? (
                            <Link to={`/${item.links}`}>
                                <img src={item.url} alt={`img${index}`} />
                            </Link>
                        ) : (
                            <img src={item.url} alt={`img${index}`} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;