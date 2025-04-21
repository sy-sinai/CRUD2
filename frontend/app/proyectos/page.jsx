'use client';
import { useEffect, useState } from 'react';

const ProyectosPage = () => {
  const [proyectos, setProyectos] = useState([]);
  const [form, setForm] = useState({ nombre: '', descripcion: '' });
  const [editId, setEditId] = useState(null);

  const fetchProyectos = async () => {
    const res = await fetch('http://localhost:3001/api/proyectos');
    const data = await res.json();
    setProyectos(data);
  };

  useEffect(() => {
    fetchProyectos();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    if (editId) {
      await fetch(`http://localhost:3001/api/proyectos/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    } else {
      await fetch('http://localhost:3001/api/proyectos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
    }

    setForm({ nombre: '', descripcion: '' });
    setEditId(null);
    fetchProyectos();
  };

  const handleEdit = (proyecto) => {
    setForm({ nombre: proyecto.nombre, descripcion: proyecto.descripcion });
    setEditId(proyecto._id);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3001/api/proyectos/${id}`, {
      method: 'DELETE',
    });
    fetchProyectos();
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Proyectos</h1>
      <input
        name="nombre"
        placeholder="Nombre"
        value={form.nombre}
        onChange={handleChange}
        className="border p-2 m-1"
      />
      <input
        name="descripcion"
        placeholder="Descripción"
        value={form.descripcion}
        onChange={handleChange}
        className="border p-2 m-1"
      />
      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-3 py-1 rounded"
      >
        {editId ? 'Actualizar Proyecto' : 'Crear Proyecto'}
      </button>

      <ul className="mt-4 space-y-2">
        {proyectos.map((p) => (
          <li
            key={p._id}
            className="border p-2 rounded flex justify-between items-center"
          >
            <div>
              <p className="font-semibold">{p.nombre}</p>
              <p className="text-sm text-gray-600">{p.descripcion}</p>
            </div>
            <div className="space-x-2">
              <button
                onClick={() => handleEdit(p)}
                className="text-yellow-500"
              >
                ✏️
              </button>
              <button
                onClick={() => handleDelete(p._id)}
                className="text-red-600"
              >
                🗑️
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProyectosPage;
