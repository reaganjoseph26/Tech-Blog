const router = require('express').Router();
// const sequelize = require('.');

router.get('/', function (req, res) {
    res.render('homepage');
});

router.get('/login', (req, res) => {
    if (req.session) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });

module.exports = router

