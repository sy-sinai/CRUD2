import express from 'express';
import { 
  getProyectos, 
  createProyecto, 
  deleteProyecto 
} from '../controllers/proyectoController';

const router = express.Router();

router.get('/', getProyectos);
router.post('/', createProyecto);
router.delete('/:id', deleteProyecto);

export default router;