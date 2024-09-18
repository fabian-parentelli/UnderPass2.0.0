import * as orderService from '../services/orders.service.js';
import { OrderNotFound } from '../utils/custom-exceptions.utils.js';

const newOrder = async (req, res) => {
    try {
        const result = await orderService.newOrder({ ...req.body }, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getByArticle = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await orderService.getByArticle(id, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await orderService.getOrderById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getOrders = async (req, res) => {
    const { page = 1, limit = 12, userid, active, pay } = req.query;
    try {
        const result = await orderService.getOrders(page, limit, userid, active, pay, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updTypePay = async (req, res) => {
    const { id, type } = req.params;
    try {
        const result = await orderService.updTypePay(id, type);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newOrder, getOrderById, getOrders, getByArticle, updTypePay };