const router = require('express').Router();

const { addCustomer, getCustomers } = require('../controllers/customerController');

router.route('/')
  .post(addCustomer)
  .get(getCustomers);

module.exports = router;
