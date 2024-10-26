import './eventStream.scss';
import { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { useLoginContext } from '../../../context/LoginContext';
import { updEventApi } from '../../../helpers/event/updEvent.api.js';
import UnderEventsLog from '../../fonts/UnderEventsLog/UnderEventsLog';

const EventStream = ({ values, setValues, setLoading, setProgres }) => {

    const [link, setLink] = useState({ channel: '', link: '' });
    const [links, setLinks] = useState(values.links || []);
    const { user } = useLoginContext();

    const hanldechange = (e) => setLink({ ...link, [e.target.name]: e.target.value });

    const handleAdd = () => {
        setLinks([...links, link]);
        setLink({ channel: '', link: '' });
    };

    const handleDetele = (index) => {
        const data = [...links];
        data.splice(index, 1);
        setLinks(data);
    };

    const handleConfirm = async () => {
        setLoading(true);
        const obj = {
            _id: values._id, links: links,
            location: {
                country: localStorage.getItem('country'),
                province: user.data.location.province,
                city: user.data.location.city
            }
        };
        const response = await updEventApi(obj);
        if (response.status === 'success') {
            setValues(response.result);
            setProgres(80);
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='eventStream'>
            <h3>Enlaces del evento.</h3>

            <div className='Inputss'>
                <select name="channel" value={link.channel} onChange={hanldechange}>
                    <option value="" disabled>Canal</option>
                    <option value="youtube">YouTube</option>
                    <option value="twitch">Twitch</option>
                    <option value="other">Otro</option>
                </select>
                <div className='eventStreamInput'>
                    <input type="text" name='link' placeholder='Link del evento' onChange={hanldechange} value={link.link || ''} />
                    <AddBoxIcon className='eventStreamIcon' onClick={handleAdd} />
                </div>
            </div>

            <div className='eventStreamTable'>
                <table>
                    <thead>
                        <tr>
                            <th>Links</th>
                            <th>Canal</th>
                            <th style={{ textAlign: 'right' }}>Elimninar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {links.length > 0 && links.map((lin, index) => (
                            <tr key={index}>
                                <td>{lin.link}</td>
                                <td>{lin.channel}</td>
                                <td
                                    onClick={() => handleDetele(index)}
                                    style={{ textAlign: 'right' }}
                                >
                                    <ClearIcon className='eventStreamTableIcon' />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <button className='btn btnUE' onClick={handleConfirm}>Confirmar</button>

            <div className='eventStreamButtons'>
                <button className='btn btnD' onClick={() => setProgres(40)}>{'< Imágnes'}</button>
                <button className='btn btnD' onClick={() => setProgres(80)}>{'Entradas >'}</button>
            </div>

            <UnderEventsLog size={3} />
        </div>
    );
};

export default EventStream;