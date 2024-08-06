const joinPublicity = (products, publicity) => {
    const result = [];
    const productCount = 2;
    let productIndex = 0;
    let cardIndex = 0;
    while (productIndex < products.length || cardIndex < publicity.length) {
        for (let i = 0; i < productCount && productIndex < products.length; i++) {
            result.push(products[productIndex]);
            productIndex++;
        };
        if (cardIndex < publicity.length) {
            result.push(publicity[cardIndex]);
            cardIndex++;
        };
    };
    return result;
};

export { joinPublicity };