import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Gestor de Proyectos",
  description: "Aplicación para gestionar proyectos, tareas y empleados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-h-screen bg-white text-black dark:bg-zinc-900 dark:text-white`}>
        {/* Menú lateral */}
        <aside className="w-64 h-screen p-6 bg-gray-100 dark:bg-zinc-800 flex flex-col gap-6">
          <h1 className="text-2xl font-bold">Gestor</h1>
          <nav className="flex flex-col gap-4">
            <Link href="/" className="hover:underline">Inicio</Link>
            <Link href="/proyectos" className="hover:underline">Proyectos</Link>
            <Link href="/tareas" className="hover:underline">Tareas</Link>
            <Link href="/empleados" className="hover:underline">Empleados</Link>
          </nav>
        </aside>

        {/* Contenido de cada página */}
        <main className="flex-1 p-8">{children}</main>
      </body>
    </html>
  );
}
