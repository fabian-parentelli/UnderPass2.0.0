import { productManager } from '../dao/manager/index.manager.js';

export default class ProductRepository {

    newProduct = async (product) => {
        const result = await productManager.newProduct(product);
        return result;
    };

    getByUserId = async (id) => {
        const result = await productManager.getByUserId(id);
        return result;
    };
    
    getByTipsSearch = async (query, name) => {
        const result = await productManager.getByTipsSearch(query, name);
        return result;
    };

    getProdById = async (id) => {
        const result = await productManager.getProdById(id);
        return result;
    };
    
    getRandom = async (country) => {                
        const result = await productManager.getRandom(country);
        return result;
    };

    update = async (product) => {
        const result = await productManager.update(product);
        return result;
    };

    getAll = async (query, limit, page, location) => {
        const result = await productManager.getAll(query, limit, page);
        if (location) {
            const priorityProvince = location.toLowerCase();
            result.docs.sort((a, b) => {
                const provinceA = a.location?.province?.toLowerCase() || '';
                const provinceB = b.location?.province?.toLowerCase() || '';
                const isA = provinceA === priorityProvince ? 1 : 0;
                const isB = provinceB === priorityProvince ? 1 : 0;
                if (isA !== isB) return isB - isA;
                return new Date(b.date) - new Date(a.date);
            });
        };
        return result;
    };

    productAmount = async (country) => {
        const result = await productManager.productAmount(country);
        return result;
    };

};