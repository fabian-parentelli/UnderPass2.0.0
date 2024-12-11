import './shiftAlmanacDays.scss';

const ShiftAlmanacDays = ({ weeks, goToPreviousMonth, goToNextMonth, today, currentMonth, handleDayClick }) => {

    return (
        <div className="shiftAlmanacDays">
            <section className='shiftAlmanacDaysName'>
                <button onClick={goToPreviousMonth}>Anterior</button>
                <p>{currentMonth} {today.getFullYear()}</p>
                <button onClick={goToNextMonth}>Siguiente</button>
            </section>
            <table>
                <thead>
                    <tr>
                        <th>Dom</th>
                        <th>Lun</th>
                        <th>Mar</th>
                        <th>Mié</th>
                        <th>Jue</th>
                        <th>Vie</th>
                        <th>Sáb</th>
                    </tr>
                </thead>
                <tbody>
                    {weeks.map((week, weekIndex) => (
                        <tr key={weekIndex}>
                            {week.map((day, dayIndex) => (
                                <td key={dayIndex} className={day.className} onClick={() => handleDayClick(day)}>
                                    <div>{day.day}</div>
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShiftAlmanacDays;
