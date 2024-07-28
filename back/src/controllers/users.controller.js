import * as userService from '../services/users.service.js';
import { UserNotFound } from '../utils/custom-exceptions.utils.js';

const register = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await userService.register({ ...req.body }, imagesUrl);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const login = async (req, res) => {
    try {
        const result = await userService.login({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const recoverPassword = async (req, res) => {
    try {
        const result = await userService.recoverPassword({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const newFinancial = async (req, res) => {
    const { user } = req.user;
    try {
        const result = await userService.newFinancial({ ...req.body }, user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const paginates = async (req, res) => {
    const { user } = req.user;
    const { limit = 12, page = 1, active, country } = req.query;
    try {
        const result = await userService.paginates(user, limit, page, active, country);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const searchUser = async (req, res) => {
    const { name } = req.params;
    try {
        const result = await userService.searchUser(name);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const current = async (req, res) => {
    try {
        const result = await userService.current({ ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const interPass = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userService.interPass(id);
        res.redirect(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getFinancial = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userService.getFinancial(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userService.getUserById(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAllUsers = async (req, res) => {
    const { user } = req.user;
    try {
        const result = await userService.getAllUsers(user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const sekker = async (req, res) => {
    const { user } = req.user;
    try {
        const result = await userService.sekker(user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const newPassword = async (req, res) => {
    try {
        const result = await userService.newPassword({ ...req.body }, { ...req.user });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updFinancial = async (req, res) => {
    try {
        const result = await userService.updFinancial({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const ImgAvatar = async (req, res) => {
    const { id } = req.params;
    const { user } = req.user;
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await userService.ImgAvatar(id, imagesUrl, user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updAvatar = async (req, res) => {
    const { id } = req.params;
    const { user } = req.user;
    try {
        const result = await userService.updAvatar(id, { ...req.body }, user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const historyAvatar = async (req, res) => {
    const { id } = req.params;
    const { user } = req.user;
    try {
        const result = await userService.historyAvatar(id, { ...req.body }, user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updRole = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userService.updRole(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updActive = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await userService.updActive(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updUser = async (req, res) => {
    const { user } = req.user;
    try {
        const result = await userService.updUser({ ...req.body }, user);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export {
    register, login, recoverPassword, current, interPass, paginates, updRole, updActive, searchUser,
    getAllUsers, sekker, newPassword, getUserById, updUser, newFinancial, getFinancial, updFinancial,
    updAvatar, ImgAvatar, historyAvatar
};