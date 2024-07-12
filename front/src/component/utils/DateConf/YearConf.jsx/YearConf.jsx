import './yearConf.scss';

const YearConf = ({ handleInputChange, init }) => {

    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = 1950; year <= currentYear; year++) {
        years.push(year);
    };

    return (
        <select className='yearConf' name="year" value={init || ''} onChange={handleInputChange} required>
            <option value="" disabled>Año</option>
            {years.map((year, index) => (
                <option key={index} value={year}>{year}</option>
            ))}
        </select>
    );
};

export default YearConf;