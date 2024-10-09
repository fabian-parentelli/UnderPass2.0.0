import './eventVideoInput.scss';

const EventVideoInput = ({ video, setVideo }) => {

    const handleChangue = (e) => setVideo(e.target.value);

    return (
        <div className='eventVideoInput'>

            <h4>Sube un video promocional</h4>

            <div className='eventImagesVideo'>
                <label>Video promocional</label>
                <input
                    type="text"
                    placeholder='Ejemplo https://www.youtube.com/watch?v=d6RfiS15s3U'
                    onChange={handleChangue}
                    value={video || ''}
                />
                <p>Sube un video en donde promocionas el evento, no es obligatorio.</p>
            </div>

        </div>
    );
};

export default EventVideoInput;