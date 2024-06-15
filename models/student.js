const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: { type: Number, required: true },
    email: { type: String, required: true },
    class:{type:Number,required:true},
    school:{type:String,required:true},
    address:{type:String,required:true}
});

module.exports = mongoose.model('Student', studentSchema);