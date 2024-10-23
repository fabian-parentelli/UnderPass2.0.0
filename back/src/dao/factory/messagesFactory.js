import Messnews from "../manager/messnews.manager.js";
import MessProduct from "../manager/messproduct.manager.js";
import MessEvent from "../manager/messevent.manager.js";

class MessageFactory {
    static getManager(type) {
        switch (type) {
            case 'news':
                return new Messnews();
            case 'product':
                return new MessProduct();
            case 'event':
                return new MessEvent();
            default:
                throw new Error(`No manager found for type: ${type}`);
        };
    };
};

export default MessageFactory;