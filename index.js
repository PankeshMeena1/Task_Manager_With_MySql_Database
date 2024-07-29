

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');
require('dotenv').config();

app.use(cors({
  origin: 'https://your-frontend-domain.com', // Allow requests from your frontend domain
}));
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

