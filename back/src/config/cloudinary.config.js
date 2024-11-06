import { v2 as cloudinary } from 'cloudinary';
import config from './dotEnv.config.js';

cloudinary.config({
    cloud_name: config.cloudName,
    api_key: config.apiKey,
    api_secret: config.apiSecret
});

async function deleteAllInFolder(folder) { // Esto es para guardar en mi sitio de ayudas-----
    try {
        const { resources } = await cloudinary.api.resources({
            type: 'upload',
            prefix: folder,      
            max_results: 500   
        });
        for (const resource of resources) {
            console.log(`Eliminando: ${resource.public_id}`);
            await cloudinary.uploader.destroy(resource.public_id);
        }
        await cloudinary.api.delete_folder(folder);
        console.log(`La carpeta ${folder} ha sido eliminada exitosamente.`);
    } catch (error) {
        console.error('Error al eliminar los archivos o la carpeta:', error);
    }
} // esto es pra guardar en mi sitio de ayudas -----------------------------------------------


const uploadToCloudinary = async (req, res, next) => {
    if (!req.files || req.files.length === 0) {
        req.cloudinaryUrls = [];
        return next();
    };
    const { folderName } = req.body;

    const uploadPromises = req.files.map(file => {
        return new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream({ folder: `${folderName}` }, (error, result) => {
                if (error) {
                    console.error('Error al cargar la imagen a Cloudinary:', error);
                    reject(error);
                } else {
                    resolve(result.secure_url);
                };
            });
            stream.end(file.buffer);
        });
    });

    try {
        const cloudinaryUrls = await Promise.all(uploadPromises);
        req.cloudinaryUrls = cloudinaryUrls;
        next();
    } catch (error) {
        next(error);
    };
};

const deleteImgs = async (publicIds) => {
    const deletionResults = [];
    for (const publicId of publicIds) {
        const result = await cloudinary.uploader.destroy(publicId);
        deletionResults.push(result);
    };
    return deletionResults;
};

const getPublicIds = (urls) => {
    const regex = /\/v\d+\/(.+)\.\w+/;
    const publicIds = urls.map(url => {
        const match = url.match(regex);
        if (match && match.length > 1) {
            return match[1];
        } else {
            throw new Error('URL de Cloudinary no válida');
        }
    });
    return publicIds;
};

export { uploadToCloudinary, deleteImgs, getPublicIds, deleteAllInFolder };