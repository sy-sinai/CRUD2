'use client';
import { useState } from 'react';

const BuscarTareas = () => {
  const [fechaInicio, setFechaInicio] = useState('');
  const [fechaFin, setFechaFin] = useState('');
  const [resultados, setResultados] = useState([]);

  const buscarTareas = async () => {
    try {
      const res = await fetch(`http://localhost:3001/api/tareas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`);
      const data = await res.json();
      setResultados(data);
    } catch (error) {
      console.error('Error al filtrar:', error);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Buscar Tareas por Fecha</h1>
      <div className="space-y-4 mb-4">
        <input type="date" value={fechaInicio} onChange={(e) => setFechaInicio(e.target.value)} className="border p-2" />
        <input type="date" value={fechaFin} onChange={(e) => setFechaFin(e.target.value)} className="border p-2 ml-4" />
        <button onClick={buscarTareas} className="bg-green-600 text-white px-4 py-2 ml-4 rounded">Buscar</button>
      </div>

      <ul className="space-y-4">
        {resultados.map(tarea => (
          <li key={tarea._id} className="border p-4 rounded">
            <p><strong>{tarea.titulo}</strong></p>
            <p>Estado: {tarea.estado}</p>
            <p>Empleado: {tarea.empleado?.nombre}</p>
            <p>Proyecto: {tarea.proyecto?.nombre}</p>
            <p>Inicio: {new Date(tarea.fechaInicio).toLocaleDateString()}</p>
            <p>Fin: {tarea.fechaFin ? new Date(tarea.fechaFin).toLocaleDateString() : 'N/A'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BuscarTareas;
