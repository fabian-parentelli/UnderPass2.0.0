import './shiftOnlyRooms.scss';
import ShiftHours from '../ShiftHoursConf/ShiftHoursConf';

const ShiftOnlyRooms = ({ config, setType, book, sections, setSections }) => {

    const handleSect = (e) => {
        const title = e.target.value;
        const sect = config.roomsData[0].sections.find(sect => sect.title === title);
        setSections(sect);
    };
    
    return (
        <div className='shiftOnlyRooms'>

            {config.roomsData[0].sections.length > 0 &&
                <section>
                    <label>Secciones</label>
                    <select onChange={handleSect}>
                        <option value="">Secciones</option>
                        {config.roomsData[0].sections.map((sect, ind) => (
                            <option key={ind} value={sect.title}>{sect.title}</option>
                        ))}
                    </select>
                </section>
            }
            {(config.roomsData[0].sections.length > 0 && !sections)
                ? <p style={{ color: 'green', marginTop: '1rem' }}>No hay nada seleccionado</p>
                : (config.roomsData[0].sections.length === 0 && !sections
                    ? <ShiftHours hour={config.hour} setType={setType} book={book} />
                    : (config.roomsData[0].sections.length > 0 && sections
                        ? <ShiftHours hour={sections.hour} setType={setType} book={book} />
                        : <p style={{ color: 'green', marginTop: '1rem' }}>No hay nada seleccionado</p>
                    )
                )
            }
            
            {config.roomsData[0].sections.length === 0 && !sections &&
                <p className='pgray'>El turno tiene una duración de <span className='colSH'>{config?.hour?.fractionHour}</span> minutos.</p>
            }
        </div>
    );
};

export default ShiftOnlyRooms;