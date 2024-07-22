import { userRepository } from "../repositories/index.repositories.js";
import { UserNotFound } from '../utils/custom-exceptions.utils.js';
import { createHash, isValidPassword } from '../utils/hashedPassword.utils.js';
import { sendEmail } from './email.service.js';
import { registerSuccess } from '../utils/html/registerSuccess.utils.js';
import { generateToken, passwordToken } from '../utils/jwt.utils.js';
import { v4 as uuidv4 } from 'uuid';
import { recoverPassword_HTML } from '../utils/html/recoverPassword.utils.js';
import env from '../config/dotEnv.config.js';

const register = async (user, imagesUrl) => {
    const exists = await userRepository.getByEmail(user.email);
    if (exists) throw new UserNotFound('El usuario ya se encuentra registrado');
    user.password = createHash(user.password);
    delete user.folderName;
    if (imagesUrl.length === 0) imagesUrl = ['https://res.cloudinary.com/dtzy75wyt/image/upload/v1720397419/avatars/efiifldfknz2z8zfeezl.png'];
    user.avatar = imagesUrl;
    user.location = {
        country: user.country,
        province: user.province,
        city: user.city
    };
    delete user.country;
    delete user.province;
    delete user.city;
    user.birthday = new Date(user.birthday);
    const result = await userRepository.register(user);
    if (!result) throw new UserNotFound('No se puede registrar al usuario');
    const emailTo = {
        to: user.email,
        subject: 'Registro exitoso',
        html: await registerSuccess(result)
    };
    await sendEmail(emailTo);
    const accesToken = generateToken(result);
    return { status: 'success', accesToken };
};

const login = async (user) => {
    const userDb = await userRepository.getByEmail(user.email);
    if (!userDb) throw new UserNotFound('El Usuario no se encuentra');
    const comparePassword = isValidPassword(userDb, user.password);
    if (!comparePassword) throw new UserNotFound('La contraseña es incorrecta');
    if (!userDb.active) throw new UserNotFound('Error de permisos, comunícate con nosotros');
    delete userDb.password;
    const accesToken = generateToken(userDb);
    return { status: 'success', accesToken };
};

const recoverPassword = async ({ email }) => {
    const user = await userRepository.getByEmail(email);
    if (!user) throw new UserNotFound('Email incorrecto');
    user.passId = uuidv4();
    await userRepository.update(user);
    user.recoverPassword = `http://localhost:9000/api/user/inter_pass/${user.passId}`;
    const emailTo = {
        to: user.email,
        subject: 'Recuperar contraseña',
        html: await recoverPassword_HTML(user.recoverPassword)
    };
    await sendEmail(emailTo);
    return { status: 'success' };
};

const current = (user) => {
    const newUser = { ...user };
    return newUser;
};

const interPass = async (id) => {
    const user = await userRepository.getByIdPass(id);
    if (!user) throw new UserNotFound('Usuario no encontrado');
    const tokenPass = passwordToken(user.email);
    const url = `${env.frontUrl}/password/${tokenPass}`;
    return url;
};

const getUserById = async (id) => {
    const result = await userRepository.getUserById(id);
    if (!result) throw new UserNotFound('Usuario no encontrado');
    delete result.password;
    return { status: 'success', result };
};

const getAllUsers = async (user) => {
    const query = user.role === 'master' ? {} : { role: { $ne: 'master' } };
    const result = await userRepository.getAllUsers(query);
    if (!result) throw new UserNotFound('No encontramos usuarios');
    return { status: 'success', result };
};

const sekker = async (user) => {
    const query = user.role === 'master' ? {} : { role: { $ne: 'master' } };
    const users = await userRepository.getAllUsers(query);
    if (!users) throw new UserNotFound('No encontramos usuarios');
    const result = users.map((us) => {
        return { label: us.name, country: us.location.country, _id: us._id };
    });
    return { status: 'success', result };
};

const newPassword = async ({ password: newPassword }, { user: email }) => {
    const user = await userRepository.getByEmail(email);
    if (!user) throw new UserNotFound('usuario no encontrado');
    const comparePassword = isValidPassword(user, newPassword);
    if (comparePassword) throw new UserNotFound('No es valida es contraseña');
    const hasPass = createHash(newPassword);
    user.password = hasPass;
    user.passId = '';
    const result = await userRepository.update(user);
    if (!result) throw new UserNotFound('La contraseña nueva no se puede guardar');
    delete user.password;
    if (user.passId) delete user.passId;
    if (user.financeData) delete user.financeData;
    return { status: 'success', user };
};

export {
    register, login, current, recoverPassword, interPass,
    getAllUsers, sekker, newPassword, getUserById
};