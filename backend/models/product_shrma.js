import mongoose from 'mongoose';


const reviewSchema = new mongoose.Schema({
    rating: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    userdetails: {
        type: mongoose.Types.ObjectId,
        ref: "auth"
    }
},
    {
        timestamps: true
    })

const LikeUser = new mongoose.Schema({
    likeName: {
        type: String,
        required: true,
        enum: ["👍like", "❤️heart", "🥰love", "😆smile", "😃happy", "🥲sad", "😡angry"],
    },
    userdetails: {
        type: mongoose.Types.ObjectId,
        ref: "auth"
    }
},
    {
        timestamps: true
    })



const FavortsProductShema = new mongoose.Schema({
    user: {
        type: mongoose.Types.ObjectId,
        required: true,
        ref: "auth"
    }
},
    {
        timestamps: true
    })

const product_shema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    unit: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    discount: {
        type: String,
        required: true
    },
    availability: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    reviews: [reviewSchema],
    like: [LikeUser],
    buystatus: {
        type: Boolean,
        default: false
    },
    productFavortStatus: {
        type: Boolean,
        default: false
    },
    productFavorts: [FavortsProductShema]
},
    {
        timestamps: true
    });

mongoose.models = {}

export default mongoose.model("product", product_shema);