import './messageAdd.scss';
import { useState } from 'react';
import { newMessageApi } from '../../../helpers/message/newMessage.api.js';

const MessageAdd = ({ type, typeId, user, messages, setMessages }) => {

    const [value, setValue] = useState('');
    const country = localStorage.getItem('country');

    const handleChange = (e) => setValue(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await newMessageApi({ type, typeId, userId: user._id, text: value, country: country });
        if (response.status === 'success') {
            const comments = [...messages];
            const comment = response.result;
            comment.userId = { avatar: user.avatar, name: user.name, _id: user._id };
            comments.unshift(comment);
            setMessages(comments);
        } else console.error(response.error);
        setValue('');
    };

    return (
        <form className='messageAdd' onSubmit={handleSubmit}>

            <div className='messageAddDiv'>
                <img className='messageAddImg' src={user.avatar[0]} alt="img" />
                <input
                    type="text"
                    placeholder='Escribe un comentario'
                    className='messageAddInput'
                    value={value || ''}
                    onChange={handleChange}
                />
            </div>

            <div className='messageAddBottom'>
                <p className='messageAddP'>{user.name}, te pedimos que seas respetuoso y cumplas las normas de convivencia.</p>
                <button className='messageAddButton' disabled={!value.trim()}>Enviar</button>
            </div>
        </form>
    );
};

export default MessageAdd;