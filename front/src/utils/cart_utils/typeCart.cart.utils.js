
const typeCart_caUtils = (type) => {
    
    const typeCart = {
        'cards': () => { return 'Tarjeta publicitaria' },
        'product': () => { return 'Producto' },
        'banners': () => { return 'Banner publicitario' },
        'separator': () => { return 'Separador publicitario' },
        'events': () => { return 'Evento' },
        'shift': () => { return 'Turno' },
        'cardsMoreTime': () => { return 'Tarjeta más tiempo' },
        'separatorMoreTime': () => { return 'Separador más tiempo' },
        'separatorToPortal': () => { return 'Separador en el portal' },
        'toPortal': () => { return 'Agregar a la portada' },
        'moreTime': () => { return 'Agregar más tiempo' },
        'shift': () => { return 'Turnos' },
        'default': () => { return type },
    };
    return (typeCart[type] || typeCart['default'])();
};

export { typeCart_caUtils };