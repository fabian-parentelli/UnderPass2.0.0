import './underBanner.scss';

const UnderBanner = ({ handleChange }) => {

    return (
        <div className='underBanner'>
            <textarea
                name="textBanner"
                placeholder='Lugar, evento, producto, etc'
                onChange={handleChange}
            ></textarea>
            <p>Danos una descripción de lo que quieres publicar.</p>
        </div>
    );
};

export default UnderBanner;