import mongoose from 'mongoose';
const auth_Shema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["user", "admin", "seller"],
        required: true
    }
}, {
    timestamps: true
});
mongoose.models = {};
export default mongoose.model("auth", auth_Shema);