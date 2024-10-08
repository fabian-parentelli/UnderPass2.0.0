import './NewsTableA.scss';
import CloudFile from '../../../utils/CloudFile/CloudFile';

const NewsTableA = ({ handleFileChange, archive }) => {

    return (
        <div className='NewsTableA'>
            <h3>Imagenes</h3>
            <p>Subir las imágenes dependiendo del video. Si existe un video subir solo dos imágenes, de lo contrario subir tres imágenes. Subir las imágenes por órden alfabetico.</p>
            {archive ?
                <CloudFile onChange={handleFileChange} folderName={`news/${archive}`} contClass='cfRect' />
                : <div style={{width: '250px', height: '250px'}}>
                    <p className='NewsTableAError'>Primero poner el nombre de la carpeta</p>
                </div>
            }
        </div>
    );
};

export default NewsTableA;