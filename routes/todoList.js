import { Router } from "express";
import { getPreguntas } from '../controllers/todoListController.js';

const router = Router();

router.get('/', (req, res) => getPreguntas(req, res));

export default router;