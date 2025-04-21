import express from 'express';
import {
  getProyectos,
  createProyecto,
  deleteProyecto
} from '../controllers/proyectoController.js';

const router = express.Router();

// GET /api/proyectos
router.get('/', getProyectos);

// POST /api/proyectos
router.post('/', createProyecto);

// DELETE /api/proyectos/:id
router.delete('/:id', deleteProyecto);

export default router;