'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const CrearTarea = () => {
  const [empleados, setEmpleados] = useState([]);
  const [proyectos, setProyectos] = useState([]);
  const [formData, setFormData] = useState({
    titulo: '',
    empleado: '',
    proyecto: '',
    fechaFin: '',
    estado: 'Pendiente'
  });
  const router = useRouter();

  useEffect(() => {
    const cargarDatos = async () => {
      const resEmp = await fetch('http://localhost:3001/api/empleados');
      const resProy = await fetch('http://localhost:3001/api/proyectos');
      setEmpleados(await resEmp.json());
      setProyectos(await resProy.json());
    };
    cargarDatos();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/api/tareas', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) throw new Error('Error al guardar tarea');
      router.push('/tareas');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Crear Nueva Tarea</h1>
      <form onSubmit={handleSubmit} className="space-y-4">

        <input name="titulo" onChange={handleChange} placeholder="Título" className="border p-2 w-full" required />

        <select name="empleado" onChange={handleChange} className="border p-2 w-full" required>
          <option value="">Selecciona un empleado</option>
          {empleados.map(emp => (
            <option key={emp._id} value={emp._id}>
              {emp.nombre} {emp.apellido}
            </option>
          ))}
        </select>

        <select name="proyecto" onChange={handleChange} className="border p-2 w-full" required>
          <option value="">Selecciona un proyecto</option>
          {proyectos.map(proy => (
            <option key={proy._id} value={proy._id}>{proy.nombre}</option>
          ))}
        </select>

        <input type="date" name="fechaFin" onChange={handleChange} className="border p-2 w-full" />

        <select name="estado" onChange={handleChange} className="border p-2 w-full">
          <option value="Pendiente">Pendiente</option>
          <option value="En Progreso">En Progreso</option>
          <option value="Finalizada">Finalizada</option>
        </select>

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Guardar</button>
      </form>
    </div>
  );
};

export default CrearTarea;
