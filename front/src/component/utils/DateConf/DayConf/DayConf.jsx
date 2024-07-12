import './dayConf.scss';

const DayConf = ({ handleInputChange, init }) => {

    const days = [];
    for (let day = 1; day <= 31; day++) {
        days.push(day);
    };

    return (
        <select className='dayConf' name="day" value={init || ''} onChange={handleInputChange} required>
            <option value="" disabled>Dia</option>
            {days.map((day, index) => (
                <option key={index} value={day}>{day}</option>
            ))}
        </select>
    );
};

export default DayConf;