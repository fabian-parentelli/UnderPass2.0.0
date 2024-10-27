function typeEventCategory(types) {

    const data = {
        'concert': () => { return 'Concierto' },
        'theater': () => { return 'Teatro' },
        'filmmaker': () => { return 'Filmmaker' },
        'standup': () => { return 'Stand Up' },
        'conference': () => { return 'conferencia' },
        'art': () => { return 'Artística' },
        'dance': () => { return 'Danza' },
        'other': () => { return 'Otro' },
    };

    return (data[types] || (() => types))();
};

export default typeEventCategory;

export const eventCategorysArray = [
    { val: 'concert', name: 'Concierto' },
    { val: "theater", name: 'Teatro' },
    { val: 'filmmaker', name: 'Filmmaker' },
    { val: 'standup', name: 'Stand Up' },
    { val: 'conference', name: 'Conferencia' },
    { val: 'art', name: 'Artística' },
    { val: 'dance', name: 'Danza' },
    { val: 'other', name: 'Otro' },
]; 