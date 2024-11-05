import './castOnly.scss';
import ImgUpload from '../../ImgUpload/ImgUpload';
import CharacterCounter from '../../../../utils/CharacterCounter';

const CastOnly = ({ values, handleValues, setFiles, setValues }) => {

    return (
        <div className='castOnly'>

            <h6>Hablemos de vos:</h6>

            <section>

                <div>
                    <p className='castOnlyPhelp'>Te recomendamos subir una imágen vertical</p>
                    <ImgUpload width={'300px'} height={'450px'} name={'castImg'} setFiles={setFiles} setValues={setValues} />
                </div>

                <div>
                    <textarea
                        name='castPerson'
                        style={{ width: '300px', height: '100%' }}
                        onChange={handleValues}
                        placeholder="Hablemos de vos"
                    >
                    </textarea>
                    <CharacterCounter min={800} max={1000} text={values.castPerson} />
                </div>

            </section>
        </div>
    );
};

export default CastOnly;