import express from 'express';
import {
  getTareas,
  createTarea,
  getTareasPorFecha
} from '../controllers/tareaController.js';

const router = express.Router();

// GET /api/tareas
router.get('/', getTareas);

// POST /api/tareas
router.post('/', createTarea);

// GET /api/tareas/buscar?fechaInicio=YYYY-MM-DD&fechaFin=YYYY-MM-DD
router.get('/buscar', getTareasPorFecha);

export default router;