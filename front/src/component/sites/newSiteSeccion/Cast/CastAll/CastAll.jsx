import './castAll.scss';
import { useState } from 'react';
import ImgUpload from '../../ImgUpload/ImgUpload';
import CharacterCounter from '../../../../utils/CharacterCounter';

const CastAll = ({ values, setFiles, setValues }) => {

    console.log(values.cast);

    const [cast, setCast] = useState(values?.cast.length > 0 ? values.cast : [{ title: '', text: '' }]);
    const addInput = () => setCast([...cast, { title: '', text: '' }]);

    const handleValues = (e, index) => {
        const updatedCast = [...cast];
        updatedCast[index] = { ...updatedCast[index], [e.target.name]: e.target.value };
        setCast(updatedCast);
        setValues({ ...values, cast: updatedCast });
    };

    return (
        <div className='castAll'>
            <h4>Elenco:</h4>

            <section className='castAllSection'>
                {cast.map((item, index) => (

                    <div key={index} className='castItem'>

                        <div className='castAllTitle'>
                            <input
                                type="text"
                                name="title"
                                placeholder="Nombre"
                                value={values.cast[index]?.title || ''}
                                onChange={(e) => handleValues(e, index)}
                            />

                            <div>
                                <ImgUpload width={'200px'} height={'200px'} name={cast[index]?.title} radius={'50%'} setFiles={setFiles} img={values?.cast[index]?.img || ''} setValues={setValues} />
                            </div>
                        </div>

                        <div>
                            <textarea
                                style={{ height: '220px', width: '300px' }}
                                placeholder="Descripción"
                                name="text"
                                value={cast[index]?.text || ''}
                                onChange={(e) => handleValues(e, index)}
                            />
                            <CharacterCounter min={400} max={450} text={values[`castText_${index}`]} />
                        </div>
                    </div>
                ))}
            </section>

            <p className='btn btnUS castAllButton' onClick={addInput}>Agregar Elenco</p>
            <div className='line castAllLine'></div>
        </div>
    );
};

export default CastAll;