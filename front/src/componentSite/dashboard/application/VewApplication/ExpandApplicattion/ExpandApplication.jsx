import './expandApplication.scss';
import bannersCategory from '../../../../../utils/bannersCategory.utils';

const ExpandApplication = ({ app }) => {

    return (
        <div className='expandApplication'>
            <ul className='expandList'>
                <li><strong>Categoria:</strong> {bannersCategory(app.category)}</li>
                <li><strong>Días Comprados:</strong> {app.days}</li>
                <li><strong>Id:</strong> {app._id}</li>
                <li><strong>Texto:</strong> {app.text}</li>
                <li><strong>Carpeta Cloud:</strong> {app.folderName}</li>
                {app.img.map((im, index) => (
                    <li key={index}><strong>Img {index}:</strong> {im}</li>
                ))}
                <li style={{ margin: '.5rem 0' }}><button className='btn btnC'>Mensaje</button></li>
            </ul>
        </div>
    );
};

export default ExpandApplication;
