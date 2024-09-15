import * as orderPayService from '../services/orderPay.service.js';
import { OrderNotFound } from '../utils/custom-exceptions.utils.js';

const generateOrder = async (req, res) => {
    try {
        const result = await orderPayService.generateOrder({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const newOrder = async (req, res) => {
    try {
        const result = await orderPayService.newOrder({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getData = async (req, res) => {
    const { country } = req.params;
    try {
        const result = await orderPayService.getData(country);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getOrderSellerByPay = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await orderPayService.getOrderSellerByPay(id, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getOrderById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await orderPayService.getOrderById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getOrdersPay = async (req, res) => {
    const { page = 1, limit = 12, userid, active, pay, country } = req.query;
    try {
        const result = await orderPayService.getOrdersPay(page, limit, userid, active, pay, country);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof OrderNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newOrder, getData, getOrdersPay, getOrderById, getOrderSellerByPay, generateOrder };