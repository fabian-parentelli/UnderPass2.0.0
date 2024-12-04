import './shiftSections.scss';
import Switch from '@mui/material/Switch';
import AddBoxIcon from '@mui/icons-material/AddBox';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ShiftSections = ({ values, setValues, handleValues }) => {

    const handleChecked = (e) => setValues({ ...values, isSection: e.target.checked });

    const addSectionToRoom = (index) => {
        const updatedRooms = values.roomsData.map((room, i) => {
            if (i === index) {
                return {
                    ...room,
                    sections: [...room.sections, { title: '', hour: {}, days: [], price: '' }],
                };
            };
            return room;
        });
        setValues({ ...values, roomsData: updatedRooms });
    };

    console.log(values);

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
                            <AddBoxIcon className='colSH shiftSectionsIcon' onClick={() => addSectionToRoom(ind)} />
                        </div>

                        <section className='shiftSectionsSect'>
                            {sect.sections && sect.sections.map((sec, index) => (
                                <div key={index}>
                                    <div className='shiftSectionsDiv'>
                                        <div className='shiftSectionsDivName'>
                                            <label>Nombre</label>
                                            <DeleteForeverIcon className='shiftSectionsDivNameIcon' />
                                        </div>
                                        <input type="text" name='title' placeholder='Nombre de la sección' />
                                        <p className='pgray'>Nombre de la sección ejemplo "Clases de canto".</p>
                                    </div>

                                </div>
                            ))}
                        </section>
                        <div className='line'></div>
                    </div>
                ))}
            </section>

        </details>
    );
};

export default ShiftSections;