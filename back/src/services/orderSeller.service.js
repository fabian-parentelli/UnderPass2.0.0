import { orderSellerRepository, walletRepository } from "../repositories/index.repositories.js";
import { OrderSellerNotFound } from "../utils/custom-exceptions.utils.js";

const getToPay = async (page = 1) => {
    const user = { role: 'master' };
    const result = await orderSellerRepository.getOrders({ 'pay.payOut.isPayOut': false }, { limit: 12 }, { page: page }, user);
    if (!result) throw new OrderSellerNotFound('No se encuentran Ordenes de venta');
    const userSet = new Set();
    result.docs.forEach(ord => userSet.add(ord.sellerUserId));
    for (const userData of userSet) {
        const wallet = await walletRepository.getByUserId(userData);
        result.docs.forEach((ord) => {
            if (ord.sellerUserId == wallet.userId) ord.inWallet = wallet.inWallet;
        });
    };
    return { status: 'success', result };
};

const getOrders = async (page, limit, userid, active, payIn, payOut, id, { user }) => {
    const query = {};
    if (active !== undefined) query.active = active;
    if (userid) query.sellerUserId = userid;
    if (payIn !== undefined) query['pay.payIn.isPayIn'] = payIn === 'true' ? true : payIn === 'false' ? false : payIn;
    if (payOut !== undefined) query['pay.payOut.isPayOut'] = payOut === 'true' ? true : payOut === 'false' ? false : payOut;
    if (id) query._id = id;
    const result = await orderSellerRepository.getOrders(query, limit, page, user);
    if (!result) throw new OrderSellerNotFound('No se encuentran Ordenes de venta');
    return { status: 'success', result };
};

export { getToPay, getOrders };