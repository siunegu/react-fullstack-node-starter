export default {
	env: 'production',
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost:27017/react-node-starter',
	port: 3000
};
