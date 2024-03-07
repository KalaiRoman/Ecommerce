import React, { useEffect, useState } from 'react'
import instanceBaseurl from './../../config/Baseurl';
import Cards from './Cards';
import Cookies from 'js-cookie';
import toast from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Home() {
    const [data, setData] = useState([]);
    const [show, setShow] = useState(false);
    const [showindex, setShowIndex] = useState(null);

    const [ratingvalue, setRatingValue] = useState(null);
    const [des, setDes] = useState(null);


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

        const userid = Cookies.get("userid");
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
    const userid = Cookies.get("userid");


    const loginUser = () => {
        window.location.assign("/login");
    }


    const LikeFunction = (likeName, id) => {

        const data = {
            likeName: likeName,
            userid: userid,
            productid: id
        }

        instanceBaseurl.put("/product/like", data)?.then((res) => {
            toast.success(res?.data?.message);
        }).catch((err) => {
            console.log(err);
        })
    }

    const UpdateLikeUser = (likeName, id, likeid) => {
        const data = {
            likeName: likeName,
            productid: id,
            likeId: likeid
        }


        instanceBaseurl.put("/product/like/update", data)?.then((res) => {
            toast.success(res?.data?.message);
        }).catch((err) => {
            console.log(err);
        })
    }

    const [show1, setShow1] = useState(false);

    const [productId, setProdctId] = useState(null);

    const handleClose = () => setShow1(false);
    const handleShow = (id) => {
        setShow1(true)
        setProdctId(id);

    };


    const CommentUsers = () => {
        const data = {
            productid: productId,
            userdetails: userid,
            description: des,
            rating: ratingvalue

        }
        instanceBaseurl.put("/product/rate", data)?.then((res) => {
            toast.success(res?.data?.message);
            handleClose();
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div className='container mt-5 mb-5 mx-auto d-flex align-items-center justify-content-center'>
            <div className='grid-cols-3 w-[100%] grid gap-3 rounded align-center justify-center '>
                {data?.map((item, index) => {
                    return <Cards {...item}
                        key={index} button={hoversection} shows={show}
                        showindex={showindex} index={index} hoversectionLeave={hoversectionLeave}
                        addtocart={addtocart}
                        userid={userid}
                        loginUser={loginUser}
                        LikeFunction={LikeFunction}
                        UpdateLikeUser={UpdateLikeUser}
                        CommentUsers={CommentUsers}
                        handleShow={handleShow}
                    />
                })}
            </div>

            <Modal
                show={show1}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div>
                        <select onChange={(e) => setRatingValue(e?.target?.value)} value={ratingvalue} name="rating"
                            className='w-[100%] bg-orange-400 px-3 py-2 rounded-lg cursor-pointer'
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className='mb-5 mt-4'>
                        <input type="text" placeholder='description' value={des} onChange={(e) => setDes(e.target.value)}
                            className='border rounded p-2 cursor-pointer'
                        />
                    </div>
                    <div>
                        <Button onClick={CommentUsers}>Post</Button>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default Home