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
    return (
        <div className='ms-4 mt-4  mb-4'>
            <h3>
                Cart{data?.length}

            </h3>
            <div className='w-75 mx-auto'>
                {data?.map((item, index) => {
                    return (
                        <div className='card col-lg-10 mt-3 mb-3 border p-3'>
                            <img src={item?.productId?.image} alt="no image" style={{ width: "100px", height: "100px" }} />
                            <div className='mt-3'>
                                {item?.productId?.name}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='mt-5 mb-5 d-flex align-items-center justify-content-center mb-5'>
                {check ? <>
                    <button>Check out</button>
                </> : <>
                    <button onClick={() => history("/login")} className='w-25 p-2 rounded outline-none border-spacing-2'>Login User</button>

                </>}
            </div></div>
    )
}

export default Cart