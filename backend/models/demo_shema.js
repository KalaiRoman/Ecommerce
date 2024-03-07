import mongoose from 'mongoose';



const Demo_shema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "auth"
    }
},
    {
        timestamps: true
    })

mongoose.models = {};

export default mongoose.model("demo", Demo_shema);