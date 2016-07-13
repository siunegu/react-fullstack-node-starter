/* express */
import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import httpStatus from 'http-status';

/* routes */
import routes from './routes';

/* db and config */
import Promise from 'bluebird';
import mongoose from 'mongoose';
import config from './config/env';

/* promisifiy mongoose */
Promise.promisifyAll(mongoose);

/* connect to mongo db */
mongoose.connect(config.db, { server: { socketOptions: { keepAlive: 1 } } });
mongoose.connection.on('error', () => {
	throw new Error(`unable to connect to database: ${config.db}`);
})

/* init express */
const app = express();

/* parse body params and attache them to req.body */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/* serve /public folder as / path */
app.use('/', express.static('public'));
/* mount all routes on /api path */
app.use('/api/', routes);
/* listen on port 3000 or production port */
app.listen(config.port, () => {
	console.log(`server started on port ${config.port}  (${config.env})`);
});
