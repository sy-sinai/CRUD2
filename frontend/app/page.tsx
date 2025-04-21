import Image from "next/image";
import Link from "next/link"; // Importa Link para navegación interna

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Bienvenido al Gestor de Proyectos</h2>
      <p className="text-gray-700 dark:text-gray-300">
        Selecciona una sección desde el menú para comenzar.
      </p>
    </div>
  )
}
