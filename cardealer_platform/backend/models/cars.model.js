const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carsSchema = new Schema({
  username: { type: String, required: true },
  carregisno: { type: Number, required: true },
  carcolor: { type: String, required: true },
  carmodel: { type: String, required: true },
  dealerpincode: { type: Number, required: true },
}, {
  timestamps: true,
});

const Cars = mongoose.model('Cars', carsSchema);

module.exports = Cars;