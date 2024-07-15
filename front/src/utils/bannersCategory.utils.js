function bannersCategory(en) {

    const category = {
        'us': () => { return 'nosotros' },
        'advertising': () => { return 'publicidad' },
        'events': () => { return 'eventos' },
        'sites': () => { return 'sitios web' },
        'products': () => { return 'productos' },
        'news': () => { return 'noticias' },
    };

    return (category[en])();
};

export default bannersCategory;