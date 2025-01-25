import { 
    shiftconfRepository, shiftCustomerRepository, shiftRepository, alertsRepository 
} from "../../../repositories/index.repositories.js"; 
import { ShiftNotFound } from "../../custom-exceptions.utils.js";
import { shiftSuspendHtml } from "../../html/shftSuspendHtml.utils.js";
import { sendEmail } from "../../../services/email.service.js";

const suspenBayPanelU = async (shift, user) => {

    shift.active = false;
    // const updShift = await shiftRepository.update(shift);
    // if(!updShift) throw new ShiftNotFound('No pudimos desactivar la resreva');

    const customer = await shiftCustomerRepository.getShiftCustomerById(shift.customer);
    if(!customer) throw new ShiftNotFound('No podemos accedera los datos del usuario');
    
    const config = await shiftconfRepository.getByUserId(shift.userId);
    if(!config) throw new ShiftNotFound('No podemos acceder a los datos de la configuración');

    const emailTo = {
        to: customer.customerUser.email,
        subject: `Lamentamos tener que suspender tu reserva en ${config.title}`,
        html: await shiftSuspendHtml(shift, config.title, customer.customerUser.name)
    };
    // const emailGo = await sendEmail(emailTo);
    // if(!emailGo) throw new ShiftNotFound('No pudimos enviar el email al usuario');
   

    if(shift.isPay) {
        console.log('Es de pago');
        
    } else {
        
        console.log('No es de pago');
        
    };
    

    // La alerta si es pago o no cambia .......
    
};

export { suspenBayPanelU };