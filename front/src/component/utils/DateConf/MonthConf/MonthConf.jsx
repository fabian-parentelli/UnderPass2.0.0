import './monthConf.scss';

const MonthConf = ({ handleInputChange, init }) => {
    const months = [
        "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
        "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    return (
        <select className='monthConf' name="month" value={init || ''} onChange={(e) => handleInputChange(e)} required>
            <option value="" className='monthConfOp' disabled>Mes</option>
            {months.map((month, index) => (
                <option key={index} value={index}>{month}</option>
            ))}
        </select>
    );
};

export default MonthConf;