import { imgages } from "../../../../front/src/utils/imagesData.utils.js";
import {
    productRepository, appliRepository, userRepository, eventRepository
} from "../../repositories/index.repositories.js";

const getCart = async (order, user) => {
    for (const ord of order) {
        if (user.role !== 'user') {
            if (ord.userId) {
                const user = await userRepository.getUserById(ord.userId) || '';
                delete user.password;
                ord.userData = user;
            };
            if (ord.buyerUserId) {
                const user = await userRepository.getUserById(ord.buyerUserId) || '';
                delete user.password;
                ord.buyerUserData = user;
            };
            if (ord.sellerUserId) {
                const user = await userRepository.getUserById(ord.sellerUserId) || '';
                delete user.password;
                ord.sellerUserData = await userRepository.getUserById(ord.sellerUserId) || '';
            };
        };
        for (const type of ord.cart) {
            if (type.is === 'product') {
                const product = await productRepository.getProdById(type.typeId);
                const productDb = { img: product.img[0].imgUrl, name: product.name, price: product.price };
                type.data = productDb;
            };
            if (type.is === 'events') {
                const event = await eventRepository.getById(type.eventId);
                const ticket = event.ticketInfo.find(tick => tick._id == type.typeId);
                const newEvent = {
                    img: event.photo.isPreset ? imgages.underEvent : event.photo.img,
                    name: `${event.title} - ${ticket.description}`,
                    price: ticket.price
                };
                type.data = newEvent;
            };
            // if (!['product', 'events', 'shift'].includes(type.is)) {
            //     const cards = await appliRepository.getAppById(type.typeId);
            //     const obj = { title: cards.title, img: 'https://res.cloudinary.com/dtzy75wyt/image/upload/v1725314428/images/tqrrecumjhvson6zp7jq.png' };
            //     type.data = obj;
            // }            

            // Estoy aca no funicona la publicidad en las ordenes ......
        };
    };
    return order;
};

export { getCart };