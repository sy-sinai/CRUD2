import mongoose from 'mongoose' ;
const EmpleadoSchema = new.mongoose.Schema({
    nombre: {
        type: String,
        required: true,
        trim: true
    },
    apellido: {
        type: String,
        required: true,
        trim: true
    },
    cargo: {
        type: String,
        required: true,
        trim: true
    },
});

export default mongoose.model('Empleado',)