const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/scatch").then(() => { console.log("Connected") }).catch((err) => { console.log(err) });

module.exports=module.connection;
