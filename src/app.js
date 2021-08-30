const express = require('express');
const morgan = require('morgan');
const app = express();
const indexRoutes = require('./routes/index');


app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }))
app.use(express.json());

app.use('/', indexRoutes);

const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});