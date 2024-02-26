import browser_auth from "../../models/browser_auth.js";

export const create_unknowuser = async (req, res) => {
    const { unknown } = req.body;
    try {
        if (!unknown) res.status(404).json({ message: "unknow Id Required" });
        const existId = await browser_auth.findOne({ unknown }).lean();
        if (existId) {
            res.status(494).json({ message: "Userid Already Register" })
        }
        else {
            const response = await browser_auth({
                unknown
            });
            await response.save();
            res.status(201).json({ message: "User Created in UnknowUser" })
        }

    } catch (error) {
    }
}