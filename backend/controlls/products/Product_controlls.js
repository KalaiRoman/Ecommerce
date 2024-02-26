import product_shrma from "../../models/product_shrma.js"



export const Createproduct = async (req, res) => {
    try {

        const resopnse = await product_shrma({});
        await response.save();

    } catch (error) {

    }
}