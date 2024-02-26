import mongoose from 'mongoose';
const unknown_Shema = new mongoose.Schema({
    unknown: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
mongoose.models = {};
export default mongoose.model("unknownuser", unknown_Shema);