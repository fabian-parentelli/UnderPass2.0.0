import { shiftRepository, alertsRepository } from "../../../repositories/index.repositories.js";
import { ShiftNotFound } from "../../custom-exceptions.utils.js";

const suspendByPanelUs = async (shift, user) => {

    shift.active = false;
    const updShift = await shiftRepository.update(shift);
    if (!updShift) throw new ShiftNotFound('Error al desactivar la resreva');

    if (shift.isPay) {
        console.log('Es de pago');
        //  Es de pago ver que hago en esta parte..... trabajar
        //  Es de pago ver que hago en esta parte..... trabajar
        //  Es de pago ver que hago en esta parte..... trabajar
        //  Es de pago ver que hago en esta parte..... trabajar
    } else {

        const alert = await alertsRepository.newAlert({
            eventId: shift._id,
            userId: shift.userId,
            type: 'shiftSupend_notIsPay'
        });
        if (!alert) throw new ShiftNotFound('Error al crear una aleta para el usuario');

        return { status: 'success', result: 'Hemos eliminado la reserva' };
    };
};

export { suspendByPanelUs };