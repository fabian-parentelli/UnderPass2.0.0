import { months } from "../servicesUtils/shift.utils.js";
import env from '../../config/dotEnv.config.js';

async function shiftSuspendHtml(shift, config, customer) {

    const emailShift = `
        <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body {
                    font-family: Arial, sans-serif;
                    margin: 0;
                    padding: 0;
                    background-color: #f9f9f9;
                    }
                    .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background: white;
                    border: 1px solid #e0e0e0;
                    border-radius: 8px;
                    overflow: hidden;
                    }
                    .header {
                    background-color: #ec3639;
                    color: white;
                    text-align: center;
                    padding: 20px 10px;
                    font-size: 18px;
                    font-weight: bold;
                    }
                    .content {
                    padding: 20px;
                    font-size: 16px;
                    color: #333;
                    line-height: 1.5;
                    }
                    .highlight {
                    color: #ec3639;
                    font-weight: bold;
                    }
                    .footer {
                    padding: 20px;
                    font-size: 12px;
                    color: #a0a0a0;
                    text-align: center;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <div class="header">
                        Notificación de Suspensión de Reserva
                    </div>
                    <div class="content">
                        Hola <span class="highlight">${customer}</span>,
                        <p>
                            Lamentamos informarte que la reserva que realizaste en <span class="highlight">${config}</span>, programada para el día <span class="highlight">${shift.day.day} - ${months.findIndex(d => d === shift.day.month) + 1} - ${shift.day.year}</span> a las <span class="highlight">${shift.hour.join(' - ')}</span> horas, ha sido suspendida.
                        </p>
                        <p>
                            En el salón <span class="highlight">${shift?.room || 'principal'}</span>, sección <span class="highlight">${shift?.sections || '**No sección**'}</span>.
                        </p>
                        <p>
                            Sabemos que esta situación puede ser inconveniente y te pedimos disculpas por ello. Si pagaste esta reserva a través de nuestra plataforma, te reembolsaremos el importe correspondiente en un plazo de 24 horas directamente en tu billetera de UnderPass. Si el pago fue externo a la plataforma, te sugerimos contactar directamente al organizador.
                        </p>
                        <p>
                            N° de solicitud: <span class="highlight">${shift._id}</span>
                        </p>
                    </div>

                    <a href=${env.frontUrl} target="_blank" style="display: inline-block; margin: 20px auto; text-align: center; background-color: #ec3639; color: white; text-decoration: none; padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 5px; transition: background-color 0.3s;">
                        Ir a UnderPass
                    </a>

                    <div class="footer">
                        Si tienes alguna duda o consulta, no dudes en ponerte en contacto con nuestro soporte. Agradecemos tu comprensión y esperamos poder ayudarte en futuras ocasiones.
                    </div>
                </div>
            </body>
            </html>

    `;
    return emailShift;
};

export { shiftSuspendHtml };
