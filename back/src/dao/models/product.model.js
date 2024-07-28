import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const productCollection = 'product';

const productSchema = new mongoose.Schema({
    folderName: { type: String },
    userId: { type: String },
    name: { type: String },
    description: {
        small: { type: String },
        long: { type: String }
    },
    price: { type: Number },
    quantity: { type: Number },
    img: [
        {
            imgUrl: { type: String },
            imgName: { type: String },
            active: { type: Boolean },
        }
    ],
    date: { type: Date, default: Date.now },
    location: {
        city: { type: String },
        province: { type: String },
        country: { type: String },
    },
    active: { type: Boolean, default: true },
    inSite: { type: Boolean }
});

productSchema.plugin(mongoosePaginate);

export const productModel = mongoose.model(productCollection, productSchema);