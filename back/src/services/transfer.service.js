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

const getTrasfer = async (confirm, user, page, country, type) => {
    const query = {};
    
    console.log(confirm);
    
    if (confirm !== undefined) query.confirm = confirm;
    if (user) query.userId = user;
    if (country) query.country = country;
    if (type) query.type = type;
    const result = await transferRepository.getTrasfer(query, page);
    if (!result) throw new TransferNotFound('No se puede encontrar el comprobante');
    return { status: 'success', result };
};

const updTransfer = async (imgUrl, data, id) => {
    const tranfer = await transferRepository.getById(id);
    if (!tranfer) throw new TransferNotFound('No se encuentra la transferencia');
    if (imgUrl) tranfer.imgUrl = imgUrl[0];
    if (data) {
        if (data.country) {
            tranfer.country = data.country;
            delete data.country;
        };
        tranfer.data = data;
    };
    const result = await transferRepository.updTransfer(tranfer);
    if (!result) throw new TransferNotFound('La actualización no se pudo realizar');
    return { status: 'success', result };
}

export { newTransfer, getTrasfer, updTransfer };