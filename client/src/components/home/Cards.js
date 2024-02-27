import React from 'react'
import './cards.css';
function Cards({ name, image, button, shows, showindex, index, hoversectionLeave, addtocart, _id }) {
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
                                <div className='like-name' key={index}>
                                    {item?.image}
                                </div>
                            )
                        })}
                    </div>
                </> : <></>}
                <div className='main-button-section'>
                    <button className='buttons-like' onMouseOverCapture={() => button(index)}>
                        Like
                    </button>
                    <button>
                        Commend
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