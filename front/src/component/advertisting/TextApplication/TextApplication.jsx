import './textApplication.scss';

const TextApplication = ({ handleChange }) => {

    return (
        <div className='underBanner'>
            <textarea
                name="text"
                placeholder='Lugar, evento, producto, etc'
                onChange={handleChange}
            ></textarea>
            <p>Danos una descripción de lo que quieres publicar.</p>
        </div>
    );
};

export default TextApplication;