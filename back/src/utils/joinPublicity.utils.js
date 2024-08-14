const joinPublicity = (products, publicity) => {

    const cards = publicity.filter(card => card.type === 'cards');
    const separators = publicity.filter(card => card.type !== 'cards');

    const result = [];
    const productCount = 2;
    let productIndex = 0;
    let cardIndex = 0;
    while (productIndex < products.length || cardIndex < cards.length) {
        for (let i = 0; i < productCount && productIndex < products.length; i++) {
            result.push(products[productIndex]);
            productIndex++;
        };
        if (cardIndex < cards.length) {
            result.push(cards[cardIndex]);
            cardIndex++;
        };
    };
    const updateResult = [];
    let separatorIndex = 0;
    for (let i = 0; i < result.length; i++) {
        updateResult.push(result[i]);
        if ((i + 1) % 8 === 0) {
            if (separatorIndex < separators.length) {
                updateResult.push(separators[separatorIndex]);
                separatorIndex = (separatorIndex + 1) % separators.length;
            };
        };
    };
    return updateResult;
};

export { joinPublicity };