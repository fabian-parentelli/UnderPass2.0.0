import Switch from '@mui/material/Switch';

const EventType = ({ values, handleType, handleChangue }) => {

    return (
        <>
            <div>
                <label>Evento público</label>
                <div className='eventInfoTableFormSwitch'>
                    <p>No</p>
                    <Switch checked={values.type} onChange={handleType} />
                    <p>Si</p>
                </div>
            </div>

            {!values.type &&
                <div>
                    <label>Contraseña del evento</label>
                    <input type="text" name='password' onChange={handleChangue} required={!values.type}/>
                </div>
            }
        </>
    );
};

export default EventType;