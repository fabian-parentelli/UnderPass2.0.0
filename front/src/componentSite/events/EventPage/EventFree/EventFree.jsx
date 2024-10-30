import './eventFree.scss';
import { useState } from 'react';
import { useLoginContext } from '../../../../context/LoginContext';

const EventFree = ({ event }) => {

    const { user } = useLoginContext();
    const [userData, setUserData] = useState({
        name: user.data?.name || '', dni: user.data?.dni || '', quantity: ''
    });

    const handleChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(userData);
        // Acá loguear con el listado de invitados
        // Acá loguear con el listado de invitados
        // Acá loguear con el listado de invitados
        // Acá loguear con el listado de invitados
        // Acá loguear con el listado de invitados
    };

    return (
        <div className='eventFree'>
            <img src="https://res.cloudinary.com/dtzy75wyt/image/upload/v1729948823/images/whwhsfgt5w3fpopdjdux.png" alt="img" />
            <div className='eventFreeData'>
                <p className='eventFreeTitle'>Evento gratuito !!</p>
                {event.ticketInfo.length > 0 &&
                    <form className='eventFreeUser' onSubmit={handleSubmit}>

                        {user.logged
                            ? <p>Selecciona el número de entradas</p>
                            : <div className='eventFreeInputs'>
                                <p>Solo debes registrarte</p>
                                <input type="text" placeholder='Nombre' name='name' onChange={handleChange} />
                                <input type="text" placeholder='Documento' name='dni' onChange={handleChange} />
                            </div>
                        }

                        <div className='eventFreeSlect'>
                            <select name="quantity" onChange={handleChange}>
                                <option value="">0</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                            </select>
                            <button
                                className='btn btnUE'
                                style={{ opacity: !(+userData.quantity > 0) || userData.name === '' || userData.dni === '' ? 0.5 : 1 }}
                                disabled={!(+userData.quantity > 0) || userData.name === '' || userData.dni === ''}
                            >
                                Confirmar
                            </button>
                        </div>
                    </form>
                }
            </div>
        </div>
    );
};

export default EventFree;