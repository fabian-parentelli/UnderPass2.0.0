import './dateConf.scss';
import DayConf from './DayConf/DayConf';
import { useEffect, useState } from 'react';
import MonthConf from './MonthConf/MonthConf';
import YearConf from './YearConf.jsx/YearConf';

const DateConf = ({ setValues, birthday, isRequired }) => {

    const [dates, setDates] = useState({ day: birthday?.day || '', month: birthday?.month || '', year: birthday?.year || '' });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDates({ ...dates, [name]: value });
    };

    useEffect(() => {
        const { day, month, year } = dates;
        if (day && month && year) {
            const fecha = new Date(year, month, day);
            setValues(prevState => ({ ...prevState, birthday: fecha }));
        };
    }, [dates]);

    return (
        <div className='dateConf'>
            <DayConf handleInputChange={handleInputChange} init={dates.day} isRequired={isRequired} />
            <MonthConf handleInputChange={handleInputChange} init={dates.month} isRequired={isRequired} />
            <YearConf handleInputChange={handleInputChange} init={dates.year} isRequired={isRequired} />
        </div>
    );

};

export default DateConf;