import {
    shiftconfRepository, shiftCustomerRepository, shiftRepository, alertsRepository
} from "../../../repositories/index.repositories.js";
import { ShiftNotFound } from "../../custom-exceptions.utils.js";
import { shiftSuspendHtml } from "../../html/shftSuspendHtml.utils.js";
import { sendEmail } from "../../../services/email.service.js";

const suspendByPanel = async (shift, user) => {

    shift.active = false;
    const updShift = await shiftRepository.update(shift);
    if (!updShift) throw new ShiftNotFound('Error al desactivar la resreva');

    const customer = await shiftCustomerRepository.getShiftCustomerById(shift.customer);
    if (!customer) throw new ShiftNotFound('No podemos accedera los datos del usuario');

    const config = await shiftconfRepository.getByUserId(shift.userId);
    if (!config) throw new ShiftNotFound('Error al acceder a los datos de la configuración');

    const emailTo = {
        to: customer.customerUser.email,
        subject: `Lamentamos tener que suspender tu reserva en ${config.title}`,
        html: await shiftSuspendHtml(shift, config.title, customer.customerUser.name)
    };
    const emailGo = await sendEmail(emailTo);
    if (!emailGo) throw new ShiftNotFound('Error al enviar el email al usuario');

    if (shift.isPay) {
        console.log('Es de pago');
        //  Es de pago ver que hago en esta parte..... trabajar
        //  Es de pago ver que hago en esta parte..... trabajar
        //  Es de pago ver que hago en esta parte..... trabajar
        //  Es de pago ver que hago en esta parte..... trabajar
    } else {

        const alert = await alertsRepository.newAlert({
            eventId: shift._id,
            userId: customer.customerUser._id,
            type: 'shiftSupend_notIsPay'
        });
        if (!alert) throw new ShiftNotFound('Error al crear una aleta para el usuario');
        return { status: 'success', result: 'Hemos eliminado la reserva' };
    };
};

export { suspendByPanel };