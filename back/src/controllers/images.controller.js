import * as imagenService from '../services/images.service.js';
import { ImagenNotFound } from '../utils/custom-exceptions.utils.js';

const newVideoTut = async (req, res) => {
    try {
        const result = await imagenService.newVideoTut({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ImagenNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const newAvatar = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await imagenService.newAvatar({ ...req.body }, imagesUrl);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ImagenNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const newPresets = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await imagenService.newPresets({ ...req.body }, imagesUrl);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ImagenNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAllVideos = async (req, res) => {
    try {
        const result = await imagenService.getAllVideos();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ImagenNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getPreset = async (req, res) => {
    try {
        const result = await imagenService.getPreset();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ImagenNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const avatarActive = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await imagenService.avatarActive(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof UserNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAvatars = async (req, res) => {
    const { type } = req.params;
    try {
        const result = await imagenService.getAvatars(type);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getVideoTutByName = async (req, res) => {
    const { name } = req.params;
    try {
        const result = await imagenService.getVideoTutByName(name);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof AvatarNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const activeVideo = async (req, res) => {
    try {
        const result = await imagenService.activeVideo({ ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ImagenNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const presetActive = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await imagenService.presetActive(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ImagenNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export {
    newVideoTut, getAllVideos, getVideoTutByName, activeVideo, newAvatar,
    getAvatars, avatarActive, newPresets, getPreset, presetActive
};