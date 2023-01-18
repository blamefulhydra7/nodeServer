import { Router } from "express";
import { getTareas, addTarea } from '../controllers/todoListController.js';

const router = Router();

router.get('/', (req, res) => getTareas(req, res));

router.post('/', (req, res) => addTarea(req, res));

export default router;