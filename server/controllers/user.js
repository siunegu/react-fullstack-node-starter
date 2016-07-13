import User from '../models/user';

/**
 * Load user and append to req.
 */
function load(req, res, next, id) {
	User.get(id).then((user) => {
		req.user = user;
		return next();
	}).error((e) => next(e));
}

/**
 * Get user
 * @returns {User}
 */
function get(req, res) {
	return res.json(req.user);
}

/**
 * Create new user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.email - The email of user.
 * @returns {User}
 */
function create(req, res, next) {
	const user = new User({
		username: req.body.username,
		email: req.body.email
	});

	user.saveAsync()
		.then((savedUser) => res.json(savedUser))
		.error((e) => next(e));
}

/**
 * Update existing user
 * @property {string} req.body.username - The username of user.
 * @property {string} req.body.email - The email of user.
 * @returns {User}
 */
function update(req, res, next) {
	const user = req.user;
	user.username = req.body.username;
	user.email = req.body.email;

	user.saveAsync()
		.then((savedUser) => res.json(savedUser))
		.error((e) => next(e));
}

/**
 * Get user list.
 * @property {number} req.query.skip - Number of users to be skipped.
 * @property {number} req.query.limit - Limit number of users to be returned.
 * @returns {User[]}
 */
function list(req, res, next) {
	const { limit = 50, skip = 0 } = req.query;
	User.list({ limit, skip }).then((users) => res.json(users) )
		.error((e) => next(e));
}

/**
 * Delete user.
 * @returns {User}
 */
function remove(req, res, next) {
	const user = req.user;
	user.removeAsync()
		.then((deletedUser) => res.json(deletedUser))
		.error((e) => next(e));
}

export default { load, get, create, update, list, remove };
