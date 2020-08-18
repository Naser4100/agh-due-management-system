const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
  },
  fatherName: {
    type: String,
    required: [true, 'Father name is required'],
  },
  village: {
    type: String,
    required: [true, 'Village is required'],
  },
  policeStation: {
    type: String,
    required: [true, 'Police station is required'],
  },
  district: {
    type: String,
    required: [true, 'District is required'],
  },
  phone: {
    type: String,
    required: [true, 'Phone is required'],
  },
  totalDue: {
    type: Number,
    required: [true, 'Total due is required'],
  },
  deposited: {
    type: Number,
    required: [true, 'Deposited amount is required'],
  },
  dateAdded: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('customer', CustomerSchema);
