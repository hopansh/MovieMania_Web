<<<<<<< HEAD
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    
})
UserSchema.plugin(passportLocalMongoose);

=======
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    
})
UserSchema.plugin(passportLocalMongoose);

>>>>>>> 0b23a85... Adding Screenshots
module.exports = mongoose.model("User",UserSchema);