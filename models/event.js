<<<<<<< HEAD
const mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    date: {type:Date,
        default:Date.now
    },
    author: {
        id:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"User"
        },
        username : String,
    },
    review: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
});

=======
const mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String,
    date: {type:Date,
        default:Date.now
    },
    author: {
        id:{
                type: mongoose.Schema.Types.ObjectId,
                ref:"User"
        },
        username : String,
    },
    review: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Review"
        }
    ],
});

>>>>>>> 0b23a85... Adding Screenshots
module.exports = mongoose.model("Event",eventSchema)