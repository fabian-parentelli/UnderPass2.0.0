function getTypeAlerts(types) {
    
    const data = {
        'application_cards': () => { return 'Solicitud de Cards' },
        'application_banners': () => { return 'Solicitud de Banners' },
        'sold_product': () => { return 'Vendiste un producto' },
        'sold_events': () => { return 'Vendiste tickets' },
        'transfer_in': () => { return 'Recibiste una transferencia' },
        'transfer_confirm': () => { return 'Transferencia confirmada' },
        'havePay': () => { return 'Pago pendiente por hacer' },
        'youMoneyInWallet': () => { return 'Tienes dinero acreditado en tu billetera' },
        'payTranferToCustomer': () => { return 'Recibiste un deposito' },
        'success_pay': () => { return 'Pago exitoso' },
        'weHaveSeenYourRequest': () => { return 'Hemos visto tu solicitud' },
        'productInStock': () => { return 'El producto reservado ya tiene stock' },
        'newReport_news': () => { return 'Denunciaron un comentario - Noticia' },
        'newReport_product': () => { return 'Denunciaron un comentario - Producto' },
        'publicityOff': () => { return 'Fin de la publicidad' },
        'mapNoMatch': () => { return 'El mapa no coincide con la dirección' },
        'shiftPostpone': () => { return 'Solicitud de posponer una reserva' },
        'resShiftPostponeCA_notIsPay': () => { return 'Respuesta de posponer la solicitud'},
        'acceptUpdateDateShift': () => { return 'Han aceptado modificar la reserva.'},
        'shiftSupend_notIsPay': () => { return 'Han suspendia tu reserva.'},
        'default': () => { return 'otro' },
    };
    
    return (data[types] || data['default'])();
};

export default getTypeAlerts;