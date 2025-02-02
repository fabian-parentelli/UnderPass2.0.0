import { shiftCustomerManager } from "../../manager/index.manager.js";

const getCustomer = async (preResult, data) => {

    if (data && preResult && preResult.length > 0) {

        for (const cust of preResult) {
            const customer = await shiftCustomerManager.getById(cust.shiftId.customer);
            cust.customerData = customer.customerUser;
        };
    };

    return preResult;
};

const getCustomerOne = async (user, result) => {

    if (user && (user._id === result.adminId)) {
        const customer = await shiftCustomerManager.getById(result.shiftId.customer);
        result.customerData = customer.customerUser;
    };

    return result;
};

export { getCustomer, getCustomerOne };