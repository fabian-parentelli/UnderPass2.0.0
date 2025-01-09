import { shiftconfRepository, shiftCustomerRepository } from "../../repositories/index.repositories.js";
import { formatText } from "../../utils/formatText.utils.js";
import { setHoursBack, transformDate } from '../../utils/servicesUtils/shift.utils.js';

const isNotTime = async (shift, day) => {

    let result = [];

    if (shift.length > 0) {
        const config = await shiftconfRepository.getByUserId(shift[0].userId);
        let labels = setHoursBack(config.hour);
        let room;
        if (shift[0].room) {
            room = config.roomsData.filter(rom => formatText(rom.name) === shift[0].room)[0];
            if (shift[0].sections) room = filterSections(room, shift);
        } else {
            room = config.roomsData[0];
            if (shift[0].sections) room = filterSections(room, shift);
        };

        let groupedByDay = shift.reduce((acc, curr) => {
            const key = transformDate(curr.day);
            if (!acc[key]) acc[key] = [];
            acc[key] = acc[key].concat(curr.hour);
            return acc;
        }, {});

        const fullDays = Object.entries(groupedByDay).reduce((result, [day, hours]) => {
            let availableHours;
            if (!room.ability) availableHours = labels.map(label => label.title);
            else {
                if (shift[0].sections) {
                    if (hours.length >= room.abilityNumber) availableHours = hours;
                } else {
                    if (hours.length >= (room.abilityNumber * labels.length)) availableHours = hours;
                };
            };
            if (availableHours) {
                const allHoursOccupied = availableHours.every(hour => hours.includes(hour));
                if (allHoursOccupied) result.push(day);
            };
            return result;
        }, []);
        if (room && room.ability) result = filterDay(shift, day, room.abilityNumber, true);
        else result = filterDay(shift, day);
        if (fullDays.length > 0) result.push({ notDay: fullDays });
    };
    return result;
};

const filterSections = (room, shift) => {
    const section = room.sections.find(sect => formatText(sect.title) === formatText(shift[0].sections));
    section.abilityNumber = section.abilityNumber || room.abilityNumber;
    section.ability = section.ability || room.ability;
    return section;
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

const getCustomer = async (shifts) => {
    for (const shift of shifts) {
        const customer = await shiftCustomerRepository.getShiftCustomerById(shift.customer);
        if (customer) shift.customerData = customer;
    };
    return shifts;
};

export { isNotTime, getCustomer };