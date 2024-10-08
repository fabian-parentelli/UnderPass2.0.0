import { walletRepository, userRepository } from "../repositories/index.repositories.js";
import { WalletNotFound } from "../utils/custom-exceptions.utils.js";

const newWallet = async (user) => {
    const isWallet = await walletRepository.getByUserId(user.userId);
    if (isWallet) throw new WalletNotFound('Ya existe una billetera para ese usuario');
    const result = await walletRepository.newWallet(user);
    if (!result) throw new WalletNotFound('No se puede crear la billetera');
    return { status: 'success', result };
};

const getByUserId = async (id) => {
    const result = await walletRepository.getByUserId(id);
    if (!result) throw new WalletNotFound('No se encuentra la billetera');
    const user = await userRepository.getUserById(id);
    if (!result) throw new WalletNotFound('No se encuentra el usuario');
    result.user = { name: user.name, email: user.email, imgUrl: user.avatar[0] };
    return { status: 'success', result };
};

const getMoneyByUserId = async (id) => {
    const data = await walletRepository.getByUserId(id);
    if (!data) throw new WalletNotFound('No se encuentra la billetera');
    const result = data.total;
    return { status: 'success', result };
};

const getWallets = async (page, limit, country, inWallet, reqMoney) => {
    const query = {};
    if (country) query.country = country;
    if (inWallet !== undefined) query.inWallet = inWallet;
    if (reqMoney !== undefined) query.reqMoney = reqMoney;
    const result = await walletRepository.getWallets(query, limit, page);
    if (!result) throw new WalletNotFound('no se encuentran las billeteras');
    return { status: 'success', result };
};

const updIsWallet = async (id, isWallet) => {
    const wallet = await walletRepository.getById(id);
    wallet.inWallet = isWallet.wallet;
    const result = await walletRepository.update(wallet);
    if (!result) throw new WalletNotFound('No se puede actualizar la configuración');
    return { status: 'success', result };
};

export { newWallet, getByUserId, getMoneyByUserId, getWallets, updIsWallet };