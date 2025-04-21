import Tarea from '../models/Tarea';

// Crear una tarea (asignar a empleado y proyecto)
export const createTarea = async (req, res) => {
  const { titulo, empleado, proyecto, fechaFin, estado } = req.body;
  try {
    const nuevaTarea = new Tarea({ 
      titulo, 
      empleado, 
      proyecto, 
      fechaFin, 
      estado 
    });
    const tareaGuardada = await nuevaTarea.save();
    res.status(201).json(tareaGuardada);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Filtrar tareas por rango de fechas
export const getTareasPorFecha = async (req, res) => {
  const { fechaInicio, fechaFin } = req.query;
  try {
    const tareas = await Tarea.find({
      fechaInicio: { $gte: new Date(fechaInicio) },
      fechaFin: { $lte: new Date(fechaFin) }
    }).populate('empleado proyecto'); // Incluye datos relacionados
    res.json(tareas);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};