const { Sequelize } = require('sequelize');
require('dotenv').config();


const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql'
});

// Test the connection
const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

// Call the test function
testConnection();

module.exports = sequelize;
// const mysql = require('mysql');
// require('dotenv').config();

// // Create a connection to the database
// const connection = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user:  process.env.DB_USER,
//   password:  process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// // Connect to the database
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//     return;
//   }
//   console.log('Connected to the database.');
// });

// module.exports = connection;