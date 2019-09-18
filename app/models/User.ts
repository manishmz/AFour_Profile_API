const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String },
    lastName: { type: String },
    empoyeeId: { type: String },
    email: { type: String },
    dateOfBirth: { type: Date }
});

export default mongoose.model('User', userSchema);