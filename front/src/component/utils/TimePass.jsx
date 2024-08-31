import { useEffect, useState } from 'react';

const TimePass = ({ startDate }) => {

    const [hoursPassed, setHoursPassed] = useState(0);

    useEffect(() => {
        const calculateBusinessHours = () => {
            const start = new Date(startDate);
            const now = new Date();
            let totalHours = 0;
            for (let date = new Date(start); date <= now; date.setHours(date.getHours() + 1)) {
                const dayOfWeek = date.getDay();
                if (dayOfWeek !== 0 && dayOfWeek !== 6) totalHours += 1;
            };
            setHoursPassed(totalHours);
        };
        calculateBusinessHours();
    }, [startDate]);

    return (
        <>
            {hoursPassed}
        </>
    );
};

export default TimePass;
