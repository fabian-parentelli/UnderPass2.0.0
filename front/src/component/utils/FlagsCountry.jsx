import flagsIcon from '../../utils/flagsIcon.utils';

const FlagsCountry = ({ country, whidt = 50 }) => {

    return (
        <>
            {country && <img style={{ width: `${whidt}px` }} src={country === 'UY' ? flagsIcon.uy : flagsIcon.ar} alt="flags" />}
        </>
    );
};

export default FlagsCountry;