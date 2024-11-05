import './castAll.scss';
import { useState } from 'react';
import ImgUpload from '../../ImgUpload/ImgUpload';
import CharacterCounter from '../../../../utils/CharacterCounter';

const CastAll = ({ values, handleValues, setFiles, setValues }) => {

    const [cast, setCast] = useState([{}]);
    const addInput = () => setCast([...cast, {}]);

    return (
        <div className='castAll'>
            <h4>Elenco:</h4>

            <section className='castAllSection'>
                {cast.map((item, index) => (

                    <div key={index} className='castItem'>

                        <div className='castAllTitle'>
                            <input
                                type="text"
                                name={`castTitle_${index}`}
                                placeholder="Nombre"
                                onChange={handleValues}
                            />

                            <div>
                                <ImgUpload width={'200px'} height={'200px'} name={`castImg_${index}`} radius={'50%'} setFiles={setFiles} setValues={setValues} />
                            </div>
                        </div>

                        <div>
                            <textarea
                                style={{ height: '220px', width: '200px' }}
                                placeholder="Descripción"
                                name={`castText_${index}`}
                                onChange={handleValues}
                            />
                            <CharacterCounter min={290} max={310} text={values[`castText_${index}`]} />
                        </div>
                    </div>
                ))}
            </section>

            <p className='btn btnUS castAllButton' onClick={addInput}>Agregar Elenco</p>
        </div>
    );
};

export default CastAll;