const mongoose = require('mongoose');

//This will create a database named "person" if one doesn't already exist
mongoose.connect("mongodb://127.0.0.1:27017/authors", { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to database"))
    .catch(err => console.log("Something went wrong when connecting to the database", err));

