const asyncHandler = require('../middleware/async');
const ErrorResponse = require('../utils/errorResponse');

const Customer = require('../models/Customer');

// @desc    Add new customer
// @route   POST /api/customer
// @access  Private
exports.addCustomer = asyncHandler(async (req, res) => {
  const customer = await Customer.create(req.body);
  res.status(201).json({ success: true, data: customer });
});
