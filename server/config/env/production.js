export default {
	env: 'production',
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI,
	port: 3000
};
