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
        { name: 'Taller Artes plásticas', value: 'rehearsalRoom' },
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

export { sitiesCategories, sitiesSubCategories };