import auth_shema from "../../models/auth_shema.js";
import cart_shema from "../../models/cart_shema.js";

export const createUserNew = async (req, res, next) => {
    try {

        const { email, role } = req.body;
        const existusers = await auth_shema.findOne({ email: email });
        if (existusers) res.status(404).json({ message: "alredy register" })
        const response = await auth_shema({
            email, role
        })
        await response.save();
        res.status(201).json({ message: "User Created" })
    } catch (error) {

    }
}


const callbackes = async (olduser, _id) => {
    try {
        if (_id) {
            if (olduser) {
                await cart_shema.updateMany({ userdetails: olduser }, { $set: { userdetails: _id } }, { new: true });
            }
        }
    } catch (error) {

    }
}

export const LoginUser = async (req, res, next) => {
    try {
        const { email, olduser } = req.body;
        const existusers = await auth_shema.findOne({ email: email });
        if (olduser) {
            callbackes(olduser, existusers?._id)
        }
        if (!existusers) res.status(404).json({ message: "User Not Register register" })
        res.status(200).json({ message: "User Logged", data: existusers })
    } catch (error) {
    }
}

export const getUser = async (req, res, next) => {
    try {
        const { userid } = req.body;
        const response = await auth_shema.findOne({ _id: userid });
        res.status(200).json({ message: "User Logged", data: response })
    } catch (error) {
    }
}