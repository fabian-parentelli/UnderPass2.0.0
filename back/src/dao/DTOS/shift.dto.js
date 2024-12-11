import { shiftconfRepository } from "../../repositories/index.repositories.js";
import { setHoursBack, transformDate } from '../../utils/servicesUtils/shift.utils.js'

const isNotTime = async (shift, day) => {
    let result = [];
    if (shift) {
        const config = await shiftconfRepository.getByUserId(shift[0].userId);
        let labels = setHoursBack(config.hour);
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
        result = filterDay(shift, day);
        if (fullDays.length > 0) result.push({ notDay: fullDays });
    };
    return result;
};

const filterDay = (shifts, day) => {
    if (shifts.length > 0) {
        const newResult = shifts.filter(sh => +sh.day.day === +day);
        return newResult;
    };
    return shifts;
};

export { isNotTime, filterDay };