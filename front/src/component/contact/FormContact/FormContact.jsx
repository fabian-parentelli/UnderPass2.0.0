import './formContact.scss';

const FormContact = () => {

    return (
        <div className='formContact'>
            <div>
                <label>Nombre</label>
                <input type="text" />
            </div>
            <div>
                <label>Email</label>
                <input type="email" />
            </div>
        </div>
    );
};

export default FormContact;