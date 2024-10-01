import './updateNewsDas.scss';
import Switch from '@mui/material/Switch';
import CloudFile from '../../../../../component/utils/CloudFile/CloudFile';

const UpdateNewsDas = ({
    news, handleChange, handleActive, handleImg, handleFileChange, handleSumit }) => {

    return (
        <form className='updateNewsDas' onSubmit={handleSumit}>

            <div className='updateNewsDasTop'>
                <div className='updateNewsDasTopDiv'>
                    <div>
                        <label>Titulo</label>
                        <input type="text" name='title' value={news.title || ''} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Escrito por</label>
                        <input type="text" name='sign' value={news.sign || ''} onChange={handleChange} />
                    </div>
                    <div className='updateNewsDasTopDivHor'>
                        <label>Activo</label>
                        <Switch checked={!!news.active} onChange={handleActive} />
                    </div>
                    <div>
                        <label>Fecha</label>
                        <input type="date" name='date' onChange={handleChange} value={new Date(news.date).toISOString().slice(0, 10) || ''} />
                    </div>
                    <div>
                        <label>Carpeta de img</label>
                        <p>{news.folderName}</p>
                    </div>
                </div>

                <div className='updateNewsDasTopDiv'>
                    <div>
                        <label>Sitio web</label>
                        <input type="text" name='webSite' value={news.webSite || ''} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Instagrame</label>
                        <input type="text" name='instagrame' value={news?.instagrame || ''} onChange={handleChange} />
                    </div>
                    <div>
                        <label>Facebook</label>
                        <input type="text" name='facebook' value={news?.facebook || ''} onChange={handleChange} />
                    </div>
                    <div>
                        <label>X ex tweeter</label>
                        <input type="text" name='twetter' value={news?.twetter || ''} onChange={handleChange} />
                    </div>
                    <div>
                        <label>YouTube</label>
                        <input type="text" name='youtube' value={news?.youtube || ''} onChange={handleChange} />
                    </div>
                </div>
            </div>

            <div className='updateNewsDasVideo'>
                <label>Video de Youtube</label>
                <input type="text" name='video' value={news?.video || ''} onChange={handleChange} />
            </div>

            <div className='updateNewsDasVideo'>
                <label>Sub-texto</label>
                <textarea name='subText' value={news.subText} onChange={handleChange}></textarea>
                <p style={{ fontSize: '12px', color: news.subText.length > 140 ? 'red' : 'gray' }}
                >Caracteres: {news.subText.length}
                </p>
            </div>

            <div className='updateNewsDasText'>
                <label>Texto</label>
                <textarea name='text' value={news.text} onChange={handleChange}></textarea>
            </div>

            <div className='updateNewsDasTop'>
                <div className='updateNewsDasTopLocation'>
                    <label>Provincia/Departamento</label>
                    <input type="text" name='province' value={news.province || ''} onChange={handleChange} />
                </div>
                <div className='updateNewsDasTopLocation'>
                    <label>Ciudad</label>
                    <input type="text" name='city' value={news.city || ''} onChange={handleChange} />
                </div>
                <div className='updateNewsDasTopLocation'>
                    <label>Pais</label>
                    <select name="country" value={news.country} onChange={handleChange}>
                        <option value="UY">Uruguay</option>
                        <option value="AR">Argentina</option>
                    </select>
                </div>
            </div>

            <div className='updateNewsDasImgs'>
                {news && news.img.map((n, index) => (
                    <div key={index} className='updateNewsDasImg'>
                        <img src={n} alt="img" />
                        <p onClick={() => handleImg(n)}>Anular</p>
                    </div>
                ))}
            </div>

            <div className='updateNewsDasCloud'>
                <CloudFile onChange={handleFileChange} folderName={news.folderName} contClass='cfRect' />
                <button className='btn btnA'>Modificar</button>
            </div>

        </form>
    );
};

export default UpdateNewsDas;