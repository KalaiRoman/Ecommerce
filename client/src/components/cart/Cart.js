import React, { useState, useEffect } from 'react'
import instanceBaseurl from '../../config/Baseurl';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const [data, setData] = useState([]);
    useEffect(() => {
        const userid = Cookies.get("unknowuser");
        const data = {
            userid: userid
        }
        instanceBaseurl.post("/cart/get", data).then((res) => {
            setData(res?.data?.data);
        })
    }, []);


    const check = localStorage.getItem("kalai");

    const history = useNavigate();
    return (
        <div>Cart{data?.length}

            <div className='mt-5 mb-5'>
                {check ? <>
                    <button>Check out</button>

                </> : <>
                    <button onClick={() => history("/login")}>Login User</button>

                </>}
            </div></div>
    )
}

export default Cart