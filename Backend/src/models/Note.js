import mongoose from "mongoose";
//creat a Schema
const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    content: {
        type: String,
        require: true,
    },
},
    { timestamps: true }
);

const Note = mongoose.model('Note', noteSchema);
export default Note