import MessageFactory from "../dao/factory/messagesFactory.js";

export default class MessageRepository {

    newMessage = async (message) => {
        const messageManager = MessageFactory.getManager(message.type); 
        const result = await messageManager.newMessage(message);
        return result;
    };

    getByTypeId = async  (type, typeid) => {
        const messageManager = MessageFactory.getManager(type); 
        const result = await messageManager.getByTypeId(typeid);
        return result;
    };
    
    allAmounts = async  (type) => {
        const messageManager = MessageFactory.getManager(type); 
        const result = await messageManager.allAmounts();
        return result;
    };

    getById = async (id, type) => {
        const messageManager = MessageFactory.getManager(type); 
        const result = await messageManager.getById(id);
        return result;
    };
    
    update = async (message, type) => {
        const messageManager = MessageFactory.getManager(type); 
        const result = await messageManager.update(message);
        return result;
    };

};