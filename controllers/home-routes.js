const router = require('express').Router();
// const sequelize = require('.');

router.get('/', function (req, res) {
    res.render('homepage');
});

module.exports = router

