import './drawerBody.scss';
import { useEffect, useState } from 'react';
import Notes from '../Notes/Notes';
import Tooltip from '@mui/material/Tooltip';
import ChatIcon from '@mui/icons-material/Chat';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';
import NotificationsIcon from '@mui/icons-material/Notifications';

const DrawerBody = ({ vewDrawer, closed }) => {

    const [vew, setVew] = useState(null);
    useEffect(() => { if (!vewDrawer) setVew(null) }, [vewDrawer]);
    const handleVew = (name) => setVew(vew === name ? null : name);

    return (
        <div className='drawerBody'>

            <div className='drawerBodyIcons'>
                <Tooltip title='Correo'>
                    <EmailIcon className='drawerBodyIcon' onClick={() => handleVew('emal')} />
                </Tooltip>
                <Tooltip title='Notas'>
                    <DescriptionIcon className='drawerBodyIcon' onClick={() => handleVew('notes')} />
                </Tooltip>
                <Tooltip title='Alertas'>
                    <NotificationsIcon className='drawerBodyIcon' onClick={() => handleVew('alerts')} />
                </Tooltip>
                <Tooltip title='Chats'>
                    <ChatIcon className='drawerBodyIcon' onClick={() => handleVew('chats')} />
                </Tooltip>
            </div>

            {vew === 'notes' && <Notes />}
        </div>
    );
};

export default DrawerBody;