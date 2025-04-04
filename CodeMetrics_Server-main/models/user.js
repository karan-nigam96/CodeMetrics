import mongoose from 'mongoose';

const uri = "mongodb+srv://atlas-sample-dataset-load-67f0325344e062087d31ed6f:<db_password>@cluster0.yw0f15y.mongodb.net/?retryWrites=true&w=majority&appName=Clus";

mongoose.connect(uri);

const userSchema = new mongoose.Schema({
    email: String,
    password: String,
});

const User = mongoose.model("users", userSchema);

export default User;
