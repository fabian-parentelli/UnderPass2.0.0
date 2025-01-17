import mongoose from "mongoose";
import mongoosePaginate from 'mongoose-paginate-v2';

const shiftconfCollection = 'shiftconf';

const shiftconfSchema = new mongoose.Schema({
    userId: { type: String },
    location: {
        country: { type: String },
        province: { type: String },
        city: { type: String },
        address: { type: String },
        coordinates: {
            lat: { type: String },
            lon: { type: String },
        }
    },
    rooms: { type: Number },
    days: [{ type: String }],
    title: { type: String },
    category: { type: String },
    description: { type: String },
    roomsData: [
        {
            name: { type: String },
            ability: { type: Boolean },
            abilityNumber: { type: Number },
            sections: [
                {
                    days: [{ type: String }],
                    hour: {
                        startHour: { type: String },
                        endHour: { type: String },
                        fractionHour: { type: Number },
                    },
                    abilityNumber: { type: Number },
                    price: { type: Number },
                    title: { type: String },
                }
            ]
        }
    ],
    hour: {
        startHour: { type: String },
        endHour: { type: String },
        fractionHour: { type: Number },
    },
    price: { type: Number },
    isSection: { type: Boolean },
    img: {
        url: { type: String },
    },
    active: { type: Boolean, default: true },
    holidays: { type: Boolean, default: false },
    holidaysDate: {
        holdaysOn: { type: Date },
        holdaysOff: { type: Date }
    }
});

shiftconfSchema.plugin(mongoosePaginate);

export const shiftconfModel = mongoose.model(shiftconfCollection, shiftconfSchema);