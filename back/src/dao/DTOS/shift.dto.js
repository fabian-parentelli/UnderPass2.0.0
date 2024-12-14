import { shiftconfRepository } from "../../repositories/index.repositories.js";
import { formatText } from "../../utils/formatText.utils.js";
import { setHoursBack, transformDate } from '../../utils/servicesUtils/shift.utils.js';

const isNotTime = async (shift, day) => {

    let result = [];

    if (shift && shift.length > 0) {
        const config = await shiftconfRepository.getByUserId(shift[0].userId);
        let labels = setHoursBack(config.hour);
        const room = config.roomsData.filter(rom => formatText(rom.name) === shift[0].room)[0];

        let groupedByDay = shift.reduce((acc, curr) => {
            const key = transformDate(curr.day);
            if (!acc[key]) acc[key] = [];
            acc[key] = acc[key].concat(curr.hour);
            return acc;
        }, {});

        if (room && room.ability) {
            Object.entries(groupedByDay).forEach(([day, hours]) => {
                const hourCounts = hours.reduce((acc, hour) => {
                    acc[hour] = (acc[hour] || 0) + 1;
                    return acc;
                }, {});
                const validHours = Object.entries(hourCounts)
                    .filter(([hour, count]) => count >= room.abilityNumber)
                    .flatMap(([hour]) => Array(hourCounts[hour]).fill(hour));
                if (validHours.length > 0) groupedByDay[day] = validHours;
                else delete groupedByDay[day];
            });
        };

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
        const groupedByHour = shifts.reduce((acc, shift) => {
            if (+shift.day.day === +day) {
                shift.hour.forEach(h => {
                    acc[h] = (acc[h] || 0) + 1;
                });
            }
            return acc;
        }, {});
        const newResult = shifts.filter(shift => {
            const isCorrectDay = +shift.day.day === +day;
            if (hasAbility) {
                return isCorrectDay && shift.hour.some(h => groupedByHour[h] >= roomAbilityNumber);
            }
            return isCorrectDay;
        });
        return newResult;
    };
    return shifts;
};

export { isNotTime, filterDay };