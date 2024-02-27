import mongoose from 'mongoose';


const cart_Shema = new mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "product"
    },
    userdetails: {
        type: String,
        required: true,
    }
},
    {
        timestamps: true
    })

mongoose.models = {};

export default mongoose.model("cart", cart_Shema);