import './preBody.scss';
import { useEffect, useState } from 'react';
import Flags from '../../../../component/utils/Flags/Flags';

const PreBody = ({ setCoutry }) => {

    const [selected, setSelected] = useState('');

    useEffect(() => {
        localStorage.setItem('country', selected);
        setCoutry(localStorage.getItem('country'));
    }, [selected]);

    return (
        <div className='preBody'>
            <div className='bodyCountryText'>
                <div>
                    <h2>Selecciona tu país</h2>
                    <Flags setSelected={setSelected} flag={["AR", "UY"]} />
                </div>
                <p>Bienvenido, selecciona tu país de origen, para poder ver los eventos que se encuentran cerca de vos.</p>
            </div>
            <img src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1720388702/images/ty7cylzqd8tfxiffqvo2.png" alt="img" />
        </div>
    );
};

export default PreBody;