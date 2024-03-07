import React, { useState } from 'react'
import instanceBaseurl from '../../config/Baseurl';
import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';

function Signin() {
    const [email, setEmail] = useState("");
    const submit = () => {
        const userid = Cookies.get("userid");
        const data = {
            email, olduser: userid
        }
        instanceBaseurl.post("/auth/login", data).then((res) => {
            toast.success("created")
            Cookies.set("userid", res?.data?.data?._id);
            Cookies.set("userid1", res?.data?.data?._id);
            window.location.assign("/");
        }).catch((err) => {
            toast.error(err?.response?.data?.message)
        })
    }
    return (
        <div className='container w-[100%] h-[100vh] flex align-items-center justify-content-center flex-col'>
            <div className='w-50 mx-auto mb-4 d-flex flex-column gap-4 mt-4'>
                <div>
                    <input type="text" placeholder='Enter Only Email'
                        className='w-[100%] border p-3 rounded'
                        onChange={(e) => setEmail(e?.target?.value)} name="email" value={email} />
                </div>
                <button onClick={submit} className='w-[20%] bg-blue-400 text-white p-3 rounded mx-auto'>submit</button>
            </div>

            <div className='text-center cursor' onClick={() => window.location.assign("/signup")}>Don't have an Account <span className='text-danger mt-3 text-center'>Signup?</span></div>

        </div>
    )
}

export default Signin