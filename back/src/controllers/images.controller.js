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

const newBanners = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await imagenService.newBanners({ ...req.body }, imagesUrl);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ImagenNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const applBanner = async (req, res) => {
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await imagenService.applBanner({ ...req.body }, imagesUrl);
        if (result) return res.sendSuccess(result);
    } catch (error) {

        console.log(error); //--------------------------------Borrar-------------------------

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

const getBannerBody = async (req, res) => {
    try {
        const result = await imagenService.getBannerBody();
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof EventNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getAllBanners = async (req, res) => {
    const { limit = 12, page = 1, active, country, category } = req.query;
    try {
        const result = await imagenService.getAllBanners(limit, page, active, country, category);
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

const updBanner = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await imagenService.updBanner({ ...req.body }, id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ImagenNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const updBannerActive = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await imagenService.updBannerActive(id);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof ImagenNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export {
    newVideoTut, newBanners, applBanner, getAllVideos, getAllBanners,
    getVideoTutByName, activeVideo, updBanner, updBannerActive,
    getBannerBody
};