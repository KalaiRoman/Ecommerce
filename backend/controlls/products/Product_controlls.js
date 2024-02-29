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

export const Likeproduct = async (req, res) => {
    const { productid, userid, likeName } = req.body;
    try {

        const data = {
            likeName: likeName,
            userdetails: userid
        }


        const likeuserIds = [];

        const existUsers = await product_shrma.findById({ _id: productid });

        existUsers?.like?.map((item, index) => {
            likeuserIds?.push(item?.userdetails?.valueOf());
        })

        console.log(likeuserIds, 'likeuserIds')

        if (likeuserIds.includes(userid)) {
            const resopnse = await product_shrma.findByIdAndUpdate({ _id: productid }, { $pull: { like: data } }, { new: true });
            res.status(200)?.json({ message: "Like This Product", data: resopnse })
        }
        else {
            const resopnse = await product_shrma.findByIdAndUpdate({ _id: productid }, { $push: { like: data } }, { new: true });
            res.status(200)?.json({ message: "Like This Product", data: resopnse })
        }

    } catch (error) {
        console.log(error)
    }
}



export const LikeUpdateproduct = async (req, res) => {

    try {
        const { productid, likeName, likeId } = req.body;
        const existUsers = await product_shrma.findById({ _id: productid });
        const likeuserIds = existUsers?.like?.find((item) => item?._id == likeId);
        likeuserIds.likeName = likeName;
        await existUsers.save({ validateBeforeSave: false });
        res.status(200)?.json({ message: "Like This Product" })

    } catch (error) {
        console.log(error)
    }
}


export const Commentproduct = async (req, res) => {

    try {
        const { rating, description, userid, productid } = req.body;

        const data = {
            userdetails: userid,
            description: description,
            rating: rating
        }
        await product_shrma.findByIdAndUpdate({ _id: productid }, { $push: { reviews: data } }, { new: true });
        res.status(200)?.json({ message: "You Comment This Product" })
    } catch (error) {
        console.log(error)
    }
}


export const CommentUpdateproduct = async (req, res) => {

    try {
        const { rating, description, commentid, productid } = req.body;
        const getProduct = await product_shrma.findById({ _id: productid });
        const response = getProduct?.reviews?.find((item) => item?._id === commentid);
        response.description = description;
        response.rating = rating
        await getProduct.save({ validateBeforeSave: false })
        res.status(200)?.json({ message: "You Comment Updated This Product" })
    } catch (error) {
        console.log(error)
    }
}
