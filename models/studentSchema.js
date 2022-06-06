const mongoose = require("mongoose");


const studentSchema = mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    }
})


module.exports = mongoose.model('StudentData', studentSchema);