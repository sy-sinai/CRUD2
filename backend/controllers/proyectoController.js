import Proyecto from '../models/Proyecto';


export const getProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find();
    res.json(proyectos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProyecto = async (req, res) => {
  const { nombre, descripcion } = req.body;
  try {
    const nuevoProyecto = new Proyecto({ nombre, descripcion });
    const proyectoGuardado = await nuevoProyecto.save();
    res.status(201).json(proyectoGuardado);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteProyecto = async (req, res) => {
  const { id } = req.params;
  try {
    await Proyecto.findByIdAndDelete(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};