import mongoose from 'mongoose';

const image_Shema = new mongoose.Schema({
    image: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "auth"
    }
},
    {
        timestamps: true
    })

mongoose.models = {};
export default mongoose.model("image", image_Shema);