import express from 'express';
import { 
  createTarea, 
  getTareasPorFecha 
} from '../controllers/tareaController';

const router = express.Router();

router.post('/', createTarea);
router.get('/buscar', getTareasPorFecha); // /api/tareas/buscar?fechaInicio=...&fechaFin=...

export default router;