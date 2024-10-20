import './eventPanel.scss';
import { useState } from 'react';
import Load from '../../utils/Load';
import CreateEvent from '../CreateEvent/CreateEvent';
import EventPanelVew from './EventPanelVew/EventPanelVew';
import EventPanelNotVew from './EventPanelNotVew/EventPanelNotVew';

const EventPanel = ({ user }) => {

    const [vew, setVew] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleVew = (v) => setVew(vew === v ? null : v);

    return (
        <div className='eventPanel'>
            <div className='eventPanelButtons'>
                <button className='btn btnUE' onClick={() => handleVew('vew')}>Ver</button>
                <button className='btn btnUE' onClick={() => handleVew('new')}>Crear</button>
            </div>
            {vew === null && <EventPanelNotVew />}
            {vew === 'vew' && user && <EventPanelVew user={user} setLoading={setLoading} />}
            {vew === 'new' && user && <CreateEvent user={user} />}
            <Load loading={loading} />
        </div>
    );
};

export default EventPanel;