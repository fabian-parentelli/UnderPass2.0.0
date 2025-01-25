import { transporter } from '../utils/nodeMailer.utils.js';

export const sendEmail = async (email) => {

    try {
        await transporter.sendMail({
            from: 'Cervecería Potter',
            to: email.to,
            subject: email.subject,
            html: email.html
        });
        return { status: 'success' };

    } catch (error) {
        console.error('Error enviando el email:', error);
        return { status: 'error' };
    };
};