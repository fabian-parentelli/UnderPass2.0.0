import './messageVew.scss';
import { Tooltip } from '@mui/material';
import { Fragment, useEffect, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { getMessageByTypeIdApi } from '../../../helpers/message/getMessageByTypeId.api.js';
import ModalCustom from '../../utils/ModalCustom/ModalCustom.jsx';
import MessageReport from '../MessageReport/MessageReport.jsx';

const MessageVew = ({ type, typeId, messages, setMessages, user }) => {

    const [vew, setVew] = useState(null);
    const [open, setOpen] = useState(false);

    const closeModal = () => { setOpen(false); setVew(null) };
    const openModal = (id) => { setVew(id); setOpen(true) };

    useEffect(() => {
        const fetchData = async () => {
            const response = await getMessageByTypeIdApi(type, typeId);
            if (response.status === 'success') setMessages(response.result);
            else console.error(response.error);
        }; fetchData();
    }, []);

    return (
        <div className='messageVew'>
            {messages.length > 0 && messages.map((mes) => (
                <Fragment key={mes._id}>

                    <div className='messageVewDiv1'>
                        <div className='messageVewDiv'>
                            <img src={mes.userId.avatar[0]} alt="img" />
                            <div className='messageVewText'>
                                <p>{mes.text}</p>
                                <p>{mes.userId.name} - {new Date(mes.date).toLocaleDateString()}</p>
                            </div>
                        </div>

                        {user.logged &&
                            <Tooltip title='Denunciar' placement="top" onClick={() => openModal(mes._id)} >
                                <MoreVertIcon className='messageVewPoint' />
                            </Tooltip>
                        }
                    </div>

                    {vew === mes._id &&
                        <ModalCustom modalIsOpen={open} closeModal={closeModal}>
                            <MessageReport mes={mes} userId={user.data._id} type={type} />
                        </ModalCustom>
                    }
                </Fragment>
            ))}
        </div>
    );
};

export default MessageVew;