import image_Shema from "../../models/image_Shema.js";


export const imageCreate = async (req, res, next) => {
    try {
        const { image, userid } = req.body;
        const response = await image_Shema({
            image,
            user: userid,
        })
        await response.save();
        res.status(201).json({ message: "save images" })
    } catch (error) {
    }
}

export const imageFind = async (req, res, next) => {
    try {
        const { userid } = req.body;
        const response = await image_Shema.find({ user: userid }).populate("user");
        // const response1 = await image_Shema.find({ user: userid }).populate("user").countDocuments();
        // console.log(response1, 'response1')
        res.status(200).json({ message: "success", data: response, count: response?.length });
    } catch (error) {

    }
}