const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoute');
const bookRoutes = require('./routes/bookRouter');
const transactionRoutes = require('./routes/transactionRouter');

dotenv.config()

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('Failed to connect to MongoDB', err));

app.use('/api/users', userRoutes);
app.use('/api/transactions',transactionRoutes);
app.use('/api/books',bookRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});