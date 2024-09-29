import './newsTable.scss';
import { useState } from 'react';
import NewsTableA from './NewsTableA/NewsTableA';
import NewsTableB from './NewsTableB/NewsTableB';
import NewsTableC from './NewsTableC/NewsTableC';

const NewsTable = ({ values, setValues, handleValues, handleSubmit, handleFileChange }) => {

    const [archive, setArchive] = useState(null);

    return (
        <form className='newsTable' onSubmit={handleSubmit}>

            <div className='newsTableTop'>
                <NewsTableA handleFileChange={handleFileChange} archive={archive} />
                <div className='newsTableTopR'>
                    <div className='newsTableTopRTop'>
                        <NewsTableB values={values} handleValues={handleValues} />
                        <NewsTableC values={values} setValues={setValues} handleValues={handleValues} setArchive={setArchive} />
                    </div>
                    <div className='newsTableRDiv'>
                        <p className='countText'>Caracteres: {values.subText ? values.subText.length : 0}</p>
                        <textarea name="subText" className='newsTableRDivSub' placeholder='Encabezado 140 caracteres' onChange={handleValues}></textarea>
                    </div>
                </div>
            </div>

            <div className='newsTableButtons'>
                <input
                    type="text" name='sign' placeholder='Entrevistador' className='newsTableSign' onChange={handleValues}
                    required
                />
                <input
                    type="text" className='newsTableButtonsInput' placeholder='Video de youtube'
                    onChange={handleValues} name='video' required
                />
            </div>

            <div className='newsTableRDiv'>
                <label>Texto</label>
                <textarea name="text" className='newsTableRDivText' placeholder='Texto' onChange={handleValues}></textarea>
            </div>

            <button className='btn btnD' >Enviar</button>
        </form>
    );
};

export default NewsTable;