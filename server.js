const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const morgan = require('morgan');
const cors = require('cors');

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
app.use(cors());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/customer', customer);

const PORT = process.env.PORT || 5000;

// Serve static asset in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

// Error handler
app.use(errorHandler);

// Invalid route handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Invalid Route' });
});

const server = app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} on ${PORT}`);
});

// Handle Unhandled rejections
// eslint-disable-next-line no-unused-vars
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}`.red);
  // Close server and exit process
  // eslint-disable-next-line no-undef
  server.close(() => process.exit(1));
});
