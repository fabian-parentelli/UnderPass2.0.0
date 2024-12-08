const typeShifts = [
    { value: 'rehearsal', type: 'Sala de ensayo' },
    { value: 'studio', type: 'Estudio' },
    { value: 'scenary', type: 'Escenario' },
    { value: 'academy', type: 'Academia' },
];

function typeShiftCategory(types) {

    const data = {
        'rehearsal': () => { return 'Sala de ensayo' },
        'studio': () => { return 'Estudio' },
        'scenary': () => { return 'Escenario' },
        'academy': () => { return 'Academia' },
    };

    return (data[types] || (() => types))();
};

export { typeShifts, typeShiftCategory };