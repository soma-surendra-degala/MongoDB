const mongoose = require('mongoose');
const schema = mongoose.schema;

const userSchema = new Schema({
    name: String,
    age: Number
})

const User = mongoose.model('users',userSchema);
 
module.exports = User;