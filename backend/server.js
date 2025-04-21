import express from 'express';
import mongoose from 'mongoose';
import empleadosRoutes from './routes/empleados'; 
import proyectosRoutes from './routes/proyectos';
import tareasRoutes from './routes/tareas';

const app = express(); 


app.use(express.json()); 


mongoose.connect('mongodb://localhost:27017/proyecto-mvc')
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error de conexión:', error));


app.use('/api/empleados', empleadosRoutes); 
app.use('/api/proyectos', proyectosRoutes);
app.use('/api/tareas', tareasRoutes);


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});