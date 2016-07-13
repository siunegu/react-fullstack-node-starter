import express  from 'express';
import userCtrl from '../controllers/user';

const router = express.Router();

router.route('/')
	.get(userCtrl.list)

export default router;