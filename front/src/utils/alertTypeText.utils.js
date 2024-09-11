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
        'default': () => { return 'otro' },
    };

    return (data[types] || data['default'])();
};

export default getTypeAlerts;