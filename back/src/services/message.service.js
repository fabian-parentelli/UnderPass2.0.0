import { messageRepository, alertsRepository } from "../repositories/index.repositories.js";
import { MessageNotFound } from "../utils/custom-exceptions.utils.js";
import { messagesPopulate } from "../utils/servicesUtils/messagesPopulate.utils.js";

const newMessage = async (message) => {
    const result = await messageRepository.newMessage(message);
    if (!result) throw new MessageNotFound('No se puede guardar el msj');
    return { status: 'success', result };
};

const getByType = async (page, type, country, report) => {
    const query = { country: country };
    if (report) query.report = { $exists: true, $ne: null, $ne: [] };
    const result = await messageRepository.getByType(page, type, query);
    if (!result) throw new MessageNotFound('No se encontraron comentarios');
    const comments = await messagesPopulate(type, result.docs);
    result.docs = comments;
    return { status: 'success', result };
};

const getByTypeId = async (type, typeid) => {
    const result = await messageRepository.getByTypeId(type, typeid);
    if (!result) throw new MessageNotFound('No se puede guardar el msj');
    return { status: 'success', result };
};

const report = async (rep) => {
    const message = await messageRepository.getById(rep.id, rep.type);
    if (!message) throw new MessageNotFound('No se puede encontrar el msj');
    message.report.push({ userId: rep.userId, reason: rep.reason, date: new Date() });
    const result = await messageRepository.update(message, rep.type);
    if (!result) throw new MessageNotFound('No se puede guardar la denuncia');
    await alertsRepository.newAlert({
        eventId: result._id,
        userId: '668d9529cf8bde76a0dc3adb',
        type: 'newReport'
    });
    return { status: 'success', result };
};

const rejects = async (reject) => {
    const comment = await messageRepository.getById(reject.comment, reject.type);
    if (!comment) throw new MessageNotFound('No se puede encontrar el msj');
    comment.report = comment.report.filter(rep => rep._id != reject.report);
    const result = await messageRepository.update(comment, reject.type);
    if (!result) throw new MessageNotFound('No se puede eliminar la denuncia');
    return { status: 'success', result };
};

const active = async (actives) => {
    const comment = await messageRepository.getById(actives.id, actives.type);
    if (!comment) throw new MessageNotFound('No se puede encontrar el msj');
    comment.active = false;
    const result = await messageRepository.update(comment, actives.type);
    if (!result) throw new MessageNotFound('No se puede eliminar la denuncia');
    return { status: 'success', result };
};

export { newMessage, getByTypeId, report, getByType, rejects, active };