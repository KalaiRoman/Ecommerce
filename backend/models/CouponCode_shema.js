import mongoose from 'mongoose';


const coupon_Shema = new mongoose.Schema({
    couponName: {
        type: String,
        required: true,
        unique: true
    },
    discount: {
        type: Number,
        required: true,
    },
    salePrice: {
        type: Number,
        required: true
    },
    discountPrice: {
        type: Number,
        required: true
    }
},
    {
        timestamps: true
    })

mongoose.models = {};
export default mongoose.model("coupon", coupon_Shema);