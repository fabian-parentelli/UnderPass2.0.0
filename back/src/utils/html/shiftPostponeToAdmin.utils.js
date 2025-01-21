import env from '../../config/dotEnv.config.js'

async function shiftPostponeToAdminHTML(postpone, result) {

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
                        Notificación de Posponer una Reserva
                    </div>
                    <div class="content">
                        <span class="highlight">${postpone.shift.customerData.name}</span>, te ha enviado una propuesta de posponer una reserva.
                        <p>
                            En la fecha <span class="highlight">${new Date(result.date).toLocaleDateString()}</span>, has recibido una propuesta de posponer la reserva que has recibido el día <span class="highlight">${postpone.shift.day.day} - ${postpone.shift.day.month} - ${postpone.shift.day.year}</span> a las <span class="highlight">${postpone.shift.hour.join(' - ')}</span> horas.
                        </p>
                        <p>
                            En el salón <span class="highlight">${postpone.shift?.room || 'principal'}</span>, sección <span class="highlight">${postpone.shift?.sections || '**No sección**'}</span>.
                        </p>
                        <p>
                            <span class="highlight">${postpone.message}</span>
                        </p>
                        <p>
                            Por favor dirígete a nuestra plataforma para responder el mensaje.
                        </p>
                        <p>
                            N° de solicitud: <span class="highlight">${result._id}</span>
                        </p>
                    </div>

                    <a href=${env.frontUrl} target="_blank" style="display: inline-block; margin: 20px auto; text-align: center; background-color: #ec3639; color: white; text-decoration: none; padding: 10px 20px; font-size: 16px; font-weight: bold; border-radius: 5px; transition: background-color 0.3s;">
                        Ir a UnderPass
                    </a>


                    <div class="footer">
                        Solo recibirás este mensaje si la propuesta de posponer se da 24 horas antes de la reserva. Ojalá puedas cambiar la fecha; de lo contrario, el administrador tiene un plazo de 72 horas para devolver el dinero a UnderPass. UnderPass tiene un plazo medio de 24 horas para depositarlo en tu billetera.
                    </div>
                </div>
            </body>
            </html>

    `;
    return emailShift;
};

export { shiftPostponeToAdminHTML };