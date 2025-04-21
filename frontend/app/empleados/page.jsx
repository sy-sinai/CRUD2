'use client';
import { useEffect, useState } from 'react';

const EmpleadosPage = () => {
  const [empleados, setEmpleados] = useState([]);
  const [form, setForm] = useState({ nombre: '', apellido: '' });
  const [editId, setEditId] = useState(null);

  const fetchEmpleados = async () => {
    const res = await fetch('http://localhost:3001/api/empleados');
    const data = await res.json();
    setEmpleados(data);
  };

  useEffect(() => {
    fetchEmpleados();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (editId) {
      await fetch(`http://localhost:3001/api/empleados/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } else {
      await fetch('http://localhost:3001/api/empleados', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }

    setForm({ nombre: '', apellido: '' });
    setEditId(null);
    fetchEmpleados();
  };

  const handleEdit = (empleado) => {
    setForm({ nombre: empleado.nombre, apellido: empleado.apellido });
    setEditId(empleado._id);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3001/api/empleados/${id}`, {
      method: 'DELETE',
    });
    fetchEmpleados();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Empleados</h1>
      <input name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} className="border p-2 m-1" />
      <input name="apellido" placeholder="Apellido" value={form.apellido} onChange={handleChange} className="border p-2 m-1" />
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-3 py-1 rounded">{editId ? 'Actualizar' : 'Crear'}</button>

      <ul className="mt-4 space-y-2">
        {empleados.map((e) => (
          <li key={e._id} className="border p-2 rounded flex justify-between items-center">
            <span>{e.nombre} {e.apellido}</span>
            <div className="space-x-2">
              <button onClick={() => handleEdit(e)} className="text-yellow-500">✏️</button>
              <button onClick={() => handleDelete(e._id)} className="text-red-600">🗑️</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmpleadosPage;
