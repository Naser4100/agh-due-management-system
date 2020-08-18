const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const errorHandler = require('./middleware/error');
const connectDB = require('./config/db');

// Routes files
const customer = require('./routes/customer');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Database Connection
connectDB();

const app = express();

// Body parse
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/customer', customer);

const PORT = process.env.PORT || 5000;

// Error handler
app.use(errorHandler);

// Invalid route handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Invalid Route' });
});

app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`));

// Handle Unhandled rejections
// eslint-disable-next-line no-unused-vars
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  // eslint-disable-next-line no-undef
  server.close(() => process.exit(1));
});
