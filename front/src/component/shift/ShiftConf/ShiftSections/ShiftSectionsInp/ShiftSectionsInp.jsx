import './shiftSectionsInp.scss';
import { useEffect, useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import CheckBoxes2 from '../../../../utils/CheckBoxes2';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

const ShiftSectionsInp = ({ sect, ind, values, setValues }) => {

    const [type, setType] = useState(null);

    const handleChange = (e, sect, ind) => {
        const data = { ...values };
        data.roomsData[sect].sections[ind][e.target.name] = e.target.value;
        setValues(data);
    };

    const handleDeleteSect = (sect, ind) => {
        const data = { ...values };
        data.roomsData[sect].sections.splice(ind, 1);
        setValues(data);
    };

    const labels = values.days.map((day) => {
        const daysMapping = {
            monday: 'Lunes',
            tuesday: 'Martes',
            wednesday: 'Miércoles',
            thursday: 'Jueves',
            friday: 'Viernes',
            saturday: 'Sábado',
            sunday: 'Domingo',
        };
        return { title: daysMapping[day], _id: day };
    }).sort((a, b) => {
        const order = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
        return order.indexOf(a._id) - order.indexOf(b._id);
    });

    useEffect(() => {
        if (type?.selection.length > 0) {
            const data = { ...values };
            data.roomsData[ind].sections[type.index].days = type.selection;
            setValues(data);
        };
    }, [type]);

    const handleHour = (e, index) => {
        const data = { ...values };
        data.roomsData[ind].sections[index].hour = { ...data.roomsData[ind].sections[index].hour, [e.target.name]: e.target.value };
        setValues(data);
    };

    return (
        <div className='ShiftSectionsInp'>
            {sect.sections && sect.sections.map((sec, index) => (
                <div key={index} className='shiftSectionsSectKey'>

                    <div className='shiftSectionsDiv'>
                        <div className='shiftSectionsDivName'>
                            <label>Nombre de la sección</label>
                            <Tooltip title='Eliminar sección' placement='right'>
                                <DeleteForeverIcon className='shiftSectionsDivNameIcon' onClick={() => handleDeleteSect(ind, index)} />
                            </Tooltip>
                        </div>
                        <input type="text" name='title' value={values.roomsData[ind]?.sections[index]?.title || ''} placeholder='Nombre de la sección' onChange={(e) => handleChange(e, ind, index)} />
                        <p className='pgray'>Nombre de la sección ejemplo "Clases de canto".</p>
                    </div>

                    <div className='shiftSectionsDiv'>
                        <label>Horarios de la sección</label>
                        <div className='shiftSectionsDivINp'>
                            <label>Apertura</label>
                            <input type="time" name='startHour' onChange={(e) => handleHour(e, index)} style={{ width: '100px' }} value={values.roomsData[ind]?.sections[index]?.hour?.startHour || ''} required />
                        </div>
                        <div className='shiftSectionsDivINp'>
                            <label>Cierre</label>
                            <input type="time" name='endHour' onChange={(e) => handleHour(e, index)} style={{ width: '100px' }} value={values.roomsData[ind]?.sections[index]?.hour?.endHour || ''} required />
                        </div>
                        <p className='pgray'>Horario de la empresa {values.hour.startHour} - {values.hour.endHour}.</p>
                    </div>

                    <div className='shiftSectionsDiv'>
                        <label>Dias de la sección</label>
                        <div className='shiftSectionsDivCheckBoxes'>
                            <CheckBoxes2 labels={labels} setType={setType} multiselect={true} index={index} selecteds={values.roomsData[ind]?.sections[index]?.days || []} />
                        </div>
                    </div>

                    <div className='shiftSectionsDiv'>
                        <label>Precio de la sección</label>
                        <input type="number" name='price' placeholder='Precio en moneda local' onChange={(e) => handleChange(e, ind, index)} value={values.roomsData[ind]?.sections[index]?.price || ''} />
                    </div>

                    <div className='shiftSectionsDiv'>
                        <label>Máximo de personas en esta sección</label>
                        <input type="number" name='people' max={values?.abilityNumber} placeholder='Personas por sección' onChange={(e) => handleChange(e, ind, index)} value={values.roomsData[ind]?.sections[index]?.people || ''} />
                    </div>

                    <div className='line'></div>
                </div>
            ))}
        </div>
    );
};

export default ShiftSectionsInp;