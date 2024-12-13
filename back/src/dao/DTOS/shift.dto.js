import { shiftconfRepository } from "../../repositories/index.repositories.js";
import { formatText } from "../../utils/formatText.utils.js";
import { setHoursBack, transformDate } from '../../utils/servicesUtils/shift.utils.js';

const isNotTime = async (shift, day) => {

    let result = [];

    if (shift && shift.length > 0) {
        const config = await shiftconfRepository.getByUserId(shift[0].userId);
        let labels = setHoursBack(config.hour);
        const room = config.roomsData.filter(rom => formatText(rom.name) === shift[0].room)[0];
        const groupedByDay = shift.reduce((acc, curr) => {
            const key = transformDate(curr.day);
            if (!acc[key]) acc[key] = [];
            acc[key] = acc[key].concat(curr.hour);
            return acc;
        }, {});
        const fullDays = Object.entries(groupedByDay).reduce((result, [day, hours]) => {
            const availableHours = labels.map(label => label.title);
            const allHoursOccupied = availableHours.every(hour => hours.includes(hour));
            if (allHoursOccupied) result.push(day);
            return result;
        }, []);
        if (room && room.ability) result = filterDay(shift, day, room.abilityNumber, true);
        else result = filterDay(shift, day); 
        if (fullDays.length > 0) result.push({ notDay: fullDays });
    };
    return result;
};

const filterDay = (shifts, day, roomAbilityNumber = 0, hasAbility = false) => {
    if (shifts.length > 0) {
        const newResult = shifts.filter(sh => {
            const isCorrectDay = +sh.day.day === +day;
            if (hasAbility) {
                const totalHoursForDay = shifts
                    .filter(shift => +shift.day.day === +day)
                    .reduce((acc, shift) => acc + shift.hour.length, 0); 
                return isCorrectDay && totalHoursForDay >= roomAbilityNumber;
            };
            return isCorrectDay;
        });
        return newResult;
    };
    return shifts;
};

export { isNotTime, filterDay };

// Verificar si funciona que se elimine el día con todos los horarios completados 
// cuando exitse ability......