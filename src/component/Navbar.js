import React from 'react'
import { BrowserRouter, Link, Routes, Route } from "react-router-dom"
import AddProduct from './AddProduct'
import Login from './Login'

import Card from './Card'

import { useNavigate } from 'react-router-dom'




//props ===> data={setLoggedIn} , initial = isLoggedIn
function Navbar(props) {




    // const navigate = useNavigate() not useful b/c logout is not the part of BrowserRouter and useNavigate hook useful for inside component of BrowserRouter

    function pleaseLogout() {
        //logic to logout from application
        window.location.pathname = "/login"

    }


    return (
        <BrowserRouter>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">E-Commerce App</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                                {/* {console.log(props.initial)} */}



                                <button type="button" id="mypopover" className="btn btn-secondary" data-html="true" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Let's Add Something To Cart.">
                                    Cart
                                </button>



                                {props.initial ?
                                    <>
                                        <button className='btn btn-outline-light' onClick={pleaseLogout}>Logout</button>
                                        <li className="nav-item">
                                            <Link to="/home" className="nav-link active" >Home</Link>
                                        </li>

                                        <li className="nav-item">
                                            <Link to="/addProduct" className="nav-link" >Add Product</Link>
                                        </li>
                                    </>
                                    : <li className="nav-item"> <Link to="/login" className="nav-link" >Login</Link></li>}



                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path='/home' element={<Card />}> </Route>
                    <Route path='/addProduct' element={<AddProduct />}> </Route>
                    <Route path='/login' element={<Login info={props.data} />} > </Route>

                </Routes>
            </div>

        </BrowserRouter>
    )
}

export default Navbar
