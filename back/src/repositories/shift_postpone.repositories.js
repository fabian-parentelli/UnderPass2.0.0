import { shiftconfManager, shiftCustomerManager, postponeManager } from '../dao/manager/index.manager.js';

export default class PostponeRepository {

    newPostpone = async (shift) => {
        const result = await postponeManager.newPostpone(shift);
        return result;
    };

    getByAdminId = async (id, active, data = true) => {
        const result = await postponeManager.getByAdminId(id, active);
        if(data && result && result.length > 0) {
            for(const cust of result) {
                const customer = await shiftCustomerManager.getById(cust.shiftId.customer);
                cust.customerData = customer.customerUser;
            };
        };
        return result;
    };
    
    getById = async (id, user) => {
        const result = await postponeManager.getById(id);
        if(result.to === 'customer') {
            const config = await shiftconfManager.getByUserId(result.shiftId.userId);
            result.shiftId.place = config.title;
            result.shiftId.img = config.img.url;
            result.shiftId.placeId = config._id;
        };
        if(user && (user._id === result.adminId)) {
            const customer = await shiftCustomerManager.getById(result.shiftId.customer);
            result.customerData = customer.customerUser;
        };  
        return result;
    };

    update = async (postpone) => {
        const result = await postponeManager.update(postpone);
        return result;
    };
    
    getByShiftId = async (id) => {
        const result = await postponeManager.getByShiftId(id);
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
    
    delPostponeById = async (id) => {
        const result = await postponeManager.delPostponeById(id);
        return result;
    };
    
    deleteMany = async (query) => {
        const result = await postponeManager.deleteMany(query);
        return result;
    };
    
};