// routes/index.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Weather CRUD App', user: req.user });
});

module.exports = router;
