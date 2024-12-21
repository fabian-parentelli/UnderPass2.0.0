import './shiftInputUser.scss';

const ShiftInputUser = ({ setDataUser }) => {

    const handleChangue = (e) => setDataUser((preQuery) => ({
        ...preQuery, [e.target.name]: e.target.value
    }));

    return (
        <div className='shiftInputUser'>
            <h6 className='pgray'>Completar los datos</h6>

            <section className='shiftInputUserSect'>
                <div>
                    <label>Nombre</label>
                    <input type="text" name='name' onChange={handleChangue} required />
                </div>

                <div>
                    <label>Teléfono</label>
                    <input type="phone" name='phone' onChange={handleChangue} />
                </div>

                <div>
                    <label>Email</label>
                    <input type="email" name='email' onChange={handleChangue} />
                </div>

            </section>
        </div>
    );
};

export default ShiftInputUser;