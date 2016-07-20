import Promise from 'bluebird';
import mongoose from 'mongoose';
import httpStatus from 'http-status';

/**
 * Restaurant Schema
 */

const RestaurantSchema = new mongoose.Schema({
	name: { type: String, required: true },
	locationName: { type: String, required: true },
	locationPostcode: { type: String, required: true },
	streetAddress: { type: String },
	cuisine: { type: Array },
	url: { type: String, required: true }
});

RestaurantSchema.method({

});

module.exports = mongoose.model('Restaurant', RestaurantSchema);