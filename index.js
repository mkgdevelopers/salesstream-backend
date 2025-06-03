const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(cors({
  origin:'http://localhost:5173'
}));
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));

// Routes
const contactRoutes = require('./routes/contact');
const helpRoutes = require('./routes/help');
const benefitRoutes = require('./routes/benefit');
const nightmareRoutes = require('./routes/nightmare');
const solutions = require('./routes/solution')

app.use('/api/contact', contactRoutes);
app.use('/api/help', helpRoutes);
app.use('/api/benefits', benefitRoutes);
app.use('/api/nightmares', nightmareRoutes);
app.use('/api/solutions', solutions)

// Root Route (Optional)
app.get('/', (req, res) => {
  res.send('Backend is running...');
});

// Start Server
app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
