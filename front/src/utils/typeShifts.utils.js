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

const monthMapping = {
    "january": 0,
    "february": 1,
    "march": 2,
    "april": 3,
    "may": 4,
    "june": 5,
    "july": 6,
    "august": 7,
    "september": 8,
    "october": 9,
    "november": 10,
    "december": 11
};

export { typeShifts, typeShiftCategory, monthMapping };