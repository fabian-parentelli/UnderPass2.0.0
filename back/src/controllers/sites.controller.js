import * as sitesService from '../services/sites.service.js';
import { SitesNotFound } from '../utils/custom-exceptions.utils.js';

const newSite = async (req, res) => {

    console.log('camina*********************');
    

    const images = req.files;
    const imagesUrl = req.cloudinaryUrls;
    const sites = req.body;

    console.log(images);
    console.log(imagesUrl);
    console.log(sites);
    

    // try {
    //     const result = await ticketService.getTicketByOrder(id);
    //     if (result) return res.sendSuccess(result);
    // } catch (error) {
    //     if (error instanceof TicketNotFound) return res.sendClientError(error.message);
    //     res.sendServerError(error.message);
    // };
};

export { newSite };
