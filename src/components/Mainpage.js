import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Navbar from './Navbar'


function Mainpage() {
    return (
        
        <div>
            <Router>
  
            <Navbar/>
            <section className="container bg-light p-5" >
                <h1>Pizza Delievery</h1>
                <p>Welcome to pizza delivery service.This is the place you may chose pizza of your choice, you like from variety of options</p><hr/>
                <p>We are delivering pizza at your door step so do signup and order</p>
                <Link to="/register"><button className="btn text-white p-3" style={{width:"100%", background:"rgb(55,66,107)"}}>SignUp and Order</button></Link>
            </section>

            </Router>
            
        </div>
    )
}

export default Mainpage
