import Joi from 'joi';

export default {
	// POST /api/users
	createUser: {
		body: {
			firstName: Joi.string().required(),
			lastName: Joi.string().required(),
			email: Joi.string().regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required()
		}
	},

	// UPDATE /api/users/:userId
	updateUser: {
		body: {
			firstName: Joi.string().required(),
			lastName: Joi.string().required(),
			email: Joi.string().regex(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).required()
		},
		params: {
			userId: Joi.string().hex().required()
		}
	}
}