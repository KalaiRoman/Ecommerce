import React, { useEffect, useState } from 'react'
import instanceBaseurl from './../../config/Baseurl';
import Cards from './Cards';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
function Home() {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [showindex, setShowIndex] = useState(null);

    useEffect(() => {
        instanceBaseurl.get("/product/all").then((res) => {
            setData(res?.data?.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    const hoversection = (id) => {
        setShow(true);
        setShowIndex(id);
    }
    const hoversectionLeave = () => {
        setShow(false);
        setShowIndex(null);
    }

    const addtocart = (id) => {

        const userid = Cookies.get("unknowuser");
        const data = {
            productId: id,
            userdetails: userid
        }
        instanceBaseurl.post("/cart/create", data).then((res) => {
            toast.success("created add to cart")
        }).catch((err) => {
            toast.error(err?.response?.data?.message)

        })
    }
    return (
        <div className='container mt-5 mb-5 mx-auto'>
            <div className='row d-flex gap-5 mx-auto w-100'>
                {data?.map((item, index) => {
                    return <Cards {...item}
                        key={index} button={hoversection} shows={show}
                        showindex={showindex} index={index} hoversectionLeave={hoversectionLeave}
                        addtocart={addtocart}
                    />
                })}
            </div>
        </div>
    )
}

export default Home