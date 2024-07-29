const { DataTypes } = require('sequelize');
const sequelize = require('../config/db.config');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  timestamps: true
});

module.exports = User;

// const mysql = require('mysql');
// const connection = require ("../config/db.config");

// const createUserTable = `
//     CREATE TABLE IF NOT EXISTS User (
//       id INT AUTO_INCREMENT PRIMARY KEY,
//       username VARCHAR(255) NOT NULL UNIQUE,
//       email VARCHAR(255) NOT NULL UNIQUE,
//       password VARCHAR(255) NOT NULL,
//       createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
//       updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
//     )
//   `;
//   connection.query(createUserTable, (err, results, fields) => {
//     if (err) {
//       console.error('Error creating User table:', err);
//       return;
//     }
//     console.log('User table created.');
//   });

//   module.exports = createUserTable;