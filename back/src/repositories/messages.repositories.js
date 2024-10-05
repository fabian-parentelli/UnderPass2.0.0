import MessageFactory from "../dao/factory/messagesFactory.js";

export default class MessageRepository {

    newMessage = async (message) => {
        const messageManager = MessageFactory.getManager(message.type); 
        const result = await messageManager.newMessage(message);
        return result;
    };

    getByType = async  (page, type, query) => {
        const messageManager = MessageFactory.getManager(type); 
        const result = await messageManager.getByType(query, page);
        return result;
    };

    getByTypeId = async  (type, typeid) => {
        const messageManager = MessageFactory.getManager(type); 
        const result = await messageManager.getByTypeId(typeid);
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