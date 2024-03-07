import mongoose from 'mongoose';


const Favort_product_shema = new mongoose.Schema({
    productId: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "product"
    },
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "auth"
    },
},
    {
        timestamps: true
    })
mongoose.models = {};
export default mongoose.model("favorts", Favort_product_shema);
