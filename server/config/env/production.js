export default {
	env: 'production',
	db: process.env.MONGODB_URI,
	port: process.env.PORT,
	whitelist: ['http://next-best-alternative.herokuapp.com']
};
