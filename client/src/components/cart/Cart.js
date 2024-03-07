import React, { useState, useEffect } from 'react'
import instanceBaseurl from '../../config/Baseurl';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

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

    console.log(data, 'data')
    return (
        <div className='w-[100%] overflow-hidden'>
            <h3 className='ml-6 fw-bold mb-5'>
                Cart{data?.length}

            </h3>
            <div className=''>
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
            </div>}
        </div>
    )
}

export default Cart