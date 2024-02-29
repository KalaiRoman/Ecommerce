import React from 'react'
import './cards.css';
function Cards({ name, image, button, shows, showindex, index, hoversectionLeave, addtocart, _id, userid, loginUser, LikeFunction, like, UpdateLikeUser, CommentUsers, handleShow, reviews }) {
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

    const findUserLike = like?.find((item, index) => item?.userdetails === userid)
    return (
        <div className='card col-lg-3 cursor-pointer p-2' onMouseLeave={hoversectionLeave}>
            <div>
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
                <div className='main-button-section'>
                    <button className='buttons-like ' onMouseOverCapture={() => button(index)}>
                        {findUserLike?.likeName ? findUserLike?.likeName.slice(0, 2) : <i class="fa-solid fa-thumbs-up"></i>} <span>{like?.length}</span>
                    </button>
                    <button onClick={() => handleShow(_id)}>
                        Commend {reviews?.length}
                    </button>
                    <button onClick={() => addtocart(_id)}>
                        Add to cart
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Cards