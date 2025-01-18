import { months } from "../servicesUtils/shift.utils.js";

async function shiftSuccessHtml(shiftData, result) {
    
    const email = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>UnderPass - Email</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    line-height: 1.5;
                    color: #333;
                }
                h2 {
                    color: #ec3639;
                }
                p {
                    margin: 0.5em 0;
                }
                .highlight {
                    color: #ec3639;
                    font-weight: bold;
                }
            </style>
        </head>
        <body>
            <h2>Reserva de turno.</h2>
            <p>Felicidades, has agendado una reserva en <span class="highlight">${shiftData.dataConf.title}</span>.</p>
            <p><span class="highlight">${shiftData.customer.name}</span> el número de reserva es <span class="highlight">${result._id.toString()}</span>.</p>
            ${!shiftData?.room
            ? '<p>En nuestro espacio principal.</p>'
            : `<p>En nuestro espacio <span class="highlight">${shiftData.room}</span>.</p>`
        }
            ${shiftData?.section ? `<p>En nuestra sección <span class="highlight">${shiftData.section}</span>.</p>` : ''}
            <div>
                <p>El día agendado es: <span class="highlight">${shiftData.day.day}</span>/<span class="highlight">${months.findIndex(mon => mon === shiftData.day.month)+1}</span>/<span class="highlight">${shiftData.day.year}</span>.</p>
                <p>La hora seleccionada es:</p>
                ${shiftData.hour.map(hour => `<p class="highlight">${hour}</p>`).join('')} 
            </div>
            <p>Dirección:</p>
            <p>${shiftData.dataConf.location.address}</p>
            <p>${shiftData.dataConf.location.city} - ${shiftData.dataConf.location.province}</p>
            <p>${shiftData.dataConf.location.country === 'UY' ? 'Uruguay' : 'Argentina'}</p>
            <br/>
            <br/>
            <p>Gracias por utilizar el módulo <span class="highlight">UnderShift</span> de UnderPass.</p>
        </body>
        </html>
    `;
    return email;
};

export { shiftSuccessHtml };