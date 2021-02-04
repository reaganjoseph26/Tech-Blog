const express = require('express');
const path = require('path');
const controllers = require('./controllers/home-routes')

const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

var app = express();


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(controllers);
 
app.listen(3001);


// app.use(require('./controllers/'));

// sequelize.sync({ force: false }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });