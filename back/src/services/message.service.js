import { messageRepository, alertsRepository, newsRepository } from "../repositories/index.repositories.js";
import { MessageNotFound } from "../utils/custom-exceptions.utils.js";

const newMessage = async (message) => {
    const result = await messageRepository.newMessage(message);
    if (!result) throw new MessageNotFound('No se puede guardar el msj');
    return { status: 'success', result };
};

const getByType = async (type, country) => {    
    console.log(type);
    
    const result = await messageRepository.getByType(type, country);
    // for(const res of result) {
    //     if(type === 'news') {
    //         result.data = await newsRepository.getById(res.typeId);
    //     };
    // };
    console.log(result);
    
};

const getByTypeId = async (type, typeid) => {
    const result = await messageRepository.getByTypeId(type, typeid);
    if (!result) throw new MessageNotFound('No se puede guardar el msj');
    return { status: 'success', result };
};

const report = async (rep) => {
    const message = await messageRepository.getById(rep.id, rep.type);
    message.report.push({ userId: rep.userId, rason: rep.rason });
    const result = await messageRepository.update(message, rep.type);
    await alertsRepository.newAlert({
        eventId: result._id,
        userId: '668d9529cf8bde76a0dc3adb',
        type: 'newReport'
    });
    if (!result) throw new MessageNotFound('No se puede guardar la denuncia');
    return { status: 'success', result };
};

export { newMessage, getByTypeId, report, getByType };