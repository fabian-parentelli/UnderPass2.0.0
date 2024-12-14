const setHours = (hour) => {

    if (!hour || !hour.startHour || !hour.endHour) {
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

    let fractionHour = hour.fractionHour;
    if (!fractionHour) {
        fractionHour = (end - start);  
    };

    const labels = [];
    for (let time = start; time < end; time += fractionHour) {
        const timeString = toTimeString(time);
        labels.push({ title: timeString, _id: timeString });
    };

    return labels;
};

export { setHours };