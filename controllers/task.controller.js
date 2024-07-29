
const Task = require('../models/task.model');

exports.createTask = async (req, res) => {
  const { title, description } = req.body;
  const userId = req.userId;

  try {
    const task = await Task.create({ title, description, userId });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTasks = async (req, res) => {
  const userId = req.userId;

  try {
    const tasks = await Task.findAll({ where: { userId } });
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTask = async (req, res) => {
  const { id } = req.params;
  const { title, description } = req.body;

  try {
    const task = await Task.findByPk(id);

    if (!task || task.userId !== req.userId) {
      return res.status(404).json({ message: 'Task not found' });
    }

    task.title = title || task.title;
    task.description = description || task.description;

    await task.save();

    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTask = async (req, res) => {
  const { id } = req.params;

  try {
    const task = await Task.findByPk(id);

    if (!task || task.userId !== req.userId) {
      return res.status(404).json({ message: 'Task not found' });
    }

    await task.destroy();

    res.status(200).json({ message: 'Task deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// exports.createTask = (req, res) => {
//   const { title, description } = req.body;
//   const userId = req.userId;

//   const query = 'INSERT INTO Tasks (title, description, userId) VALUES (?, ?, ?)';

//  connection.query(query, [title, description, userId], (error, results) => {
//     if (error) {
//       return res.status(500).json({ error: error.message });
//     }

//     res.status(201).json({ id: results.insertId, title, description, userId });
//   });
// };
// exports.getTasks = (req, res) => {
//   const userId = req.userId;

//   const query = 'SELECT * FROM tasks WHERE userId = ?';

//   connection.query(query, [userId], (error, results) => {
//     if (error) {
//       return res.status(500).json({ error: error.message });
//     }

//     res.status(200).json(results);
//   });
// };
// const connection = require('../config/db.config');

// exports.createTask = (req, res) => {
//   const { title, description } = req.body;
//   const userId = req.userId;

//   const query = 'INSERT INTO tasks (title, description, userId) VALUES (?, ?, ?)';
//   connection.query(query, [title, description, userId], (error, results) => {
//     if (error) {
//       return res.status(500).json({ error: error.message });
//     }
//     res.status(201).json({ id: results.insertId, title, description, userId });
//   });
// };

// exports.getTasks = (req, res) => {
//   const userId = req.userId;

//   const query = 'SELECT * FROM tasks WHERE userId = ?';
//   connection.query(query, [userId], (error, results) => {
//     if (error) {
//       return res.status(500).json({ error: error.message });
//     }
//     res.status(200).json(results);
//   });
// };

// exports.updateTask = (req, res) => {
//   const { id } = req.params;
//   const { title, description } = req.body;
//   const userId = req.userId;

//   const query = 'SELECT * FROM tasks WHERE id = ?';
//   connection.query(query, [id], (error, results) => {
//     if (error) {
//       return res.status(500).json({ error: error.message });
//     }

//     if (results.length === 0 || results[0].userId !== userId) {
//       return res.status(404).json({ message: 'Task not found' });
//     }

//     const updateQuery = 'UPDATE tasks SET title = ?, description = ? WHERE id = ?';
//     connection.query(updateQuery, [title || results[0].title, description || results[0].description, id], (updateError) => {
//       if (updateError) {
//         return res.status(500).json({ error: updateError.message });
//       }
//       res.status(200).json({ id, title: title || results[0].title, description: description || results[0].description });
//     });
//   });
// };

// exports.deleteTask = (req, res) => {
//   const { id } = req.params;
//   const userId = req.userId;

//   const query = 'SELECT * FROM tasks WHERE id = ?';
//   connection.query(query, [id], (error, results) => {
//     if (error) {
//       return res.status(500).json({ error: error.message });
//     }

//     if (results.length === 0 || results[0].userId !== userId) {
//       return res.status(404).json({ message: 'Task not found' });
//     }

//   });
// };



