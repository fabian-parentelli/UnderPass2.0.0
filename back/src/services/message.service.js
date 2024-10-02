import { messageRepository, alertsRepository } from "../repositories/index.repositories.js";
import { MessageNotFound } from "../utils/custom-exceptions.utils.js";

const newMessage = async (message) => {
    const result = await messageRepository.newMessage(message);
    if (!result) throw new MessageNotFound('No se puede guardar el msj');
    return { status: 'success', result };
};

const getByTypeId = async (type, typeid) => {
    const result = await messageRepository.getByTypeId(type, typeid);
    if (!result) throw new MessageNotFound('No se puede guardar el msj');
    return { status: 'success', result };
};

const allAmounts = async () => {
    const types = ['news'];
    for(const type of types) {
        const amount = await messageRepository.allAmounts(type);
        console.log(amount);

        // Agregar el país a los mensjes burro !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        // que me traiga los cantidad de mensajes por pais por tipo
        // cuando selecciono un tipo que mueste el evento y la cantidad de comentarios de cada uno
        // ver tabien los denunciados y accionar sovbre ellos desestimar. (Borra la denuncia)
        // Descativar el comentario, no avisar a nadie para no generar conflicto.
        
    };
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

export { newMessage, getByTypeId, allAmounts, report };