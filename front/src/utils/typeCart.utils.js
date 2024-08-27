function typeCart(type) {

    const typeCart = {
        'cards': () => { return 'Tarjeta publicitaria' },
        'product': () => { return 'Producto' },
        'banners': () => { return 'Banner publicitario' },
        'separator': () => { return 'Separador publicitario' },
        'events': () => { return 'Evento' },
        'shift': () => { return 'Turno' },
        'cardsMoreTime': () => { return 'Tarjeta más tiempo' },
        'separatorMoreTime': () => { return 'Separador más tiempo' },
        'default': () => { return type },
    };

    return (typeCart[type] || typeCart['deafult'])();
};

export default typeCart;