import { shiftconfRepository, alertsRepository, userRepository } from "../../../repositories/index.repositories.js";
import { shiftPostponeToUserHTML } from "../../html/shiftPostponeToUser.utils.js";
import { sendEmail } from "../../../services/email.service.js";
import { shiftPostponeToAdminHTML } from "../../html/shiftPostponeToAdmin.utils.js";
import { ShiftNotFound } from "../../custom-exceptions.utils.js";

const emailPostponer = async (postpone, result) => {

    if (postpone.to === 'customer') {
        const shiftConfig = await shiftconfRepository.getByUserId(postpone.shift.userId);

        const emailTo = {
            to: postpone.shift.customerData.email,
            subject: `Propuesta de posponer de parte de ${shiftConfig.title}`,
            html: await shiftPostponeToUserHTML(shiftConfig.title, postpone, result)
        };
        const emailCust = await sendEmail(emailTo);
        if (!emailCust) throw new ShiftNotFound('Error al enviar email de confirmación al cliente');

        const alertCut = await alertsRepository.newAlert({
            eventId: result._id,
            userId: postpone.shift.customerData.customerUser._id,
            type: 'shiftPostpone'
        });
        if (!alertCut) throw new ShiftNotFound('Error al enviar alerta de confirmación al cliente');

    } else {

        const user = await userRepository.getUserById(postpone.shift.userId);

        const emailTo = {
            to: user.email,
            subject: `Propuesta de posponer de parte de ${postpone.shift.customerData.name}`,
            html: await shiftPostponeToAdminHTML(postpone, result)
        };
        const emailAdmin = await sendEmail(emailTo);
        if (!emailAdmin) throw new ShiftNotFound('Error al enviar email de confirmación al administrador');

        const alertAdmin = await alertsRepository.newAlert({
            eventId: result._id,
            userId: postpone.shift.userId,
            type: 'shiftPostpone'
        });
        if (!alertAdmin) throw new ShiftNotFound('Error al enviar alerta de confirmación al administrador');

    };
    return { status: 'success' };
};

export { emailPostponer };