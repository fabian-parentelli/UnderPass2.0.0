import './uploadAvatar.scss';
import { useState } from 'react';
import Load from '../../utils/Load';
import CloudFile from '../../utils/CloudFile/CloudFile';
import { useLoginContext } from '../../../context/LoginContext';
import { updImgAvatarApi } from '../../../helpers/users/updImgAvatar.api.js';
import HistoryAvatar from '../HistoryAvatar/HistoryAvatar.jsx';

const UploadAvatar = ({ id, setImage }) => {

    const [formData, setFormData] = useState(null);
    const [loading, setLoading] = useState(false);
    const { current } = useLoginContext();

    const handleFileChange = (data) => setFormData(data);

    const handlesubmit = async (e) => {
        e.preventDefault();
        if (formData) {
            setLoading(true);
            const response = await updImgAvatarApi(id, formData);
            if (response.status === 'success') {
                if (response.accesToken) {
                    localStorage.setItem('token', response.accesToken);
                    await current();
                } else setImage(response.result.avatar[0]);
            } else console.log(response);
            setLoading(false);
        };
    };

    return (
        <form className='uploadAvatar' onSubmit={handlesubmit}>

            <div className='uploadAvatarDiv'>
                <h2>Subir imagen</h2>
                <CloudFile onChange={handleFileChange} folderName='user' contClass='cfCircle' />
                <button className='btn btnA'>Subir imágen</button>
            </div>

            <div>
                <h2>Historica</h2>
                <HistoryAvatar id={id} setLoading={setLoading} setImage={setImage} />
            </div>

            <Load loading={loading} />
        </form>
    );
};

export default UploadAvatar;