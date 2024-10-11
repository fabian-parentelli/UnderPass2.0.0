import './vewPresets.scss';
import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import BigImg from '../../../../../component/utils/BigImg/BigImg.jsx';
import { getPresetApi } from '../../../../../helpers/images/preset/getPresets.api.js';
import { activePresetApi } from '../../../../../helpers/images/preset/activePreset.api.js';

const VewPresets = ({ setLoading }) => {

    const [presets, setPresets] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const response = await getPresetApi();
            if (response.status === 'success') setPresets(response.result);
            else console.error(response.error);
            setLoading(false);
        }; fetchData();
    }, []);

    const handleActive = async (id) => {
        setLoading(true);
        const response = await activePresetApi(id);
        if (response.status === 'success') {
            const data = [...presets];
            const index = data.findIndex(p => p._id == response.result._id);
            data[index].active = response.result.active;
            setPresets(data);
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='vewPresets'>
            <table>
                <thead>
                    <tr>
                        <th>Imágen</th>
                        <th>Nombre</th>
                        <th>Active</th>
                    </tr>
                </thead>
                <tbody>
                    {presets && presets.map((pre) => (
                        <tr key={pre._id}>
                            <td>{<BigImg img={pre.img} border={false} />}</td>
                            <td>{pre.name}</td>

                            <td
                                onClick={() => handleActive(pre._id)}
                                className='vewPresetsBack'
                                style={{ color: pre.active ? 'green' : 'red' }}
                            >
                                <Tooltip title={pre.active ? 'Desactivar' : 'Activar'}>
                                    {pre.active ? 'SI' : 'NO'}
                                </Tooltip>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default VewPresets;