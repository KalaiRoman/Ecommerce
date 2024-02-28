import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import instanceBaseurl from '../../config/Baseurl';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
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
    return (

        <>




            <>
                <div className="container-fluid gap-2 d-flex p-2">
                    <div onClick={() => window.location.assign("/")} className='cursor'>Home</div>
                    <div>
                        {data1?.email}
                    </div>
                    <div className='w-25'>
                        <button onClick={() => history("/cart")} className="btn btn-outline-success " >  <span className='fw-bold fs-3'>Cart</span><span className='text-danger fw-bold fs-2 ms-2'>{data?.length}</span></button>
                    </div>
                    <div className='w-25'>
                        {userid ? <>
                            <button onClick={logoutuser} className="btn btn-outline-success " >  <span className='fw-bold fs-3'>Logout </span><span className='text-danger fw-bold fs-2 ms-2'></span></button>

                        </> : <>
                            <button onClick={LoginUser} className="btn btn-outline-success " >  <span className='fw-bold fs-3'>Login </span><span className='text-danger fw-bold fs-2 ms-2'></span></button>

                        </>}
                    </div>
                </div>
            </>


        </>
    )
}

export default Header