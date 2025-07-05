const mongoose = require('mongoose');

const LoanSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  loanType: { type: String, required: true },
  amount: { type: Number, required: true },
  message: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Loan', LoanSchema); 