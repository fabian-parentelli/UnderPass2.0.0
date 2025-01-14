import './shiftDataUser.scss';
import { useEffect, useState } from 'react';

const ShiftDataUser = ({ setDataUser, user }) => {

    const [userData, setUserData] = useState(null);

    console.log(user);

    useEffect(() => {
        const query = {};
        if (user.name) query.name = user.name;
        if (user.email) query.email = user.email;
        if (user.phone) query.phone = user.phone;
        setDataUser(query);
        setUserData(query);
    }, [user]);

    const handleChangue = (e) => {
        setDataUser((preQuery) => ({
            ...preQuery, [e.target.name]: e.target.value
        }));
        setUserData((preQuery) => ({
            ...preQuery, [e.target.name]: e.target.value
        }));
    };

    return (
        <div className='shiftDataUser'>
            <h4>Datos del usuario</h4>
            {userData &&
                <section className='shiftDataUserSect'>

                    <div className='shiftDataUserDiv'>
                        <label>Nombre</label>
                        {userData.name
                            ? <p className='shiftDataUserInputP'>{userData.name}</p>
                            : <input type="text" name='name' placeholder='Completa este input' onChange={handleChangue} />
                        }
                    </div>

                    <div className='shiftDataUserDiv'>
                        <label>Teléfono</label>
                        <input type="text" name='phone' placeholder='Completa este input' value={userData?.phone} onChange={handleChangue} />
                    </div>

                    <div className='shiftDataUserDiv'>
                        <label>Email</label>
                        {userData?.email
                            ? <p className='shiftDataUserInputP'>{userData?.email}</p>
                            : <input type="text" name='email' placeholder='Completa este input' onChange={handleChangue} />
                        }
                    </div>

                    {!userData.name && <p className='shiftDataUserMessage'>Completa tu Nombre</p>}
                    {!userData.phone && <p className='shiftDataUserMessage'>Completa tu número de teléfono</p>}
                    {!userData.email && <p className='shiftDataUserMessage'>Completa tu email</p>}

                </section>
            }
        </div>
    );
};

export default ShiftDataUser;