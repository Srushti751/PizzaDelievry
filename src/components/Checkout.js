import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Col,Row,Form,Container,Card,Button, Nav,Table} from 'react-bootstrap'
import Navbar from './Navbar'
import axios from 'axios'



function Checkout() {
    const [orders, setOrders] = useState([])
    const [card, setCard] = useState("")
    const subTotal = orders.reduce((x,item)=> x + item.price,0)
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
  
    const submit=(e,card,quantity,subTotal,name)=>{
        e.preventDefault();
  
        const payload ={
          card: card,
          quantity:quantity,
          total:subTotal,
          user:name
        }
      
      axios({
        url:'/checkout/orderplace',
        method:'POST',
        data:payload
      })
      .then(()=>{
        console.log("data is saved")
        afterClick()
      })
      .catch((err)=>{
        console.log("Internal error")
      })
  }

  
  const afterClick=()=>{
      
        window.location.href = "http://localhost:3001/final";
      } 

    useEffect(() => {
        getOrder()
      }, [])
      return (
        <div>
            <Navbar/>
            <Container>
            <h1>Check Out</h1>
            <Form action="/final">
            <Form.Group className="mb-3" >
                <Form.Label>Credt Card</Form.Label>
                <Form.Control type="text" name="card" value={card} onChange={(e)=>setCard(e.target.value)} placeholder="CARD number" />
                Types of Pizzas<Form.Control type="text" name="quantity" value={orders.length}/>
                
                Name of Pizzas:
                {orders.map((ord)=>{
                    return(
                        <p className="fw-bold">{ord.name}</p>
                    )
                })}
                <p>Order Total: <span className="fw-bold">Rs.{subTotal}</span></p> 
            </Form.Group>

            <Button onClick={(e)=>submit(e,card,orders.length,subTotal,currentUser.name)} variant="warning">Checkout</Button>
            </Form>
            </Container>
        </div>
    )
}

export default Checkout
