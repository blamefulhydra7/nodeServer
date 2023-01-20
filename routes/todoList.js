import { Router } from "express";
import { getTareas, addTarea, updateTarea } from '../controllers/todoListController.js';

const router = Router();

/**
 * @description Ruta base del TodoList con método HTTP GET
 */
router.get('/', (req, res) => getTareas(req, res));

/**
 * @description Ruta base del TodoList con método HTTP POST
 */
router.post('/', (req, res) => addTarea(req, res));

/**
 * @description Ruta base del TodoList con método HTTP PUT
 */
router.put('/', (req, res) => updateTarea(req, res));

export default router;