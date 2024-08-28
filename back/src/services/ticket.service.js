// import { publicityRepository } from "../repositories/index.repositories.js";
import * as postUnderPay from '../utils/tickets/postUnderPay.utils.js';
// import { PublicityNotFound } from '../utils/custom-exceptions.utils.js';

const newUnderPayTicket = async (ticket, { user }) => {
    const result = await postUnderPay.newTicket(ticket, user);
    console.log(result);

    //--------------------------------------------------------
    //  1- Aumentar la plata en treasure (tesoro) si es para underpasss el pago
    //  2- Disminuir la plata del usuario de su wallet
    //  3- Actualizar orden del Usuario comprador 
    //  4- Acutlizar orden Usuario Vendedor a que el pago fue recibido. Nada más.......
    //  5- Si falla que devuelva el stock si es producto, stock o lo que sea 
    //  6- Pensar si no falta nada devolver el result 
    //  7- Borrar el carrito en el front 

};

export { newUnderPayTicket };