import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true,
    },
    LastName: {
        type: String,
        required:true,
    },
    Email: String,
    firstName: {
        type: Boolean,
        required:true,
    },
});

export default mongoose.model('User', Schema);