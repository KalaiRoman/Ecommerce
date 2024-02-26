import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from '../components/home/Home';
import Signup from '../components/auth/Signup';
function Routing() {
    return (
        <div>
            <Routes>
                <Route path="/signup" exact element={<Signup />}></Route>
                <Route path="/" exact element={<Home />}></Route>
            </Routes>
        </div>
    )
}

export default Routing