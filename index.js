// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const dotenv = require('dotenv');
// const cors = require('cors');
// const userRoutes = require('./routes/user.routes');
// const taskRoutes = require('./routes/task.routes');
// dotenv.config();

// app.use(express.json());
// app.use(bodyParser.json());

// app.use('/api/users', userRoutes);
// app.use('/api/tasks', taskRoutes);

// const PORT = process.env.PORT || 5000;
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const taskRoutes = require('./routes/task.routes');
const app = express();

app.use(cors({
        origin: "https://chipper-torte-8a0d77.netlify.app",
        methods: "GET, POST, PUT, DELETE",
        credentials: true
})); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

