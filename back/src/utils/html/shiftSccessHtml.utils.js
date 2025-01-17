async function shiftSuccessHtml(shift, result) {

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
            <p>Felicidades, has agendado una reserva en <span class="highlight">${shift.dataConf.title}</span>.</p>
            <p>El número de reserva es <span class="highlight">${result._id}</span>.</p>
            ${!shift?.room
            ? '<p>En nuestro espacio principal.</p>'
            : `<p>En nuestro espacio <span class="highlight">${shift.room}</span>.</p>`
        }
            ${shift?.section ? `<p>En nuestra sección <span class="highlight">${shift.section}</span>.</p>` : ''}
            <div>
                <p>El día agendado es el <span class="highlight">${shift.day.day}</span> de <span class="highlight">${shift.day.month}</span> del <span class="highlight">${shift.day.year}</span>.</p>
                <p>La hora seleccionada es:</p>
                ${shift.hour.map(hour => `<p class="highlight">${hour}</p>`).join('')} 
            </div>
            <p>Dirección:</p>
            <p>${shift.dataConf.location.address}</p>
            <p>${shift.dataConf.location.city} - ${shift.dataConf.location.province}</p>
            <p>${shift.dataConf.location.country}</p>
        </body>
        </html>
    `;
    return email;
};

export { shiftSuccessHtml };