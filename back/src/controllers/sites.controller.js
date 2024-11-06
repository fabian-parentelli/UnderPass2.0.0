import * as sitesService from '../services/sites.service.js';
import { SitesNotFound } from '../utils/custom-exceptions.utils.js';

const newSite = async (req, res) => {
    const images = req.files;
    const imagesUrl = req.cloudinaryUrls;
    try {
        const result = await sitesService.newSite(images, imagesUrl, { ...req.body });
        if (result) return res.sendSuccess(result);
    } catch (error) {


        console.log(error); //- Borrar ----------------------------------------------

        if (error instanceof SitesNotFound) return res.sendClientError(error.message);
        res.sendServerError(error.message);
    };
};

export { newSite };
