import { Router } from 'express';
import { home } from '../controllers/homeController.js';

const router = Router();

router.get('/', (req, res) => home(req, res));

export default router;