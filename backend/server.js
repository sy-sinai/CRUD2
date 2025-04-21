import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import empleadosRoutes from './routes/empleados.js';
import proyectosRoutes from './routes/proyectos.js';
import tareasRoutes from './routes/tareas.js';

const app = express();


// Middleware esencial
app.use(cors({
  origin: 'http://localhost:3000', // Asegúrate que coincida con tu frontend
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Conexión a MongoDB con manejo mejorado
mongoose.connect('mongodb://localhost:27017/proyecto-mvc', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB'))
.catch(err => console.error('❌ Error de conexión a MongoDB:', err));

// Rutas
app.use('/api/empleados', empleadosRoutes);
app.use('/api/proyectos', proyectosRoutes);
app.use('/api/tareas', tareasRoutes);

// Middleware de errores mejorado
app.use((err, req, res, next) => {
  console.error('🔴 Error:', err.stack);
  res.status(500).json({ error: 'Algo salió mal en el servidor' });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor backend en http://localhost:${PORT}`);
});