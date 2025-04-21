import Tarea from '../models/Tarea.js';
import mongoose from 'mongoose'; 

export const getTareas = async (req, res) => {
  try {
    const tareas = await Tarea.find();
    res.status(200).json(tareas);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener las tareas' });
  }
};

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
    await nuevaTarea.save();
    res.status(201).json(nuevaTarea);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear la tarea' });
  }
};

export const getTareasPorFecha = async (req, res) => {
  const { fechaInicio, fechaFin } = req.query;
  try {
    const tareas = await Tarea.find({
      fechaInicio: { $gte: new Date(fechaInicio) },
      fechaFin: { $lte: new Date(fechaFin) }
    });
    res.status(200).json(tareas);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener tareas por fecha' });
  }
};