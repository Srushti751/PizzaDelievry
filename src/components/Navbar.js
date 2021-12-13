import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import axios from 'axios'
import {logoutUser} from '../actions/userAction'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'


function Navbar() {
    const dispatch = useDispatch()
    const [orders, setOrders] = useState([])
    const userState = useSelector(state=>state.loginUserReducer)
    const {currentUser} = userState

    const getOrder=()=>{
        axios.get("/api/order")
        .then((response)=>{
          const data = response.data
          setOrders(data)
        })
        .catch((err)=>{
          console.log("Fetch error",err)
        })
    }
    useEffect(() => {
        getOrder()
    }, [])
    return (
        
        <div>
            <Router>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container">
                    <a className="navbar-brand" href="#"><img src="images/logo.png" height="80" width="100"/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/pizzas">Pizza App</a>
        </li>
      
        </ul>
                    
                    <form className="d-flex">
                        {currentUser ? (<>
                        <Link to="/"><button className="btn btn-outline-info m-2" onClick={()=>{dispatch(logoutUser())}}>Logout</button></Link>
                        <Link to="/orderdetails"><button className="btn btn-outline-info m-2" >Order Details <span className="fw-bold"></span></button></Link>
                        <Link to="/cart"><button className="btn btn-info m-2" type="submit">Cart <span className="fw-bold">{orders.length}</span></button></Link>

                        </>):
                        <>
                        <Link to="/register"><button className="btn btn-outline-info m-2" type="submit">Sign Up</button></Link>
                        <Link to="/login"><button className="btn btn-outline-info m-2" type="submit">Login</button></Link>
                       </>}
                    </form>
                    </div>
                </div>
            </nav>

       

            </Router>
        </div>
    )
}

export default Navbar
