import { shiftRepository, shiftPostponeRepository, alertsRepository, shiftCustomerRepository } from "../../../repositories/index.repositories.js";
import { ShiftNotFound } from "../../custom-exceptions.utils.js";

const updateDateShift = async (id, shift, user) => {

    const shiftDB = await shiftRepository.getById(id);
    if (!shiftDB) throw new ShiftNotFound('Error para encontrar la reserva en la base de datos');

    shiftDB.oldDate = shiftDB.day;
    shiftDB.oldHour = shiftDB.hour;

    shiftDB.hour = shift.hour;
    shiftDB.day = shift.day;
    if (shift.room) shiftDB.room = shift.room;
    if (shift.sections) shiftDB.sections = shift.sections;

    const result = await shiftRepository.update(shiftDB);
    if (!result) throw new ShiftNotFound('Error para actualizar la base de datos');

    const postponeDB = await shiftPostponeRepository.getByAdminId(shiftDB.userId, true, false);
    if (!postponeDB) throw new ShiftNotFound('Error para encontrar la propusta de posponer en BD');

    const postpone = postponeDB[0];
    postpone.shiftId = shiftDB._id;
    postpone.response = true;
    postpone.accept = true;
    postpone.resMessage = `El turno se ha modificado para el dia ${result.day.day}/${months.indexOf(result.day.month) + 1}/${result.day.year} - ${result.hour.join(' - ')}`;

    const updatePostpone = await shiftPostponeRepository.update(postpone);
    if (!updatePostpone) throw new ShiftNotFound('Error al guardar mesaje de la propuesta de posponer');

    let customer;
    if (user._id === shiftDB.userId) {
        customer = await shiftCustomerRepository.getShiftCustomerById(result.customer);
        if (!customer) throw new ShiftNotFound('Error al obtener datos del cliente');
    };

    const alert = await alertsRepository.newAlert({
        eventId: shiftDB._id,
        userId: user._id === shiftDB.userId ? customer?.customerUser?._id : shiftDB.userId,
        type: 'acceptUpdateDateShift'
    });
    if (!alert) throw new ShiftNotFound(`Error para enviar la alerta ${user._id === shiftDB.userId ? 'al usuario' : 'a el administrador'} `);

    return { status: 'success', result };
};

export { updateDateShift };

const months = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
];