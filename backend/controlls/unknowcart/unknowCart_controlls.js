import cart_shema from "../../models/cart_shema.js";


export const createCart = async (req, res) => {
    try {
        const { productId, userdetails } = req.body;
        const existusers = await cart_shema.findOne({ productId: productId });
        const existusers1 = await cart_shema.findOne({ userdetails: userdetails });

        if (existusers && existusers1) {
            return res.status(404).json({ message: "already added to cart" })
        }
        const response = await cart_shema({
            productId: productId, userdetails: userdetails
        })
        await response.save();
        res.status(201).json({ message: "cart added" })
    } catch (error) {

    }
}
export const getCart = async (req, res) => {
    try {
        const { userid } = req.body;
        const response = await cart_shema.find({ userdetails: userid }).populate("productId");
        res.status(200).json({ message: "success", data: response })
    } catch (error) {

    }
}