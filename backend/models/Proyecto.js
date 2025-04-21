import mongoose from 'mongoose';

const ProyectoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: [true, 'El nombre del proyecto es requerido'],
    trim: true,
    maxlength: [100, 'El nombre no puede exceder 100 caracteres']
  },
  descripcion: {
    type: String,
    trim: true,
    maxlength: [500, 'La descripción no puede exceder 500 caracteres']
  }
}, {
  timestamps: true
});

export default mongoose.model('Proyecto', ProyectoSchema);