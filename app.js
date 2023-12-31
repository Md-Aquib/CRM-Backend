const express = require('express');
const db = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(express.json());

// Setting up CORS origin
const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};


// Use CORS
app.use(cors(corsOptions));

// Routes
app.use('/api/auth', require('./routes/Auth/auth'));
app.use('/api/publisher', require('./routes/Publishers/publisher'));
app.use('/api/salesperson', require('./routes/Salespersons/salesperson'));
app.use('/api/books', require('./routes/Publishers/books'));
app.use('/api/attendance', require('./routes/Salespersons/attendance'));
app.use('/api/travelling-expense', require('./routes/Salespersons/travellingExpense'));
app.use('/api/travelling-claims', require('./routes/Salespersons/travellingClaims'));

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// Database connection
db.sync()
  .then(() => console.log('Database connected'))
  .catch((err) => console.error('Error connecting to the database:', err));

