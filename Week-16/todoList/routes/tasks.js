const express = require('express');
const router = express.Router();
const tasks = [];

router.get('/tasks', (req, res) => {
  res.json(tasks);
});

router.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: Date.now(), title, description, completed: false };
  tasks.push(newTask);
  res.json(newTask);
});

router.get('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    res.status(404).json({ error: 'Task not found' });
  } else {
    res.json(task);
  }
});

router.put('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const task = tasks.find((t) => t.id === taskId);
  if (!task) {
    res.status(404).json({ error: 'Task not found' });
  } else {
    const { title, description, completed } = req.body;
    task.title = title;
    task.description = description;
    task.completed = completed;
    res.json(task);
  }
});

router.delete('/tasks/:id', (req, res) => {
  const taskId = parseInt(req.params.id);
  const taskIndex = tasks.findIndex((t) => t.id === taskId);
  if (taskIndex === -1) {
    res.status(404).json({ error: 'Task not found' });
  } else {
    tasks.splice(taskIndex, 1);
    res.json({ message: 'Task deleted' });
  }
});

module.exports = router;
