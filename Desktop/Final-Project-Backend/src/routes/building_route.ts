import express from 'express';
import { loginHandler, registerHandler } from '../controller/building_controller';
import validate from '../middleware/validate';
import { buildregister } from '../zod_schema/building_schema';

const router = express.Router();

// router.post('/register', validate(registerSchema), registerHandler);
// router.post('/login', validate(loginSchema), loginHandler);

export default router;