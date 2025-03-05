const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(logger);

app.use('/users', userRoutes);
app.use('/products', productRoutes);

// Handle root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the Express Assignment API!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
