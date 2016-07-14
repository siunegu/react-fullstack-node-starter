import express  from 'express';
import validate from 'express-validation';
import paramValidation from '../config/param-validation'
import userCtrl from '../controllers/user';

const router = express.Router();

router.route('/')
	.get(userCtrl.list)
	.post(validate(paramValidation.createUser), userCtrl.create);

export default router;