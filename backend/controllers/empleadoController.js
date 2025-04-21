import Empleado from '../models/Empleado';

export const getEmpleados = async (req, res) => {
    try {
      const empleados = await Empleado.find(); 
      res.json(empleados); 
    } catch (error) {
      res.status(500).json({ message: error.message }); 
    }
  };
  
  // Crear un NUEVO empleado
  export const createEmpleado = async (req, res) => {
    const { nombre, apellido } = req.body; 
  
    try {
      const nuevoEmpleado = new Empleado({ nombre, apellido }); 
      const empleadoGuardado = await nuevoEmpleado.save(); 
      res.status(201).json(empleadoGuardado); 
    } catch (error) {
      res.status(400).json({ message: error.message }); 
    }
  };
  

  export const updateEmpleado = async (req, res) => {
    const { id } = req.params;
    const { nombre, apellido } = req.body;
  
    try {
      const empleadoActualizado = await Empleado.findByIdAndUpdate(
        id, 
        { nombre, apellido },
        { new: true }
      );
      res.json(empleadoActualizado);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  

  export const deleteEmpleado = async (req, res) => {
    const { id } = req.params;
  
    try {
      await Empleado.findByIdAndDelete(id); 
      res.sendStatus(204); /
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };