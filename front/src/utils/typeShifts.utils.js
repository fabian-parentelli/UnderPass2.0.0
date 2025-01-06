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

const daysOfWeek = [
    { _id: "monday", title: "Lunes" },
    { _id: "tuesday", title: "Martes" },
    { _id: "wednesday", title: "Miércoles" },
    { _id: "thursday", title: "Jueves" },
    { _id: "friday", title: "Viernes" },
    { _id: "saturday", title: "Sábado" },
    { _id: "sunday", title: "Domingo" },
];

const monthsArray = [
    "january",
    "february",
    "march",
    "april",
    "may",
    "june",
    "july",
    "august",
    "september",
    "october",
    "november",
    "december"
];

function monthsArraySpanish(types) {
    
    const data = {
        'january': () => { return 'Enero' },
        'february': () => { return 'Febrero' },
        'march': () => { return 'Marzo' },
        'april': () => { return 'Abril' },
        'may': () => { return 'Mayo' },
        'june': () => { return 'Junio' },
        'july': () => { return 'Julio' },
        'august': () => { return 'Agosto' },
        'september': () => { return 'Septiembre' },
        'october': () => { return 'Octubre' },
        'november': () => { return 'Noviembre' },
        'december': () => { return 'Diciembre' },
    };

    return (data[types] || (() => types))();
};

function daysOfWeekTable(types) {

    const data = {
        'monday': () => { return 'Lunes' },
        'tuesday': () => { return 'Martes' },
        'wednesday': () => { return 'Miercoles' },
        'thursday': () => { return 'Jueves' },
        'friday': () => { return 'Viernes' },
        'saturday': () => { return 'Sábado' },
        'sunday': () => { return 'Domingo' },
    };

    return (data[types] || (() => types))();
};

export {
    typeShifts, typeShiftCategory, monthMapping, daysOfWeek, daysOfWeekTable, monthsArray, monthsArraySpanish
};