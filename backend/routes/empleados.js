import express from 'express';
import {
  getEmpleados,
  createEmpleado,
  updateEmpleado,
  deleteEmpleado
} from '../controllers/empleadoController.js';

const router = express.Router();

// GET /api/empleados
router.get('/', getEmpleados);

// POST /api/empleados
router.post('/', createEmpleado);

// PUT /api/empleados/:id
router.put('/:id', updateEmpleado);

// DELETE /api/empleados/:id
router.delete('/:id', deleteEmpleado);

export default router;