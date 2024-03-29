import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import instanceBaseurl from '../../config/Baseurl';
import { useNavigate } from 'react-router-dom';
function Header() {

    const history = useNavigate();
    const [data, setData] = useState([])
    const [data1, setData1] = useState({})


    useEffect(() => {
        const userid = Cookies.get("userid");
        const data = {
            userid: userid
        }
        instanceBaseurl.post("/cart/get", data).then((res) => {
            setData(res?.data?.data);
        })
    }, []);


    const userid = Cookies.get("userid1");

    useEffect(() => {
        const userid = Cookies.get("userid1");

        const data = {
            userid: userid
        }


        if (userid) {
            instanceBaseurl.post('/auth/get', data).then((res) => {
                setData1(res?.data?.data);
            }).catch((err) => {
            })
        }


    }, [])

    const logoutuser = () => {
        Cookies.remove('userid');
        Cookies.remove('userid1');
        window.location.reload();

    }

    const LoginUser = () => {
        window.location.assign("/login");
    }


    useEffect(() => {
        const dicount = 20;
        const originalprice = 1000;
        const filterPrice = dicount / 100;
        const total = Math.round(originalprice - (originalprice * filterPrice))
        console.log(total, 'total')

    }, [])
    return (

        <div className='bg-green-600 h-auto py-4 xs:bg-red-400 sm:bg-blue-400 md:bg-orange-400 text-white fw-bold px-4'>

            <div className='flex gap-3 justify-between'>
                <div className='cursor-pointer' onClick={() => window.location.assign("/")}>
                    Home
                </div>
                <div>
                    welocme
                </div>
                <div className='flex gap-5 align-items-center justify-between w-[50%]'>
                    <div className='position-relative w-[20px]' onClick={() => window.location.assign("/cart")}>
                        <div className='cursor-pointer'>
                            <div className='mr-[100%]'>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </div>
                            <div className={`position-absolute top-[-14px] right-[-20px]  text-center rounded-full w-[22px] h-[22px] flex align-items-center justify-center bg-orange-400 border-inherit ${data?.length > 0 ? "animate-bounce" : null}`}>
                                {data?.length}
                            </div>
                        </div>
                    </div>
                    {/* <div>
                        <i class="fa-solid fa-heart"></i>
                    </div> */}
                    <div className='w-[100%] gap-5'>
                        {userid ? <>
                            <button onClick={logoutuser} className="w-[30%] border p-1 rounded" >  <span className='fw-bold'>Logout </span></button>
                        </> : <>
                            <button onClick={LoginUser} className="w-[30%] border p-1 rounded " >  <span className='fw-bold'>Login </span></button>
                        </>}
                    </div>

                </div>
            </div>




        </div>
    )
}

export default Header