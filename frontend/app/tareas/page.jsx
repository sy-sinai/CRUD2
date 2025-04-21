'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const TareasPage = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    const fetchTareas = async () => {
      try {
        const res = await fetch('http://localhost:3001/api/tareas');
        if (!res.ok) throw new Error('No se pudo cargar tareas');
        const data = await res.json();
        setTareas(data);
      } catch (err) {
        console.error('Error al cargar tareas:', err);
      }
    };

    fetchTareas();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Lista de Tareas</h1>
      <Link href="/tareas/crear" className="text-blue-500 hover:underline">
        ➕ Crear Nueva Tarea
      </Link>
      <Link href="/tareas/buscar" className="ml-4 text-green-500 hover:underline">
        🔍 Buscar por fecha
      </Link>

      <ul className="mt-4 space-y-4">
        {tareas.map((tarea) => (
          <li key={tarea._id} className="border p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">{tarea.titulo}</h2>
            <p>Estado: <strong>{tarea.estado}</strong></p>
            <p>Empleado: {tarea.empleado?.nombre} {tarea.empleado?.apellido}</p>
            <p>Proyecto: {tarea.proyecto?.nombre}</p>
            <p>Fecha inicio: {new Date(tarea.fechaInicio).toLocaleDateString()}</p>
            <p>Fecha fin: {tarea.fechaFin ? new Date(tarea.fechaFin).toLocaleDateString() : 'No definida'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TareasPage;
