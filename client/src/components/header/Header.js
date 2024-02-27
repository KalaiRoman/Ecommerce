import React, { useState, useEffect } from 'react'
import Cookies from 'js-cookie';
import instanceBaseurl from '../../config/Baseurl';
import { useNavigate } from 'react-router-dom';
function Header() {

    const history = useNavigate();
    const [data, setData] = useState([]);

    useEffect(() => {
        const userid = Cookies.get("unknowuser");
        const data = {
            userid: userid
        }
        instanceBaseurl.post("/cart/get", data).then((res) => {
            setData(res?.data?.data);
        })
    }, [])
    return (
        <div>Header
            <button onClick={() => history("/cart")} className='w-25'>cart {data?.length}</button>
        </div>
    )
}

export default Header