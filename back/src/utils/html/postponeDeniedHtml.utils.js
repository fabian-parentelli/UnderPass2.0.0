async function postponeDeniedHtml(shift) {

    return `
        <div style="
            background-color: #ec3639; 
            color: white; 
            padding: 15px; 
            border-radius: 5px; 
            font-size: 16px;
            font-weight: bold;
            text-align: center;
        ">
            <p>Lamentamos informarte que la reserva del dia ${shift.day.day}/${months.findIndex(m => m === shift.day.month) + 1}/${shift.day.year} ha sido suspendida. Como el pago no se realizó a través de nuestra plataforma, no podemos intervenir en el proceso de devolución. Por favor, coordina directamente con la persona o entidad correspondiente para gestionar el reembolso.</p>
            <p>Gracias por utilizar el módulo UnderShift de UnderPass.</p>
        </div>
    `;
};

export { postponeDeniedHtml };

const months = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
];