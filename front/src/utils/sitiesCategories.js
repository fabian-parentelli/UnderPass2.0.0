const sitiesCategories = [
    { name: 'Arte', value: 'art' },
    { name: 'Comercio-venta', value: 'trade' },
    { name: 'Locales-reservas espacios', value: 'premises' },
    { name: 'Stream', value: 'stream' },
];

const sitiesSubCategories = {

    art: [
        { name: 'Agrupación musical', value: 'musicalGroup' },
        { name: 'Solista', value: 'solist' },
        { name: 'Obra de teatro', value: 'play' },
        { name: 'Unipersonal', value: 'only' },
        { name: 'Agrupación Danza', value: 'danceGroup' },
        { name: 'Bailarín', value: 'dancer' },
        { name: 'Filmaker', value: 'filmaker' },
        { name: 'Fotografo', value: 'photograph' },
        { name: 'Artes plasticas', value: 'plasticArts' },
    ],
    trade: [
        { name: 'Venta de insumos', value: 'shop' },
        { name: 'Teatro', value: 'theater' },
        { name: 'Bar, pub, restaurant', value: 'restaurant' },
        { name: 'Espacio cultural', value: 'culturalSpace' },
    ],
    premises: [
        { name: 'Sala de ensayo', value: 'rehearsalRoom' },
        { name: 'Taller Artes plásticas', value: 'plasticArtsRoom' },
        { name: 'Estudio de Grabación', value: 'recordingStudio' },
        { name: 'Estudio de Fotografía', value: 'photographyStudio' },
        { name: 'Teatro', value: 'theater' },
        { name: 'Bar, pub, restaurant', value: 'restaurant' },
    ],
    stream: [
        { name: 'En vivo', value: 'live' },
        { name: 'En vivo - Grupo', value: 'lives' },
        { name: 'Documentales', value: 'documental' },
        { name: 'Documentales - Grupo', value: 'documentals' },
        { name: 'Publicaciones', value: 'publication' },
        { name: 'Publicaciones - Grupo', value: 'publications' },
    ]
};

function typeSitesCategory(types) {

    const data = {
        'art': () => { return 'Arte' },
        'trade': () => { return 'Comercio-venta' },
        'premises': () => { return 'Locales-reservas espacios' },
        'stream': () => { return 'Stream Up' },
    };

    return data[types]();
};

function typeSitesSubCategory(types) {

    const data = {
        'musicalGroup': () => { return 'Agrupación musical' },
        'solist': () => { return 'Solista' },
        'play': () => { return 'Obra de teatro' },
        'only': () => { return 'Unipersonal' },
        'danceGroup': () => { return 'Agrupación Danza' },
        'dancer': () => { return 'Bailarín' },
        'filmaker': () => { return 'Filmaker' },
        'photograph': () => { return 'Fotografo' },
        'plasticArts': () => { return 'Artes plasticas' },

        'shop': () => { return 'Venta de insumos' },
        'theater': () => { return 'Teatro' },
        'restaurant': () => { return 'Bar, pub, restaurant' },
        'culturalSpace': () => { return 'Espacio cultural' },

        'rehearsalRoom': () => { return 'Sala de ensayo' },
        'plasticArtsRoom': () => { return 'Taller de arte' },
        'recordingStudio': () => { return 'Estudio de grabación' },
        'photographyStudio': () => { return 'Estudio de Fotografía' },

        'live': () => { return 'En Vivo' },
        'lives': () => { return 'En Vivo - Grupo' },
        'documental': () => { return 'Documentales' },
        'documentals': () => { return 'Documentales - Grupo' },
        'publication': () => { return 'Publicaciones' },
        'publications': () => { return 'Publicaciones - Grupo' },
    };

    return (data[types])();
};

export { sitiesCategories, sitiesSubCategories, typeSitesCategory, typeSitesSubCategory };