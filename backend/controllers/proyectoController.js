import Proyecto from '../models/Proyecto.js';
import mongoose from 'mongoose'; 


// Obtener todos los proyectos
export const getProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find();
    res.status(200).json(proyectos);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los proyectos' });
  }
};

// Crear un nuevo proyecto
export const createProyecto = async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    const nuevoProyecto = new Proyecto({ nombre, descripcion });
    await nuevoProyecto.save();
    res.status(201).json(nuevoProyecto);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear el proyecto' });
  }
};

// Eliminar un proyecto
export const deleteProyecto = async (req, res) => {
  const { id } = req.params;
  try {
    const proyecto = await Proyecto.findByIdAndDelete(id);
    if (!proyecto) {
      return res.status(404).json({ error: 'Proyecto no encontrado' });
    }
    res.status(200).json({ message: 'Proyecto eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar el proyecto' });
  }
};

export const updateProyecto = async (req, res) => {
  try {
    const { id } = req.params;
    const proyecto = await Proyecto.findByIdAndUpdate(id, req.body, { new: true });
    if (!proyecto) {
      return res.status(404).json({ message: 'Proyecto no encontrado' });
    }
    res.status(200).json({ message: 'Proyecto actualizado', proyecto });
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el proyecto', error });
  }
};