import Empleado from '../models/Empleado.js';

export const getEmpleados = async (req, res) => {
  try {
    const empleados = await Empleado.find();
    res.status(200).json(empleados);
  } catch (err) {
    res.status(500).json({ error: 'Error al obtener los empleados' });
  }
};

export const createEmpleado = async (req, res) => {
  const { nombre, apellido } = req.body;
  try {
    const nuevoEmpleado = new Empleado({ nombre, apellido });
    await nuevoEmpleado.save();
    res.status(201).json(nuevoEmpleado);
  } catch (err) {
    res.status(500).json({ error: 'Error al crear el empleado' });
  }
};

export const updateEmpleado = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido } = req.body;
  try {
    const empleado = await Empleado.findByIdAndUpdate(id, { nombre, apellido }, { new: true });
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.status(200).json(empleado);
  } catch (err) {
    res.status(500).json({ error: 'Error al actualizar el empleado' });
  }
};


export const deleteEmpleado = async (req, res) => {
  const { id } = req.params;
  try {
    const empleado = await Empleado.findByIdAndDelete(id);
    if (!empleado) {
      return res.status(404).json({ error: 'Empleado no encontrado' });
    }
    res.status(200).json({ message: 'Empleado eliminado' });
  } catch (err) {
    res.status(500).json({ error: 'Error al eliminar el empleado' });
  }
};