import React, { useState, useEffect } from 'react'
import instanceBaseurl from '../../config/Baseurl';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import './Cart.css';
function Cart() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const userid = Cookies.get("userid");
        const data = {
            userid: userid
        }
        instanceBaseurl.post("/cart/get", data).then((res) => {
            setData(res?.data?.data);
        })
    }, []);
    const check = Cookies.get("userid");
    const history = useNavigate();

    return (
        <div className='w-[100%] overflow-hidden'>
            <h3 className='ml-6 fw-bold mb-5'>
                Cart{data?.length}

            </h3>
            {/* <div className=''>
                {data?.map((item, index) => {
                    return (
                        <div className='border  mb-3  w-[90%] mx-auto cursor-pointer p-3 flex gap-4' key={index}>
                            <div>
                                <img src={item?.productId?.image} alt="no image" style={{ width: "100px", height: "100px" }} />
                                <div className='mt-3 fw-bold text-2xl mt-3'>
                                    {item?.productId?.name}
                                </div>
                            </div>
                            <div className='text-center flex align-items-center justify-center fw-bold text-3xl'>
                                {item?.productId?.price}

                            </div>
                        </div>
                    )
                })}
            </div>

            {data?.length > 0 ? <>

                <div className='mt-5 flex align-items-center justify-content-center'>
                    {check ? <>
                        <button className='bg-blue-600 w-[10%] text-white align-items-center justify-center p-3 rounded hover:scale-100 hover:bg-orange-400'>Check out</button>
                    </> : <>
                        <button onClick={() => history("/login")} className='w-25 p-2 rounded outline-none border-spacing-2'>Login User</button>

                    </>}
                </div>
            </> : <>

            </>}

            {data?.length > 0 ? <></> : <div className='flex align-center border justify-center flex-col h-[100vh] w-[100%] gap-4 mx-auto text-center'>

                <div>
                    No Cart Data Shop More...
                </div>
                <div>
                    <button className='bg-blue-600 text-white hover:scale-105 w-[10%] p-2 rounded'

                        onClick={() => window.location.assign("/")}
                    >Shop More..</button>
                </div>
            </div>} */}


            <div>
                <div className="min-w-screen min-h-screen bg-gray-50 py-5">
                    <div className="px-5">
                        <div className="mb-2">
                            <a href="#" className="focus:outline-none hover:underline text-gray-500 text-sm"><i className="mdi mdi-arrow-left text-gray-400" />Back</a>
                        </div>
                        <div className="mb-2">
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-600">Checkout.</h1>
                        </div>
                        <div className="mb-5 text-gray-400">
                            <a href="#" className="focus:outline-none hover:underline text-gray-500">Home</a> / <a href="#" className="focus:outline-none hover:underline text-gray-500">Cart</a> / <span className="text-gray-600">Checkout</span>
                        </div>
                    </div>
                    <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
                        <div className="w-full">
                            <div className="-mx-3 md:flex items-start">
                                <div className="px-3 md:w-7/12 lg:pr-10">
                                    <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                                        <div className="w-full flex items-center">
                                            <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                                                <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt />
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <h6 className="font-semibold uppercase text-gray-600">Ray Ban Sunglasses.</h6>
                                                <p className="text-gray-400">x 1</p>
                                            </div>
                                            <div>
                                                <span className="font-semibold text-gray-600 text-xl">$210</span><span className="font-semibold text-gray-600 text-sm">.00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 pb-6 border-b border-gray-200">
                                        <div className="-mx-2 flex items-end justify-end">
                                            <div className="flex-grow px-2 lg:max-w-xs">
                                                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Discount code</label>
                                                <div>
                                                    <input className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="XXXXXX" type="text" />
                                                </div>
                                            </div>
                                            <div className="px-2">
                                                <button className="block w-full max-w-xs mx-auto border border-transparent bg-gray-400 hover:bg-gray-500 focus:bg-gray-500 text-white rounded-md px-5 py-2 font-semibold">APPLY</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                                        <div className="w-full flex mb-3 items-center">
                                            <div className="flex-grow">
                                                <span className="text-gray-600">Subtotal</span>
                                            </div>
                                            <div className="pl-3">
                                                <span className="font-semibold">$190.91</span>
                                            </div>
                                        </div>
                                        <div className="w-full flex items-center">
                                            <div className="flex-grow">
                                                <span className="text-gray-600">Taxes (GST)</span>
                                            </div>
                                            <div className="pl-3">
                                                <span className="font-semibold">$19.09</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                                        <div className="w-full flex items-center">
                                            <div className="flex-grow">
                                                <span className="text-gray-600">Total</span>
                                            </div>
                                            <div className="pl-3">
                                                <span className="font-semibold text-gray-400 text-sm">AUD</span> <span className="font-semibold">$210.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-3 md:w-5/12">
                                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                                        <div className="w-full flex mb-3 items-center">
                                            <div className="w-32">
                                                <span className="text-gray-600 font-semibold">Contact</span>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <span>Scott Windon</span>
                                            </div>
                                        </div>
                                        <div className="w-full flex items-center">
                                            <div className="w-32">
                                                <span className="text-gray-600 font-semibold">Billing Address</span>
                                            </div>
                                            <div className="flex-grow pl-3">
                                                <span>123 George Street, Sydney, NSW 2000 Australia</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                                        <div className="w-full p-3 border-b border-gray-200">
                                            <div className="mb-5">
                                                <label htmlFor="type1" className="flex items-center cursor-pointer">
                                                    <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type1" defaultChecked />
                                                    <img src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png" className="h-6 ml-3" />
                                                </label>
                                            </div>
                                            <div>
                                                <div className="mb-3">
                                                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Name on card</label>
                                                    <div>
                                                        <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Smith" type="text" />
                                                    </div>
                                                </div>
                                                <div className="mb-3">
                                                    <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Card number</label>
                                                    <div>
                                                        <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder="0000 0000 0000 0000" type="text" />
                                                    </div>
                                                </div>
                                                <div className="mb-3 -mx-2 flex items-end">
                                                    <div className="px-2 w-1/4">
                                                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Expiration date</label>
                                                        <div>
                                                            <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                                <option value={"01"}>01 - January</option>
                                                                <option value={"02"}>02 - February</option>
                                                                <option value={"03"}>03 - March</option>
                                                                <option value={"04"}>04 - April</option>
                                                                <option value={"05"}>05 - May</option>
                                                                <option value={"06"}>06 - June</option>
                                                                <option value={"07"}>07 - July</option>
                                                                <option value={"08"}>08 - August</option>
                                                                <option value={"09"}>09 - September</option>
                                                                <option value={"10"}>10 - October</option>
                                                                <option value={"11"}>11 - November</option>
                                                                <option value={"12"}>12 - December</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                    <div className="px-2 w-1/4">
                                                        <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                                                            <option value={"2020"}>2020</option>
                                                            <option value={"2021"}>2021</option>
                                                            <option value={"2022"}>2022</option>
                                                            <option value={"2023"}>2023</option>
                                                            <option value={"2024"}>2024</option>
                                                            <option value={"2025"}>2025</option>
                                                            <option value={"2026"}>2026</option>
                                                            <option value={"2027"}>2027</option>
                                                            <option value={"2028"}>2028</option>
                                                            <option value={"2029"}>2029</option>
                                                        </select>
                                                    </div>
                                                    <div className="px-2 w-1/4">
                                                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">Security code</label>
                                                        <div>
                                                            <input className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" placeholder={"000"} type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full p-3">
                                            <label htmlFor="type2" className="flex items-center cursor-pointer">
                                                <input type="radio" className="form-radio h-5 w-5 text-indigo-500" name="type" id="type2" />
                                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="ml-3 w-[140px] h-[140px]" />
                                            </label>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"><i className="mdi mdi-lock-outline mr-1" /> PAY NOW</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-5">
                        <div className="text-center text-gray-400 text-sm">
                            <a href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="focus:outline-none underline text-gray-400"><i className="mdi mdi-beer-outline" />Buy me a beer</a> and help support open-resource
                        </div>
                    </div>
                </div>
                <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
                    <div>
                        <a title="Buy me a beer" href="https://www.buymeacoffee.com/scottwindon" target="_blank" className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12">
                            <img className="object-cover object-center w-full h-full rounded-full" src="https://i.pinimg.com/originals/60/fd/e8/60fde811b6be57094e0abc69d9c2622a.jpg"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Cart