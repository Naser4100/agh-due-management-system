const router = require('express').Router();

const { addCustomer, getCustomers, deleteCustomer } = require('../controllers/customerController');

router.route('/')
  .post(addCustomer)
  .get(getCustomers);

router.route('/:id').delete(deleteCustomer);

module.exports = router;
