const CharacterCounter = ({ min, max, text }) => {

    return (
        <div>
            <p
                style={{ fontSize: '12px', color: (text?.length < min || text?.length > max) ? 'red' : 'green' }}
            >
                {text?.length} caractreres
            </p>
            <p
                style={{ color: 'gray', fontSize: '10px' }}
            >Carcatres minimos: {min} - Carcatres Máximos: {max}</p>
        </div>
    );
};

export default CharacterCounter;