import path from 'path';
import _ from 'lodash';

const env = process.env.NODE_ENV || 'development';
const config = require(`./${env}`).default;

const defaults = {
	root: path.join(__dirname, '/..'),
	corsOptions: function(origin, callback) {
    var originIsWhitelisted = config.whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);		
	}
};

_.assign(config, defaults);

export default config;
