import { messageRepository } from "../repositories/index.repositories.js";
import { MessageNotFound } from "../utils/custom-exceptions.utils.js";

const newMessage = async (message) => {
    const result = await messageRepository.newMessage(message);
    if (!result) throw new MessageNotFound('No se puede guardar el msj');
    return { status: 'success', result };
};

export { newMessage };