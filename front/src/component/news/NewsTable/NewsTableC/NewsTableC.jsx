import './newsTableC.scss';
import flagsIcon from '../../../../utils/flagsIcon.utils';
import SelectedProvince from '../../../utils/SelectedProvince';

const NewsTableC = ({ values, setValues, handleValues, setArchive }) => {

    return (
        <div className='newsTableC'>

            <div className='countryss'>
                <img className='btnFlags' src={flagsIcon.ar} alt="ar" onClick={() => setValues({ ...values, country: 'AR' })} />
                <img className='btnFlags' src={flagsIcon.uy} alt="uy" onClick={() => setValues({ ...values, country: 'UY' })} />
                {values.country && <p>{values.country}</p>}
            </div>

            {values.country &&
                <>
                    <div className='newsTableRDiv'>
                        <label>{values.country === 'UY' ? 'Departamento' : 'Provincia'}</label>
                        <SelectedProvince handleChange={handleValues} coun={values.country} />
                    </div>

                    <div className='newsTableRDiv'>
                        <label>Ciudad</label>
                        <input type="text" name='city' onChange={handleValues} required />
                    </div>

                    <div className='newsTableRDiv'>
                        <label>Título</label>
                        <input type="text" name='title' onChange={handleValues} required />
                    </div>

                    <div className='newsTableRDiv'>
                        <label>Carpeta</label>
                        <input type="text" onChange={(e) => setArchive(e.target.value)} />
                    </div>
                </>
            }
        </div>
    );
};

export default NewsTableC;