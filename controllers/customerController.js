const moment = require('moment');
const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

const Customer = require('../models/Customer');

// @desc    Add new customer
// @route   POST /api/customer
// @access  Private
exports.addCustomer = asyncHandler(async (req, res) => {
  // const dateTime = Date.now();
  req.body.dateAdded = moment(Date.now()).format('Do MMMM YYYY, h:mm:ss a');
  const customer = await Customer.create(req.body);
  res.status(201).json({ success: true, data: customer });
});

// @desc    Get all customer
// @route   GET /api/customer
// @access  Private
exports.getCustomers = asyncHandler(async (req, res) => {
  const customers = await Customer.find();
  res.status(200).json({ success: true, data: customers });
});

// @desc    Delete customer
// @route   DELETE /api/customer
// @access  Private
exports.deleteCustomer = asyncHandler(async (req, res) => {
  const result = await Customer.findByIdAndDelete(req.params.id);
  res.status(200).json({ success: true, data: `${result.name} deleted successfully` });
});
