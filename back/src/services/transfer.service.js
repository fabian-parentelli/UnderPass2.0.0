import { transferRepository } from "../repositories/index.repositories.js";
import { TransferNotFound } from '../utils/custom-exceptions.utils.js';

const newTransfer = async (imgUrl, data, { user }) => {
    if (imgUrl) data.imgUrl = imgUrl[0];
    if (data.type === 'write') {
        data.data = {
            operation: data.operation,
            accountHolder: data.accountHolder,
            bank: data.bank,
            dateData: data.date,
            total: data.total
        };
        delete data.operation;
        delete data.accountHolder;
        delete data.bank;
        delete data.date;
        delete data.total;
    };
    data.country = user.location.country;
    const result = await transferRepository.newTransfer(data);
    if (!result) throw new TransferNotFound('No se puede guardar el comprobante');
    return { status: 'success', result };
};

export { newTransfer };