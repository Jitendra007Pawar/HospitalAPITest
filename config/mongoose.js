//require mongoose

const mongoose = require('mongoose');

//setup DB
mongoose.connect('mongodb://localhost/hospital', {useNewUrlParser: true, useUnifiedTopology: true, 'useCreateIndex': true});

//connect to DB
const db = mongoose.connection;

//on error
db.on('error', console.error.bind(console, 'connection error:'));

//once connection is open
db.once('open',()=> {
    console.log('Connected to DB');
});