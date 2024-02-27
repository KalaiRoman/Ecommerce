import auth_shema from "../../models/auth_shema.js";
import unknow_cart_shema from "../../models/unknow_cart_shema.js";

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

export const LoginUser = async (req, res, next) => {
    try {
        const { email, olduser } = req.body;

        const existusers = await auth_shema.findOne({ email: email });
        if (existusers?._id) {
            await unknow_cart_shema.updateMany({ userdetails: olduser }, { $set: { userdetails: existusers?._id } }, function (err) {
                console.log(err);
            });
        }
        if (!existusers) res.status(404).json({ message: "User Not Register register" })
        res.status(200).json({ message: "User Logged" })
    } catch (error) {

    }
}