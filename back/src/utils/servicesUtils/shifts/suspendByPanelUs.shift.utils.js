import {
    shiftconfRepository, shiftCustomerRepository, shiftRepository, alertsRepository
} from "../../../repositories/index.repositories.js";
import { ShiftNotFound } from "../../custom-exceptions.utils.js";
import { shiftSuspendHtml } from "../../html/shftSuspendHtml.utils.js";
import { sendEmail } from "../../../services/email.service.js";

const suspendByPanelUs = async (shift, user) => {

    console.log(shift);
    
    
};

export { suspendByPanelUs };