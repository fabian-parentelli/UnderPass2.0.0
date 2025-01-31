import { shiftconfManager, shiftCustomerManager, shiftPostponeManager } from '../dao/manager/index.manager.js';

export default class ShiftPostponeRepository {

    newPostpone = async (shift) => {
        const result = await shiftPostponeManager.newPostpone(shift);
        return result;
    };

    getByAdminId = async (id, active, data = true) => {
        const result = await shiftPostponeManager.getByAdminId(id, active);
        if(data && result && result.length > 0) {
            for(const cust of result) {
                const customer = await shiftCustomerManager.getShiftCustomerById(cust.shiftId.customer);
                cust.customerData = customer.customerUser;
            };
        };
        return result;
    };
    
    getById = async (id, user) => {
        const result = await shiftPostponeManager.getById(id);
        if(result.to === 'customer') {
            const config = await shiftconfManager.getByUserId(result.shiftId.userId);
            result.shiftId.place = config.title;
            result.shiftId.img = config.img.url;
            result.shiftId.placeId = config._id;
        };
        if(user && (user._id === result.adminId)) {
            const customer = await shiftCustomerManager.getShiftCustomerById(result.shiftId.customer);
            result.customerData = customer.customerUser;
        };  
        return result;
    };

    update = async (postpone) => {
        const result = await shiftPostponeManager.update(postpone);
        return result;
    };
    
    getByShiftId = async (id) => {
        const result = await shiftPostponeManager.getByShiftId(id);
        return result;
    };
    
    postponeAmount = async () => {
        const result = await shiftPostponeManager.postponeAmount();
        return result;
    };
    
    getPostPone = async (query) => {
        const result = await shiftPostponeManager.getPostPone(query);
        return result;
    };
    
    delPostponeById = async (id) => {
        const result = await shiftPostponeManager.delPostponeById(id);
        return result;
    };
    
    deleteMany = async (query) => {
        const result = await shiftPostponeManager.deleteMany(query);
        return result;
    };
    
};