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
                        <textarea name="subText" className='newsTableRDivSub' placeholder='Encabezado' onChange={handleValues}></textarea>
                    </div>
                </div>
            </div>

            <div className='newsTableRDiv'>
                <label>Texto</label>
                <textarea name="text" className='newsTableRDivText' placeholder='Texto' onChange={handleValues}></textarea>
            </div>

            <div className='newsTableButtons'>
                <button className='btn btnD' >Enviar</button>
                <input
                    type="text" className='newsTableButtonsInput' placeholder='Video de youtube'
                    onChange={handleValues} name='video'
                    style={{ backgroundColor: '#a8b39c' }}
                />
            </div>

        </form>
    );
};

export default NewsTable;