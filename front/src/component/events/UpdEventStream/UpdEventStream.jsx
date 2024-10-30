import './updEventStream.scss';
import { useState } from 'react';
import { Spinner } from 'faradaycomp';
import ClearIcon from '@mui/icons-material/Clear';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { updEventApi } from '../../../helpers/event/updEvent.api';

const UpdEventStream = ({ event, closedStream, events, setEvents }) => {

    const [link, setLink] = useState({ channel: '', link: '' });
    const [links, setLinks] = useState(event.links || []);
    const [loadin, setLoading] = useState(false);

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
        const response = await updEventApi({ _id: event._id, links: links })
        if (response.status === 'success') {
            const data = { ...events };
            const index = data.docs.findIndex(eve => eve._id == response.result._id);
            data.docs[index] = response.result;
            setEvents(data);
            closedStream();
        } else console.error(response.error);
        setLoading(false);
    };

    return (
        <div className='UpdEventStream'>
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
                    <AddBoxIcon className='eventStreamIcon colUE' onClick={handleAdd} />
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

            {loadin
                ? <Spinner color={'#383f84'} />
                : <button className='btn btnUE' onClick={handleConfirm}>Confirmar</button>
            }
        </div>
    );
};

export default UpdEventStream;