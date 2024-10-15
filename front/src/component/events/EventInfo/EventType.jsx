import Switch from '@mui/material/Switch';

const EventType = ({ values, handleType, handleChangue }) => {

    return (
        <>
            <div>
                <label>Evento público</label>
                <div className='eventInfoTableFormSwitch'>
                    <p>No</p>
                    <Switch checked={values.typePublic} onChange={handleType} />
                    <p>Si</p>
                </div>
            </div>

            {!values.typePublic &&
                <div>
                    <label>Contraseña del evento</label>
                    <input type="text" name='password' onChange={handleChangue} value={values.password} required={!values.typePublic}/>
                </div>
            }
        </>
    );
};

export default EventType;