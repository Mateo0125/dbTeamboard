import mongoose from "mongoose";

// aqui recogemos la informacion y que cumpla la estructura que esta en "roleSchema"
const roleSchema = new mongoose.Schema({
  name: String,
  description: String,
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

// aqui ya con la informacion de arriba crea la collections en mongoDB
const role = mongoose.model("roles", roleSchema);

export default role;
