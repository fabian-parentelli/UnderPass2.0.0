import Router from './routes.js';
import * as graphController from '../controllers/graph.controller.js';
import { passportEnum } from '../config/enums.config.js';

export default class GraphRouter extends Router {
    init() {
        this.get('/bannerprice/:country', ['ADMIN', 'MASTER'], passportEnum.JWT, graphController.bannerPrices);
    };
};