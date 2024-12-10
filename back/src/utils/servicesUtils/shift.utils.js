const transformDate = (dateObj) => {

    const { day, month, year } = dateObj;
    
    const monthMap = {
        january: '01',
        february: '02',
        march: '03',
        april: '04',
        may: '05',
        june: '06',
        july: '07',
        august: '08',
        september: '09',
        october: '10',
        november: '11',
        december: '12',
    };

    return `${year}-${monthMap[month.toLowerCase()]}-${String(day).padStart(2, '0')}`;
};

const setHoursBack = (hour) => {

    if (!hour || !hour.startHour || !hour.endHour || !hour.fractionHour) {
        console.error("Faltan datos en 'hour':", hour);
        return [];
    };

    const toMinutes = (time) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };

    const toTimeString = (minutes) => {
        const adjustedMinutes = minutes % (24 * 60);
        const hours = Math.floor(adjustedMinutes / 60).toString().padStart(2, '0');
        const mins = (adjustedMinutes % 60).toString().padStart(2, '0');
        return `${hours}:${mins}`;
    };

    const start = toMinutes(hour.startHour);
    const end = toMinutes(hour.endHour) + (toMinutes(hour.endHour) < start ? 24 * 60 : 0);

    const labels = [];
    for (let time = start; time < end; time += hour.fractionHour) {
        const timeString = toTimeString(time);
        labels.push({ title: timeString, _id: timeString });
    };

    return labels;
};

export { transformDate, setHoursBack };