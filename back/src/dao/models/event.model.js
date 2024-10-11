import mongoose from "mongoose";
import mongossePaginate from 'mongoose-paginate-v2';

const eventCollection = 'event';

const eventSchema = new mongoose.Schema({
    title: { type: String },
    category: { type: String },
    description: { type: String },
    endHour: { type: String },
    startHour: { type: String },
    startDate: { type: Date },
    guests: [{ type: String }],
    minors: { type: Boolean },
    type: { type: Boolean },
    userId: { type: String },
    video: { type: String },
    tickets: { type: Boolean },
    location: {
        province: { type: String },
        city: { type: String },
        address: { type: String },
        place: { type: String },
        coordinates: {
            lat: { type: String, default: '' },
            lon: { type: String, default: '' }
        }
    },
    photo: {
        img: { type: String },
        isFlyer: { type: Boolean }
    },
    active: { type: Boolean, default: false },
    ticketInfo: [
        {
            type: { type: String, default: 'free' },
            description: { type: String, default: 'entradas sin cargo' },
            price: { type: Number, default: 0 },
            quantity: { type: Number },
            hourEnd: { type: String },
            active: { type: Boolean, default: true }
        }
    ],
    password: { type: String },
    confirm: { type: Boolean, default: false }
});

eventSchema.plugin(mongossePaginate);

export const eventModel = mongoose.model(eventCollection, eventSchema);