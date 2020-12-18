<<<<<<< HEAD
const mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }

});

module.exports = mongoose.model("Review",reviewSchema);

=======
const mongoose = require('mongoose');

var reviewSchema = new mongoose.Schema({
    text: String,
    author: {
        id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        username: String
    }

});

module.exports = mongoose.model("Review",reviewSchema);

>>>>>>> 0b23a85... Adding Screenshots
