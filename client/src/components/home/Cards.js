import React from 'react'
import './cards.css';
import instanceBaseurl from './../../config/Baseurl';
import { toast } from 'react-hot-toast';
function Cards({ name, image, button, shows, showindex, index, productFavortStatus, hoversectionLeave, addtocart, _id, userid, loginUser, LikeFunction, like, UpdateLikeUser, CommentUsers, handleShow, reviews }) {
    const likelists = [
        {
            id: 1,
            name: "👍like",
            image: "👍"

        },
        {
            id: 2,
            name: "❤️heart",
            image: "❤️"

        },
        {
            id: 3,
            name: "🥰love",
            image: "🥰"

        },
        {
            id: 4,
            name: "😆smile",
            image: "😆"

        },
        {
            id: 5,
            name: "😃happy",
            image: "😃"

        }, {
            id: 6,
            name: "🥲sad",
            image: "🥲"

        }
        , {
            id: 7,
            name: "😡angry",
            image: "😡"

        }
    ]

    const findUserLike = like?.find((item, index) => item?.userdetails === userid);


    const favortUser = async () => {

        const data = {
            productId: _id,
            userId: userid
        }
        const response = await instanceBaseurl.put("/product/fav", data).then((res) => {
            toast.success(res?.data?.message)
        })
    }
    return (
        <div className='cursor-pointer overflow-hidden py-4 position-relative  px-4  border  position-relative rounded text-center align-center justify-center' onMouseLeave={hoversectionLeave}>

            <div className='position-absolute right-[-170px] top-5 text-2xl ' onClick={favortUser}>
                {productFavortStatus ? <div>
                    <i class="fa-solid fa-heart like-heart" ></i>
                </div> : <>
                    <i class="fa-regular fa-heart unlike-heart"></i>
                </>}
            </div>
            <div className='flex align-center justify-center hover:scale-105'>
                <img src={image} alt="no image" style={{
                    width: "200px",
                    height: "200px"
                }} />
            </div>
            <div className='mt-3 mb-4'>
                {name}
            </div>

            <div className='d-flex gap-4 ty'>
                {showindex === index ? <>
                    <div className='top-section'>
                        {likelists?.map((item, index) => {
                            return (
                                <div className='like-name' key={index}
                                    onClick={() => {
                                        if (userid) {
                                            if (findUserLike?.likeName) {
                                                UpdateLikeUser(item?.name, _id, findUserLike?._id)
                                            }
                                            else {
                                                LikeFunction(item?.name, _id)
                                            }
                                        }
                                        else {
                                            loginUser()
                                        }
                                    }}
                                >
                                    {item?.image}
                                </div>
                            )
                        })}
                    </div>
                </> : <></>}
                <div className='main-button-section bg-blue-100 w-[100%] h-[50px] align-items-center'>

                    <div className='w-[70%] flex'>
                        <div className='w-[20%]'>
                            <button className='buttons-like w-[20%] pl-4' onMouseOverCapture={() => button(index)}>
                                {findUserLike?.likeName ? findUserLike?.likeName.slice(0, 2) : <i class="fa-solid fa-thumbs-up"></i>} <span className='pl-[22px]'>{like?.length}</span>
                            </button>
                        </div>
                        <div className='w-[20%]'>
                            <button>
                                <i class="fa-solid fa-thumbs-down"></i>
                            </button>
                        </div>
                    </div>
                    {/* <button onClick={() => handleShow(_id)}>
                        Commend {reviews?.length}
                    </button> */}
                    <div className='w-[30%]'>
                        <button onClick={() => addtocart(_id)}
                            className='bg-orange-600 text-white rounded  fw-bold cursor-pointer w-[40px] py-1 '
                        >
                            <i class="fa-solid fa-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Cards