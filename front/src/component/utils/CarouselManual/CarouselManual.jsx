import './carouselManual.scss';
import { useState } from 'react';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

const CarouselManuel = ({ images }) => {

    const activeImages = images.filter(image => image.actives);

    if (activeImages.length === 0) {
        return <p>No hay imágenes activas para mostrar.</p>;
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? activeImages.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === activeImages.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <div className="carouselManuel">
            <div className="carouselManuel-slide">
                <img src={activeImages[currentIndex].imgUrl} alt="carouselManuel" />
            </div>
            <button className="carouselManuel-button prev" onClick={prevSlide}>
                <KeyboardArrowLeftIcon />
            </button>
            <button className="carouselManuel-button next" onClick={nextSlide}>
                <KeyboardArrowRightIcon />
            </button>
        </div>
    );
};

export default CarouselManuel;
