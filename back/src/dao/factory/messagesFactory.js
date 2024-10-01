import Messnews from "../manager/messnews.manager.js";

class MessageFactory {
    static getManager(type) {
        switch (type) {
            case 'news':
                return new Messnews();
            default:
                throw new Error(`No manager found for type: ${type}`);
        };
    };
};

export default MessageFactory;