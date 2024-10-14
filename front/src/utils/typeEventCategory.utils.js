function typeEventCategory(types) {
    
    const data = {
        'concert': () => { return 'Concierto' },
        'theater': () => { return 'Teatro' },
        'filmmaker': () => { return 'Filmmaker' },
        'standup': () => { return 'Stand Up' },
        'conference': () => { return 'conference' },
        'art': () => { return 'Artística' },
        'dance': () => { return 'Danza' },
        'other': () => { return 'Otro' },
    };

    return (data[types] || (() => types))();
};

export default typeEventCategory;