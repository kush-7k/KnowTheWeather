
// module.exports = router;
const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/User');

router.get('/login', (req, res) => {
  res.render('login', { title: 'Login' });
});

router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login',
  failureFlash: true,
}));


router.get('/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
    // Redirect or respond after logout
    res.redirect('/');
  });
});



router.get('/register', (req, res) => {
  res.render('register', { title: 'Sign Up' });
});

router.post('/register', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/users/register',
  failureFlash: true,
}));

module.exports = router;



