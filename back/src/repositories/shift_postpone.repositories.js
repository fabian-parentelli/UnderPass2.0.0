import { postponeManager } from '../dao/manager/index.manager.js';
import * as postpDto from '../dao/DTOS/shift_postpone/index.postpone.dto.js';

export default class PostponeRepository {

    newPostpone = async (shift) => {
        const result = await postponeManager.newPostpone(shift);
        return result;
    };

    getByAdminId = async (id, active, data = true) => {
        const preResult = await postponeManager.getByAdminId(id, active);
        const result = await postpDto.getCustomer(preResult, data);
        return result;
    };

    getById = async (id, user) => {
        let result;
        result = await postponeManager.getById(id);
        if (result.to === 'customer') result = await postpDto.getDataPlace(result);
        if (user && (user._id === result.adminId)) result = await postpDto.getCustomerOne(user, result);
        return result;
    };

    getByShiftId = async (id) => {
        const result = await postponeManager.getByShiftId(id);
        return result;
    };

    update = async (postpone) => {
        const result = await postponeManager.update(postpone);
        return result;
    };

    postponeAmount = async () => {
        const result = await postponeManager.postponeAmount();
        return result;
    };

    getPostPone = async (query) => {
        const result = await postponeManager.getPostPone(query);
        return result;
    };

    deleteById = async (id) => {
        const result = await postponeManager.deleteById(id);
        return result;
    };

    deleteMany = async (query) => {
        const result = await postponeManager.deleteMany(query);
        return result;
    };

};