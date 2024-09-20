import { transferRepository, alertsRepository } from "../repositories/index.repositories.js";
import { TransferNotFound } from '../utils/custom-exceptions.utils.js';
import * as payTransfer from '../utils/transferUtils/paytransfer.utils.js';

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
    const alert = {
        eventId: result._id,
        userId: '668d9529cf8bde76a0dc3adb',
        type: 'transfer_in'
    };
    await alertsRepository.newAlert(alert);
    return { status: 'success', result };
};

const getTrasfer = async (confirm, user, page, country, type, id) => {
    const query = {};
    if (confirm !== undefined) query.confirm = confirm;
    if (user) query.userId = user;
    if (country) query.country = country;
    if (type) query.type = type;
    if (id) query._id = id;
    const result = await transferRepository.getTrasfer(query, page);
    if (!result) throw new TransferNotFound('No se puede encontrar el comprobante');
    return { status: 'success', result };
};

const confirm = async (id, { password }, { user }) => {
    const confUser = await payTransfer.confirmUser(password, user);
    if (!confUser) throw new TransferNotFound('No estas autorizado');
    const tranfer = await transferRepository.getById(id);
    tranfer.confirm = true;
    const result = await transferRepository.updTransfer(tranfer);
    if (!result) throw new TransferNotFound('No se puede confirmar la transferencia');
    await payTransfer.updOrderBuyer(tranfer);
    await payTransfer.updateCash();
    await payTransfer.updOrderBySeller(tranfer);
    await payTransfer.updApplication();
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
};

export { newTransfer, getTrasfer, confirm, updTransfer };