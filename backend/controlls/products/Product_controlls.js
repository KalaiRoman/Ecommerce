import product_shrma from "../../models/product_shrma.js"



export const Createproduct = async (req, res) => {
    try {
        const resopnse = await product_shrma({});
        await response.save();
    } catch (error) {

    }
}

export const Getproduct = async (req, res) => {
    try {
        const resopnse = await product_shrma.find({}).lean();
        res.status(200)?.json({ message: "success", data: resopnse })
    } catch (error) {
        console.log(error)
    }
}