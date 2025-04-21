import mongoose from 'mongoose';

const TareaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'El título es requerido'],
    trim: true,
    maxlength: [100, 'El título no puede exceder 100 caracteres']
  },
  empleado: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Empleado',
    required: [true, 'El empleado es requerido']
  },
  proyecto: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Proyecto',
    required: [true, 'El proyecto es requerido']
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
    enum: ['pendiente', 'en-progreso', 'completada'],
    default: 'pendiente'
  }
}, {
  timestamps: true
});

// Populate automático para empleado y proyecto
TareaSchema.pre(/^find/, function(next) {
  this.populate('empleado').populate('proyecto');
  next();
});

export default mongoose.model('Tarea', TareaSchema);