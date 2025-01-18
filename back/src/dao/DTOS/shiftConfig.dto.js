import { shiftconfManager } from '../manager/index.manager.js';
import { ShiftNotFound } from '../../utils/custom-exceptions.utils.js';

const updHolidaysDate = async (conf) => {
    if (conf.docs) {
        let docsResult = [];
        const documnets = [...conf.docs];
        for (const docs of documnets) {
            const result = await updHolidayforDay(docs);
            docsResult.push(result);
        };
        conf.docs = docsResult;
    } else {
        const result = await updHolidayforDay(conf);
        if (result) conf = result; 
    };
    return conf;
};

export { updHolidaysDate };

const updHolidayforDay = async (conf) => {
    if (conf.holidays && new Date() > new Date(conf.holidaysDate.holdaysOff)) {
        conf.holidays = false;
        conf.holidaysDate = {};
        const result = await shiftconfManager.update(conf);
        if (!result) throw new ShiftNotFound('No se puede actualizar las vacaciones de la configuración');
        return result;
    };
    return conf;
}; 