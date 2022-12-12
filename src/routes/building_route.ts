import express from 'express';
// import { loginHandler, registerHandler } from '../controller/building_controller';
import { loginHandler, registerHandler } from '../controller/auth_controller';
import { getAllbuilding, addNewBuilding } from '../controller/building_controller';
import validate from '../middleware/validate';
import { buildregister } from '../zod_schema/building_schema';

const router = express.Router();

router.post('/addbuilding', validate(buildregister), addNewBuilding);
router.post('/building',  getAllbuilding);

export default router;