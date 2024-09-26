function getTypeAlerts(types) {
    const data = {
        'application_cards': () => { return 'Solicitud de Cards' },
        'application_banners': () => { return 'Solicitud de Banners' },
        'sold_product': () => { return 'Vendiste un producto' },
        'transfer_in': () => { return 'Recibiste una transferencia' },
        'transfer_confirm': () => { return 'Transferencia confirmada' },
        'havePay': () => { return 'Pago pendiente por hacer' },
        'youMoneyInWallet': () => { return 'Tienes dinero acreditado en tu billetera' },
        'payTranferToCustomer': () => { return 'Recibiste un deposito' },
        'success_pay': () => { return 'Pago exitoso' },
        'weHaveSeenYourRequest': () => { return 'Hemos visto tu solicitud' },
        'productInStock': () => { return 'El producto reservado ya tiene stock' },
        'default': () => { return 'otro' },
    };

    return (data[types] || data['default'])();
};

export default getTypeAlerts;