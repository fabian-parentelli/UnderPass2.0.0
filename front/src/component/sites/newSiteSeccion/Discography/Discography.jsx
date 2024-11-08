import './discography.scss';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import ImgUpload from '../ImgUpload/ImgUpload';
import CharacterCounter from '../../../utils/CharacterCounter';

const Discography = ({ handleValues, values, setFiles, setValues }) => {

    const [discs, setDiscs] = useState([{}]);
    const [sings, setSings] = useState([{}, {}, {}, {}]);

    const addDisc = () => setDiscs([...discs, {}]);
    const addInput = () => setSings([...sings, {}]);
    const handleDiscography = (e) => setValues({ ...values, isDiscography: e.target.checked });

    return (
        <div className='discography'>
            <h6>Discografía.</h6>
            <section className='discographySwitchSect'>
                <div className='discographySwitch'>
                    <p>NO</p>
                    <Switch value={values.isDiscography} onChange={handleDiscography} />
                    <p>SI</p>
                </div>
                <p className='discographypHelp'>Habilita material de Spotify</p>
            </section>

            {values.isDiscography &&
                <>
                    <p className='discographyPHelp'>Ayuda con la url de Spotify</p>
                    <section>
                        {discs.map((disc, index) => (
                            <div key={index}>
                                <div className='discographyDiv'>
                                    <ImgUpload width={'300px'} height={'300px'} name={`disc${index+1}`} setFiles={setFiles} setValues={setValues} />
                                    <div className='discographyInputs'>
                                        <input type="text" name={`discTitle_${index}`} placeholder='Título del album/ep' onChange={handleValues} style={{marginBottom: '1rem'}} required />
                                        <div className='discographyInputsDiv'>
                                            {sings.map((sing, ind) => (
                                                <input
                                                    key={ind}
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
                                <textarea
                                    name={`discText_${index}`}
                                    placeholder='Información sobre este mateial'
                                    onChange={handleValues}
                                    className='discographyTextArea'
                                ></textarea>
                                <CharacterCounter min={800} max={900} text={values[`discText_${index}`] || 0} />
                            </div>
                        ))}
                    </section>
                    <p className='btn btnUS btnDiscography' onClick={addDisc}>Agregar disco</p>
                </>
            }
        </div>
    );
};

export default Discography;