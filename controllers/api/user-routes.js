const router = require('express').Router();
const User = require('../../models')

router.get('/users', (req, res) => {
    User.findAll({

    }).then(results => {
        res.send(results)
    });
});

router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }).then( newUser=> {
        res.send(newUser)
    })
});

module.exports = router;

