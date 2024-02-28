import React, { useState } from 'react'
import instanceBaseurl from '../../config/Baseurl';
import { toast } from 'react-hot-toast';
function Signup() {
    const [email, setEmail] = useState("");
    const submit = () => {
        const data = {
            email, role: "user"
        }
        instanceBaseurl.post("/auth/register", data).then((res) => {
            toast.success("User Register SuccessFully")
            window.location.assign("/login");
        }).catch((err) => {
            toast.error("error")
        })
    }
    return (
        <div className='container'>
            <div className='w-50 mx-auto mb-4 d-flex flex-column gap-4 mt-4'>
                <div>
                    <input type="text" placeholder='email only' onChange={(e) => setEmail(e?.target?.value)} name="email" value={email} />
                </div>
                <button onClick={submit}>submit</button>
            </div>

        </div>
    )
}

export default Signup