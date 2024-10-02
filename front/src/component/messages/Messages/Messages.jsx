import './messages.scss';
import { useState } from 'react';
import MessageAdd from '../MessageAdd/MessageAdd';
import MessageVew from '../MessageVew/MessageVew';
import { useLoginContext } from '../../../context/LoginContext';
import MessageNotLogged from '../MessageNotLogged/MessageNotLogged';

const Messages = ({ type, typeId }) => {

    const { user } = useLoginContext();
    const [messages, setMessages] = useState([]);

    return (
        <div className='messages'>
            {!user.logged
                ? <MessageNotLogged typeId={typeId} />
                : <MessageAdd type={type} typeId={typeId} user={user.data} messages={messages} setMessages={setMessages} />
            }
            <MessageVew type={type} typeId={typeId} messages={messages} setMessages={setMessages} user={user} />
        </div>
    );
};

export default Messages;