import { shiftconfManager } from "../../manager/index.manager.js";

const getDataPlace = async (result) => {
    const config = await shiftconfManager.getByUserId(result.shiftId.userId);
    result.shiftId.place = config.title;
    result.shiftId.img = config.img.url;
    result.shiftId.placeId = config._id;
    return result;
};

export { getDataPlace };