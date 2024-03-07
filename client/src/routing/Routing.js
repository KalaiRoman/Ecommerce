import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Signup from '../components/auth/Signup';
import Cart from '../components/cart/Cart';
import Header from '../components/header/Header';
import Signin from '../components/auth/Signin';
import Imageupload from '../components/imageupload/Imageupload';
function Routing() {
    return (
        <div>
            <div className='w-100 border'>
                <Header />
            </div>
            <Routes>
                <Route path="/signup" exact element={<Signup />}></Route>
                <Route path="/login" exact element={<Signin />}></Route>
                <Route path="/" exact element={<Home />}></Route>
                <Route path="/cart" exact element={<Cart />}></Route>
                <Route path="/image" exact element={<Imageupload />}></Route>

            </Routes>
        </div>
    )
}

export default Routing