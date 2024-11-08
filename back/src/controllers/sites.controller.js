import * as sitesService from '../services/sites.service.js';
import { SitesNotFound } from '../utils/custom-exceptions.utils.js';

const newSite = async (req, res) => {
    const images = req.files;
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await sitesService.newSite(images, imagesUrl, { ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof SitesNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getByUserId = async (req, res) => {
    const { uid } = req.params;
    try {
        const result = await sitesService.getByUserId(uid);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof SitesNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

const getByLinks = async (req, res) => {
    const { link } = req.params;
    try {
        const result = await sitesService.getByLinks(link);
        if (result) return res.sendSuccess(result);
    } catch (error) {
        if (error instanceof SitesNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newSite, getByUserId, getByLinks };
