import { productRepository, newsRepository } from "../../repositories/index.repositories.js";
import { MessageNotFound } from "../custom-exceptions.utils.js";

export async function messagesPopulate(type, comments) {
    const result = [];
    const mySet = new Set();
    comments.forEach((com) => mySet.add(com.typeId));
    if (type === 'news') {
        await populateNews(result, mySet, comments);
    } else if (type === 'product') {
        await populateProducts(result, mySet, comments);
    } else if (type === 'site') {
        await populateSites(result, mySet, comments);
    } else if (type === 'event') {
        await populateEvents(result, mySet, comments);
    };
    return result;
};

const populateNews = async (result, mySet, comments) => {
    for (let id of mySet) {
        const news = await newsRepository.getById(id);
        if (!news) throw new MessageNotFound('No se encontraron las noticias');
        result.push({ _id: news._id, img: news.img[0], title: news.title, comments: [] });
    };
    attachComments(result, comments);
};

const populateProducts = async (result, mySet, comments) => {
    for (let id of mySet) {
        const product = await productRepository.getProdById(id);
        if (!product) throw new MessageNotFound('No se encontraron las noticias');
        result.push({ _id: product._id, img: product.img[0].imgUrl, title: product.name, comments: [] });
    };
    attachComments(result, comments);
};

const attachComments = (result, comments) => {
    comments.forEach(com => {
        result.forEach(res => {
            if (com.typeId == res._id) res.comments.push(com);
        });
    });
};