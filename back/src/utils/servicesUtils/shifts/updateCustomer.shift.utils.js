import { userRepository, customerRepository } from "../../../repositories/index.repositories.js";
import { ShiftNotFound } from "../../custom-exceptions.utils.js";

const updateCustomer = async (shift) => {

    const user = await userRepository.getByEmail(shift.customer.email);
    
    if (user) {

        if (!user.phone) {
            user.phone = shift.customer.phone;
            const result = await userRepository.update(user);
            if(!result) throw new ShiftNotFound('Error al actualizar datos del usuario');
        };

        shift.customer.customerUser = user._id;
    };

    let customer = await customerRepository.getShiftCustomerByEmail(shift.customer.email) || null;
    
    if (customer) {
        const userIdIncludes = customer.userId.includes(shift.userId);
        if (!userIdIncludes) customer.userId.push(shift.userId);
        const result = await customerRepository.update(customer);
        if(!result) throw new ShiftNotFound('Error al actualizar datos del cliente');

    } else {

        customer = await customerRepository.newCustomer({
            userId: [shift.userId],
            name: shift.customer.name,
            phone: shift.customer.phone,
            email: shift.customer.email,
            customerUser: shift.customer.customerUser || undefined
        });
        
    };
    return customer._id;
};

export { updateCustomer };