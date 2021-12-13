import React, { useEffect, useState } from 'react'
import {Col,Row,Container,Card,Button, Nav,Table} from 'react-bootstrap'
import Navbar from './Navbar'
import axios from 'axios'
import jwt_decode from 'jwt-decode'


function Cart() {
    const [orders, setOrders] = useState([])
    const subTotal = orders.reduce((x,item)=> x + item.price,0)
    const [id, setId] = useState("")

    // Authentication part
    useEffect(() => {
        if(localStorage.getItem('currentUser')!=undefined){
            let user = JSON.parse(localStorage.getItem('currentUser'))
            let token = user.token
            let decode = jwt_decode(token)
            console.log(decode)
            // setId(decode.id)
            getOrder()

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
  
    const deleteorder=(id)=>{
        axios.delete(`/api/delete/${id}`)
        getOrder()
      }


    // useEffect(() => {
    //     getOrder()
    //   }, [])
    return (
        <div>
            <Container>
                <Navbar/>
                <h2>Shopping Cart</h2>
                <Table >
                {orders.map((piz)=>{
                        return(
                        <thead>
                            <tr>
                            <th><img src={piz.image} height="50" width="80"/></th>
                            <th>{piz.name}</th>
                            <th>{piz.price}</th>
                            <th><input type="text" value={piz.quantity}/></th>
                            <th><button onClick={()=>deleteorder(piz._id)} className="btn m-2 text-white"  style={{width:"100%", background:"rgb(55,66,107)"}}>Delete</button></th>
                            </tr>
                        </thead>)
                })}
                </Table>
                <a href="/checkout" className="btn m-2 text-white"  style={{width:"100%", background:"rgb(55,66,107)"}}>Checkout</a>

                <p>Total: <span className="fw-bold">Rs. {subTotal}</span></p> 
                   
                
             
            </Container>
        </div>
    )
}

export default Cart




