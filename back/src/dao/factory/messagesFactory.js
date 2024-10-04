import Messnews from "../manager/messnews.manager.js";
import MessProduct from "../manager/messproduct.manager.js";

class MessageFactory {
    static getManager(type) {
        switch (type) {
            case 'news':
                return new Messnews();
            case 'product':
                return new MessProduct();
            default:
                throw new Error(`No manager found for type: ${type}`);
        };
    };
};

export default MessageFactory;