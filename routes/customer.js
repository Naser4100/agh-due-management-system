const router = require('express').Router();

const { addCustomer } = require('../controllers/customerController');

router.route('/')
  .post(addCustomer);

module.exports = router;
