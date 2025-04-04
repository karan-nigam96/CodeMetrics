import mongoose from 'mongoose';


const listSchema = new mongoose.Schema({
    userid: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true, 
        unique: true 
    }, 
    usernames: [
        { 
            type: String, 
            required: true 
        }
    ], 
});

const List = mongoose.model("list", listSchema);

export default List;
