import { shiftconfRepository } from "../../repositories/index.repositories.js";
import { setHoursBack, transformDate } from '../../utils/servicesUtils/shift.utils.js'

const isNotTime = async (shift) => {
    if (shift) {
        const config = await shiftconfRepository.getByUserId(shift[0].userId);
        let labels = setHoursBack(config.hour);
        shift.forEach((book) => {
            book.hour.forEach((hour) => {
                labels = labels.filter(lab => lab.title !== hour)
            });
        });
        if (labels.length === 0) {
            const notDay = transformDate(shift[0].day);
            shift.push({ notDay });
        };
    };    
    return shift;
};

// Acá tengo el problema, tengo que ver como detecto todo el mes, y no solo el día
// probablemente tengo que hacer una llamada doble a la base de datos, o puedo llamar 
// por mes y filtrar por día en el back.

export { isNotTime };