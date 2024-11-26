import './castOnly.scss';
import { useEffect } from 'react';
import ImgUpload from '../../ImgUpload/ImgUpload';
import CharacterCounter from '../../../../utils/CharacterCounter';

const CastOnly = ({ values, setFiles, setValues }) => {

    const handleValues = (e) => setValues({ ...values, castPerson: { ...values.castPerson, text: e.target.value } });

    useEffect(() => {
        setValues({ ...values, post: 'castOnly' });
        if (values.subCategory === 'musicalGroup' || values.subCategory === 'solist') {
            localStorage.setItem('to', 'discography');
        } else localStorage.setItem('to', 'products');
    }, []);
    
    return (
        <div className='castOnly'>

            <h6>Hablemos de vos:</h6>

            <section>

                <div>
                    <p className='castOnlyPhelp'>Te recomendamos subir una imágen vertical</p>
                    <ImgUpload width={'300px'} height={'450px'} name={'castImg'} setFiles={setFiles} img={values?.castPerson?.img} setValues={setValues} />
                </div>

                <div>
                    <textarea
                        name='castPerson'
                        style={{ width: '300px', height: '100%' }}
                        onChange={handleValues}
                        placeholder="Hablemos de vos"
                        value={values?.castPerson?.text || ''}
                    >
                    </textarea>
                    <CharacterCounter min={800} max={1000} text={values.castPerson.text} />
                </div>

            </section>
        </div>
    );
};

export default CastOnly;