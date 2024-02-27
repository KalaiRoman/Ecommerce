import mongoose from 'mongoose';
const auth_Shema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    role: {
        type: String,
        enum: ["user", "admin", "seller"],
        required: true
    },

}, {
    timestamps: true
});
mongoose.models = {};
export default mongoose.model("auth", auth_Shema);