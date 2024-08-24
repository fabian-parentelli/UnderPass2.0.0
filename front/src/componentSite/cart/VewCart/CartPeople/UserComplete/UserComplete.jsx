import './userComplete.scss';

const UserComplete = ({ user, setValues }) => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues(prevValues => ({
            ...prevValues, user: { ...prevValues.user, [name]: value }
        }));
    };

    return (
        <div className='userComplete'>
            {!user.location.address &&
                <input
                    type="text"
                    name='address'
                    placeholder='Dirección ej: calle 1234 apto 302'
                    onChange={handleChange}
                    required
                />
            }

            {!user.location.postalCode &&
                <input
                    type="text"
                    name='postalCode'
                    placeholder='Código postal'
                    onChange={handleChange}
                    required
                />
            }

            {!user.dni &&
                <input
                    type="text"
                    name='dni'
                    placeholder={user.location.country === 'UY' ? 'Cédula de identidad' : 'DNI'}
                    onChange={handleChange}
                    required
                />
            }
        </div>
    );
};

export default UserComplete;