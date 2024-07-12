import './vewVideosTut.scss';
import { useEffect, useState } from 'react';
import { getAllVideoTutApi } from '../../../../../helpers/images/getAllVideosTut.api.js';
import VideosVew from '../../../../../component/utils/VideosVew.jsx';
import { updActiveVideoApi } from '../../../../../helpers/images/updActiveVideo.api.js';

const VewVideosTut = ({ setLoading }) => {

    const [vidos, setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getAllVideoTutApi();
            if (response.status === 'success') setVideos(response.result);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleActive = async (id) => {
        setLoading(true);
        const response = await updActiveVideoApi({ id: id });
        if (response.status === 'success') {
            const resp = await getAllVideoTutApi();
            if (resp.status === 'success') setVideos(resp.result);
        };
        setLoading(false);
    };

    return (
        <div className="vewVideosTut">
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Título</th>
                        <th>Nombre</th>
                        <th>Activo</th>
                    </tr>
                </thead>
                <tbody>
                    {vidos && vidos.map((vid) => (
                        <tr key={vid._id}>
                            <td className='vewVideosTutVid'><VideosVew url={vid.url} /></td>
                            <td>{vid.title}</td>
                            <td>{vid.name}</td>
                            <td
                                className='vewVideosTutTD'
                                style={vid.active ? { color: 'green' } : { color: 'red' }}
                                onClick={() => handleActive(vid._id)}
                            >
                                <p>{vid.active ? 'Activo' : 'Inactivo'}</p>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VewVideosTut;