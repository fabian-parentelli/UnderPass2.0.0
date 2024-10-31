import './flap.scss';

const Flap = ({ vew, setVew }) => {

    return (
        <p className='flap' onClick={() => setVew(!vew)} >Dock</p>
    );
};

export default Flap;