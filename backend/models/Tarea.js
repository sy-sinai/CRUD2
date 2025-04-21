import mongoose from 'mongoose';

const TareaSchema = new mongoose.Schema({
    titulo: { 
      type: String, 
      required: true 
    },
    empleado: { 
      type: mongoose.Schema.Types.ObjectId, // Relación con Empleado
      ref: 'Empleado',                     // Referencia al modelo Empleado
      required: true
    },
    proyecto: { 
      type: mongoose.Schema.Types.ObjectId, // Relación con Proyecto
      ref: 'Proyecto',
      required: true
    },
    fechaInicio: { 
      type: Date, 
      default: Date.now 
    },
    fechaFin: { 
      type: Date 
    },
    estado: { 
      type: String, 
      enum: ['pendiente', 'en-progreso', 'completada'], // Solo estos valores
      default: 'pendiente'
    }
  });
  
  export default mongoose.model('Tarea', TareaSchema);