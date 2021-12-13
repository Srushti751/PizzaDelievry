import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Navbar from './Navbar'
import {Alert} from 'react-bootstrap'


function Finish() {
    return (
        
        <div>
            <Router>
  
            <Navbar/>
            <section className="container bg-light p-5" >
                <h1>Order has been placed Successfully!!!</h1>
                <Alert variant="success">
                    <Alert.Heading>Notification will be sent to your email.</Alert.Heading>
                    </Alert>
                <Link to="/pizzas"><button className="btn text-white p-3" style={{width:"100%", background:"rgb(55,66,107)"}}>Go on Order some more</button></Link>
            </section>

            </Router>
            
        </div>
    )
}

export default Finish
