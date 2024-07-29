const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const Task = sequelize.define('Task', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});

module.exports = Task;

// const mysql = require('mysql');
// const connection = require ("../config/db.config");
// const createTaskTable = `
// CREATE TABLE IF NOT EXISTS Task (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   title VARCHAR(255) NOT NULL,
//   description TEXT,
//   userId INT NOT NULL,
//   createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//   updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
// )
// `;
// connection.query(createTaskTable, (err, results, fields) => {
// if (err) {
//   console.error('Error creating Task table:', err);
//   return;
// }
// console.log('Task table created.');
// });

// // Insert a sample task into the Task table
// const insertTask = `
//   INSERT INTO Task (title, description, userId)
//   VALUES ('Sample Task', 'This is a sample task description', 1)
// `;
// connection.query(insertTask, (err, results, fields) => {
//   if (err) {
//     console.error('Error inserting task:', err);
//     return;
//   }
//   console.log('Task inserted.');
// })

// module.exports={createTaskTable, insertTask}

