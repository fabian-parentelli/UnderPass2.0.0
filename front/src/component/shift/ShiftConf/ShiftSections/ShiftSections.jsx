import './shiftSections.scss';
import Switch from '@mui/material/Switch';
import Tooltip from '@mui/material/Tooltip';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ShiftSectionsInp from './ShiftSectionsInp/ShiftSectionsInp';

const ShiftSections = ({ values, setValues }) => {

    const handleChecked = (e) => setValues({ ...values, isSection: e.target.checked });

    const addSectionToRoom = (index) => {
        const updatedRooms = values.roomsData.map((room, i) => {
            if (i === index) {
                return {
                    ...room,
                    sections: [...room.sections, { title: '', hour: {}, days: [], price: '', people: '' }],
                };
            };
            return room;
        });
        setValues({ ...values, roomsData: updatedRooms });
    };

    return (
        <details className='shiftSections'>
            <summary>Secciones</summary>

            <section>
                <div>
                    <label>¿Quieres agregar secciones?</label>
                    <div className='shiftSectionsSwitch'>
                        <p>NO</p>
                        <Switch checked={values.isSection || false} onChange={handleChecked} />
                        <p>SI</p>
                    </div>
                    <p className='pgray'>Las secciónes pueden ser clases, ejemplo clases de canto, clases de Guitarra.</p>
                </div>
            </section>

            <section style={{ marginTop: '1rem' }}>
                {values.isSection && values?.roomsData && values.roomsData.map((sect, ind) => (
                    <div key={ind}>
                        <div className='shiftSectionsName'>
                            <p className='colSH'>Sala {sect.name}</p>
                            <Tooltip title='Agregar secciones' placement='right' >
                                <AddBoxIcon className='colSH shiftSectionsIcon' onClick={() => addSectionToRoom(ind)} />
                            </Tooltip>
                        </div>
                        <ShiftSectionsInp sect={sect} ind={ind} values={values} setValues={setValues} />
                        <div className='line' style={{margin: '1rem 0'}}></div>
                    </div>
                ))}
            </section>

        </details>
    );
};

export default ShiftSections;