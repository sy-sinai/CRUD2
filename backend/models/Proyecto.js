import mongoose from 'mongoose';

const ProyectoSchema = new mongoose.Schema({
    nombre: { 
      type: String, 
      required: true 
    },
    descripcion: { 
      type: String, 
      default: 'Sin descripción' // Valor por defecto si no se proporciona
    },
    fechaCreacion: { 
      type: Date, 
      default: Date.now // Fecha actual automática
    }
  });
  
  export default mongoose.model('Proyecto', ProyectoSchema);