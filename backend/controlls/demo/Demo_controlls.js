import demo_shema from "../../models/demo_shema.js"



export const createDemo = async (req, res) => {

    const { name, userid } = req.body
    try {

        const response = await demo_shema({
            name: name,
            userId: userid
        })

        await response.save();

        res.status(201).json({ message: "success" })

    } catch (error) {

    }
}

export const getDemo = async (req, res) => {

    const { userid } = req.body;

    console.log(userid, 'userid')

    try {
        const response = await demo_shema.find({ userId: { $in: [userid] } })
        // const response = await demo_shema.aggregate([{ $match: { userId: userid } }, { $count: "overall counts 10" }])
        console.log(response, 'response')
        res.status(200).json({ message: "success", data: response })
    } catch (error) {

    }
}