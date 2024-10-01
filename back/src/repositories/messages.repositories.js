import MessageFactory from "../dao/factory/messagesFactory.js";

export default class MessageRepository {

    newMessage = async (message) => {
        const messageManager = MessageFactory.getManager(message.type); 
        const result = await messageManager.newMessage(message);
        return result;
    };
    
};