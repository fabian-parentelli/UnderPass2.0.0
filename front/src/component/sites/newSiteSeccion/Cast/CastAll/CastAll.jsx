import './castAll.scss';
import { useState, useEffect } from 'react';
import Tooltip from '@mui/material/Tooltip';
import ImgUpload from '../../ImgUpload/ImgUpload';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import CharacterCounter from '../../../../utils/CharacterCounter';
import { deleteCastSiteApi } from '../../../../../helpers/sites/deleteCastSite.api.js';

const CastAll = ({ values, setFiles, setValues, setVew }) => {

    const [cast, setCast] = useState(values?.cast.length > 0 ? values.cast : [{ title: '', text: '' }]);
    const addInput = () => setCast([...cast, { title: '', text: '' }]);

    const handleValues = (e, index) => {
        const updatedCast = [...cast];
        updatedCast[index] = { ...updatedCast[index], [e.target.name]: e.target.value };
        setCast(updatedCast);
        setValues({ ...values, cast: updatedCast });
    };

    const handleDelete = async (index) => {
        const response = await deleteCastSiteApi({ index, id: values._id });
        if (response.status === 'success') {
            const updatedCast = cast.filter((_, i) => i !== index);
            const updatedValues = { ...values, cast: updatedCast };
            setValues(updatedValues);
            setCast(updatedCast);
            setVew(localStorage.getItem('to'))
        } else console.error(response.error);
    };

    useEffect(() => { 
        if(values.subCategory === 'musicalGroup' || values.subCategory === 'solist' ){
            localStorage.setItem('to', 'discography'); 
        } else localStorage.setItem('to', 'product');
    }, []);

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

                        <Tooltip title='Eliminar' placement="top">
                            <DeleteForeverIcon className='castAllSectionIcon' onClick={() => handleDelete(index)} />
                        </Tooltip>

                        <div className='line'></div>
                    </div>
                ))}
            </section>

            <p className='btn btnUS castAllButton' onClick={addInput}>Agregar Elenco</p>
            <div className='line castAllLine'></div>
        </div>
    );
};

export default CastAll;