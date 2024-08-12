import './expandApplication.scss';
import { Link } from 'react-router-dom';
import BigImg from '../../../../../component/utils/BigImg/BigImg';
import bannersCategory from '../../../../../utils/bannersCategory.utils.js';
import { useLoginContext } from '../../../../../context/LoginContext.jsx';
import Copy from '../../../../../component/utils/Copy.jsx';

const ExpandApplication = ({ app }) => {

    const { user } = useLoginContext();

    return (
        <div className='expandApplication'>
            <ul className='expandList'>
                {app.category
                    ? <li><strong>Categoria:</strong>{bannersCategory(app.category)}</li>
                    : <li className='expandApplicationAppId'>
                        <p><strong>ApplicationId:</strong>{app.applicationId}</p>
                        <Copy values={app.applicationId} />
                    </li>
                }
                <li><strong>Días Comprados:</strong> {app.days || ''}</li>

                <li>
                    {user && user.data && user.data.role !== 'user' ? (
                        <Link to={`/dashboard/newpublicity/${app.userId.userId || ''}`} className='tdLink'>
                            <strong>Id:</strong> {app._id || ''}
                        </Link>
                    ) : (<p><strong>Id:</strong> {app._id || ''}</p>)}
                </li>

                <li><strong>Texto:</strong> {app.text || ''}</li>
                <li><strong>Carpeta Cloud:</strong> {app.folderName || ''}</li>
                {app.img && app.img.map((im, index) => (
                    <div key={index} >
                        <BigImg img={im} border={false} />
                        <li><strong>Img {index}:</strong> {im}</li>
                    </div>
                ))}
                <li style={{ margin: '.5rem 0' }}><button className='btn btnC'>Mensaje</button></li>
            </ul>
        </div >
    );
};

export default ExpandApplication;