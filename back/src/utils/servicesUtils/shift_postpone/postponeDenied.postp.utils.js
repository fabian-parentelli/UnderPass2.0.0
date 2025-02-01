import {
    shiftRepository, alertsRepository, postponeRepository, customerRepository
} from "../../../repositories/index.repositories.js";
import { sendEmail } from "../../../services/email.service.js";
import { ShiftNotFound } from "../../custom-exceptions.utils.js";
import { postponeDeniedHtml } from "../../html/postponeDeniedHtml.utils.js";

const postponeDenied = async (postpone) => {

    let result;
    const { shiftId: shift, ...rest } = postpone;

    shift.active = false;
    const updateShift = await shiftRepository.update(shift);
    if (!updateShift) throw new ShiftNotFound('Error al desactivar el turno');

    rest.shiftId = shift._id;
    rest.response = true;
    rest.accept = false;
    if (!shift.isPay) rest.resMessage = 'Lamentamos informarte que la reserva ha sido suspendida. Como el pago no se realizó a través de nuestra plataforma, no podemos intervenir en el proceso de devolución. Por favor, coordina directamente con la persona o entidad correspondiente para gestionar el reembolso.'

    if (rest.to === 'customer') {

        if (shift.isPay) {
            // result = await shiftUtils.returnPay(shift, rest); 
            // trabajar
            // Trabjara con la devolución del dinero, a demás supongo que el mensaje cambia ....
            // rest.resMessage.
            return { result };
        };

        await alertsRepository.newAlert({
            eventId: rest._id,
            userId: rest.adminId,
            type: 'resShiftPostponeCA_notIsPay'
        });

    } else {

        if (shift.isPay) {
            // result = await shiftUtils.returnPay(shift, rest); 
            return { result };
        };

        const customer = await customerRepository.getById(shift.customer);
        if (!customer) throw new ShiftNotFound('Error al acceder a los datos del cliente');

        await alertsRepository.newAlert({
            eventId: rest._id,
            userId: customer.customerUser._id,
            type: 'resShiftPostponeCA_notIsPay'
        });

        const emailTo = {
            to: customer.customerUser.email,
            subject: `Lamentamos tener que suspender tu reserva, pero no podemos modificar la fecha`,
            html: await postponeDeniedHtml(shift)
        };
        await sendEmail(emailTo);
    };

    result = await postponeRepository.update(rest);
    if (!result) throw new ShiftNotFound('Error al deactivar la propuesta');
    return { result };

};

export { postponeDenied };