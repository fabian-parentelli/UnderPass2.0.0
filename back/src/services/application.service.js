import { appliRepository, userRepository } from "../repositories/index.repositories.js";
import { AppliNotFound } from '../utils/custom-exceptions.utils.js';

const appliBanner = async (application, imgUrl) => {
    application.img = imgUrl;
    const result = await appliRepository.appliBanner(application);
    if (!result) throw new AppliNotFound('No se puede guardar la solicitud');
    return { status: 'success', result };
};

const getAll = async (limit, page, active, country, category, type, pay) => {
    const query = {};
    if (category) query.category = { $regex: category, $options: "i" };
    if (country) query.country = { $regex: country, $options: "i" };
    if (type) query.type = { $regex: type, $options: "i" };
    if (active !== undefined) query.active = active;
    if (pay !== undefined) query.pay = pay;
    const result = await appliRepository.getAll(query, limit, page);
    if (!result) throw new AppliNotFound('No se encuentran las solicitudes');
    result.docs = await Promise.all(result.docs.map(async (appl) => {
        const userDb = await userRepository.getUserById(appl.user);
        appl.user = { name: userDb.name, userId: userDb._id, email: userDb.email };
        return appl;
    })); return { status: 'success', result };
};

const getByUserId = async (id) => {
    let result = await appliRepository.getByUserId(id);
    if (!result) throw new AppliNotFound('No se encuentran la solicitud');
    result = await Promise.all(result.map(async (appl) => {
        const userDb = await userRepository.getUserById(appl.user);
        appl.user = { name: userDb.name, userId: userDb._id, email: userDb.email };
        return appl;
    })); return { status: 'success', result };
};

const updActive = async (id) => {
    const application = await appliRepository.getAppById(id);
    if (!application) throw new AppliNotFound('No se encuentran la solicitud');
    application.active = !application.active;
    const result = await appliRepository.update(application);
    if (!result) throw new AppliNotFound('No se puede actualizar la solicitud');
    return { status: 'success', result };
};

const updVew = async (id) => {
    const application = await appliRepository.getAppById(id);
    if (!application) throw new AppliNotFound('No se encuentran la solicitud');
    application.underVew = !application.underVew;
    const result = await appliRepository.update(application);
    if (!result) throw new AppliNotFound('No se puede actualizar la solicitud');
    return { status: 'success', result };
};

export { appliBanner, getAll, getByUserId, updActive, updVew };