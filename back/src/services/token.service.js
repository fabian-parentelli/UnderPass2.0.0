import { userRepository, tokenRepository } from "../repositories/index.repositories.js";
import { TokenNotFound } from '../utils/custom-exceptions.utils.js';
import { isValidPassword } from "../utils/hashedPassword.utils.js";
import { v4 as uuidv4 } from 'uuid';
import { sendEmail } from './email.service.js';
import { recoverTokenHtml } from "../utils/html/recoverTokenHtml.utils.js";
import env from '../config/dotEnv.config.js';

const recoverToken = async (body, { user }) => {
    if (user.role !== 'user') {

        if (body.email !== user.email) throw new TokenNotFound('No coincide el usuario');
        const userDb = await userRepository.getUserById(user._id);
        if (body.email !== user.email) throw new TokenNotFound('Email incorrecto');
        const comparePassword = isValidPassword(userDb, body.password);
        if (!comparePassword) throw new TokenNotFound('La contraseña no es correcta');

        const token = await tokenRepository.getByUserId(user._id);
        if (!token) {
            const tok = { userId: user._id, userRole: user.role, password: '', pass: uuidv4() };
            const newToken = await tokenRepository.newToken(tok);
            if (!newToken) throw new TokenNotFound('No se puede guardar la contraseña');
            const url = `${env.frontUrl}/api/user/inter_token/${tok.pass}`;
            const emailTo = {
                to: user.email,
                subject: 'Clave Token',
                html: await recoverTokenHtml(url)
            };
            await sendEmail(emailTo);
            return { status: 'success' };
        } else {
            token.pass = uuidv4();
            const updToken = await tokenRepository.update(token);
            if (!updToken) throw new TokenNotFound('No se puede guardar la contraseña');
            const url = `${env.frontUrl}/api/user/inter_token/${token.pass}`;
            const emailTo = {
                to: user.email,
                subject: 'Clave Token',
                html: await recoverTokenHtml(url)
            };
            await sendEmail(emailTo);
            return { status: 'success' };
        };
    };
};

export { recoverToken };