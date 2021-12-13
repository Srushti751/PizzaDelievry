import React, { useEffect, useState } from 'react'
import {Col,Row,Container,Card,Button, Nav,Table} from 'react-bootstrap'
import Navbar from './Navbar'
import axios from 'axios'
import jwt_decode from 'jwt-decode'
import { useDispatch,useSelector } from 'react-redux'

function Orderdetails() {
    const [orders, setOrders] = useState([])
    const [details, setDetails] = useState([])
    const subTotal = orders.reduce((x,item)=> x + item.price,0)
    const userState = useSelector(state=>state.loginUserReducer)
    const {currentUser} = userState
    const [id, setId] = useState("")

    // Authentication part
    useEffect(() => {
        if(localStorage.getItem('currentUser')!=undefined){
            let user = JSON.parse(localStorage.getItem('currentUser'))
            let token = user.token
            let decode = jwt_decode(token)
            console.log(decode)
            setId(decode.id)
            getOrderdetails()

        }
    }, [])
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
    const getOrderdetails=()=>{
        axios.get("/checkout/orderdetails")
        .then((response)=>{
          const data = response.data
          setDetails(data)
        })
        .catch((err)=>{
          console.log("Fetch error",err)
        })
    }
  
    const deleteorder=(id)=>{
        axios.delete(`/api/delete/${id}`)
        getOrder()
      }


    // useEffect(() => {
    //     getOrderdetails()
    //   }, [])
    return (
        <div>
            <Container>
                <Navbar/>
                <h2>Order Details</h2>
          
                <Table >
                {details.map((det)=>{
                        return(
                        <thead>
                             <tr>
                            <th>User Name</th>
                            <th>Card Details</th>
                            <th>Types of Pizza</th>
                            <th>Sub Total</th>
                            
                            </tr>
                            <tr>
                            <td>{det.user}</td>
                            <td>{det.card}</td>
                            <td>{det.quantity}</td>
                            <th>₹{det.total}</th>
                            
                            </tr>
                        </thead>)
                })}
                </Table>
                <a href="/pizzas" className="btn m-2 text-white"  style={{width:"100%", background:"rgb(55,66,107)"}}>Shop More</a>

                   
                
             
            </Container>
        </div>
    )
}

export default Orderdetails




