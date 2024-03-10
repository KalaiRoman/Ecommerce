import CouponCode_shema from "../../models/CouponCode_shema.js";

export const createCoupon = async (req, res) => {
    const { couponName,
        discount,
        salePrice, discountPrice } = req.body;
    try {
        const discountValue = discount / 100;
        const CalcultePrice = Math.round(salePrice - (salePrice * discountValue));
        const existingCouponCheck = await CouponCode_shema.findOne({ couponName: couponName })
        if (existingCouponCheck) {
            return res.status(404).json({ message: "Coupon Name Alredy Existing" })
        }
        else {
            const response = await CouponCode_shema({
                couponName: couponName,
                discount: discount,
                salePrice: salePrice,
                discountPrice: CalcultePrice
            })

            await response.save();
            return res.status(201).json({ message: response })
        }


    } catch (error) {
        return res.status(404).json({ message: error })
    }
}