import { bookingModel } from '../models/booking.model.js';

export default class Booking {

    newBooking = async (booking) => {
        return await bookingModel.create(booking);
    };

    getByUserAndType = async (query) => {
        return await bookingModel.findOne(query).lean();
    };

    getToAdmin = async (query, page) => {
        const limit = 12;
        const skip = (page - 1) * limit;
        const result = await bookingModel.aggregate([
            { $match: query },
            {
                $group: {
                    _id: "$pid",
                    users: {
                        $push: {
                            uid: "$uid", active: "$active", type: "$type", date: "$date", country: "$country"
                        }
                    }
                }
            }, { $skip: skip }, { $limit: limit }
        ]);
        const totalDocs = await bookingModel.countDocuments(query); // Total de documentos
        const pagination = {
            docs: result,
            totalDocs: totalDocs,
            limit: limit,
            totalPages: Math.ceil(totalDocs / limit),
            page: page,
            hasPrevPage: page > 1,
            hasNextPage: page < Math.ceil(totalDocs / limit),
            prevPage: page > 1 ? page - 1 : null,
            nextPage: page < Math.ceil(totalDocs / limit) ? page + 1 : null,
        };
        return pagination;
    };

    getBookings = async (query, page) => {
        return await bookingModel.paginate(query, page, { limit: 12 }, { lean: true, new: true });
    };

    getById = async (id) => {
        return await bookingModel.findById(id).lean();
    };

    update = async (booking) => {
        return await bookingModel.findByIdAndUpdate(booking._id, booking, { lean: true, new: true });
    };

};