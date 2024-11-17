import './SiteUpdateAddCast.scss';
import { useState } from 'react';
import ImgUpload from '../../newSiteSeccion/ImgUpload/ImgUpload';
import CharacterCounter from '../../../utils/CharacterCounter';

const SiteUpdateAddCast = ({ values, handleValues, setFiles, setValues }) => {

    const [cast, setCast] = useState([{}]);
    const addInput = () => setCast([...cast, {}]);

    return (
        <div className='SiteUpdateAddCast'>

            {cast.map((item, index) => (

                <div key={index} className='castItem'>

                    <div className='castAllTitle'>

                        <input
                            type="text"
                            name={`castNewTitle_${index}`}
                            placeholder="Nombre"
                            onChange={handleValues}
                        />

                        <div>
                            <ImgUpload width={'150px'} height={'150px'} name={`castNewImg${index}`} radius={'50%'} setFiles={setFiles} setValues={setValues} />
                        </div>
                    </div>

                    <div className='SiteUpdateAddCastText'>
                        <textarea
                            style={{ height: '220px', width: '200px' }}
                            placeholder="Descripción"
                            name={`castNewText_${index}`}
                            onChange={handleValues}
                            className='textAreaUpd'
                        />
                        <CharacterCounter min={450} max={500} text={values[`castNewText_${index}`]} />
                    </div>
                </div>
            ))}
            <p className='btn btnUS SiteUpdateAddCastByu' onClick={addInput}>Agregar Elenco</p>
        </div>
    );
};

export default SiteUpdateAddCast;