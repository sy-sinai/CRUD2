import express from 'express';
import { 
  getEmpleados, 
  createEmpleado, 
  updateEmpleado, 
  deleteEmpleado 
} from '../controllers/empleadoController'; // Importamos los controladores

const router = express.Router(); 

router.get('/', getEmpleados);


router.post('/', createEmpleado);


router.put('/:id', updateEmpleado);


router.delete('/:id', deleteEmpleado);

export default router; 