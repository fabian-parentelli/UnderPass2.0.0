import mongoose from "mongoose";

const avatarCollection = 'avatars';

const avatarSchema = new mongoose.Schema({
    name: { type: String },
    folderName: { type: String },
    imgUrl: { type: String },
    active: { type: Boolean, default: true },
});

export const avatarModel = mongoose.model(avatarCollection, avatarSchema);