import './discography.scss';
import { useState } from 'react';
import ImgUpload from '../ImgUpload/ImgUpload';

const Discography = ({ formData, handleValues }) => {

    const [discs, setDiscs] = useState([{}]);
    const [sings, setSings] = useState([{}, {}, {}, {}]);

    const addDisc = () => setDiscs([...discs, {}]);
    const addInput = () => setSings([...sings, {}]);

    return (
        <div className='discography'>
            <h6>Discografía.</h6>

            <section>
                {discs.map((disc, index) => (
                    <div key={index}>
                        <ImgUpload width={'300px'} height={'300px'} name={`disc_${index}`} formData={formData} />
                        <div className='discographyInputs'>
                            <div className='discographyInputsDiv'>
                                {sings.map((sing, ind) => (
                                    <input
                                        type="text"
                                        placeholder='Url de spotify'
                                        name={`discUrl_${index}/${ind}`}
                                        onChange={handleValues}
                                    />
                                ))}
                            </div>
                            <p className='btn btnUS' onClick={addInput}>Agregar tema</p>
                        </div>
                    </div>
                ))}
            </section>

            <p className='btn btnUS btnDiscography' onClick={addDisc}>Agregar disco</p>
        </div>
    );
};

export default Discography;