import React, { useEffect, useState } from 'react'
import {Col,Row,Container,Card,Button, Nav} from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { getAllPizzas } from '../actions/pizzaAction'
import Navbar from './Navbar'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

function Pizzapage() {
    const [quantity, setQuantity] = useState(1)
    const [id, setId] = useState("")
    const dispatch = useDispatch()
    const pizzaState = useSelector(state=>state.pizzaReducer)
    const {loading,pizzas,error} = pizzaState

    useEffect(() => {
        if(localStorage.getItem('currentUser')!=undefined){
            let user = JSON.parse(localStorage.getItem('currentUser'))
            let token = user.token
            console.log("token",token)
            let decode = jwt_decode(token)
            console.log(decode)
            setId(decode.id)
            dispatch(getAllPizzas())
        }
    }, [])

    const submit=(e,name,image,price,quantity)=>{
        e.preventDefault();
  
        const payload ={
          name: name,
          image:image,
          price:price*quantity,
          quantity:quantity
        }
      
      axios({
        url:'/api/save',
        method:'POST',
        data:payload
      })
      .then(()=>{
        console.log("data is saved")
      })
      .catch((err)=>{
        console.log("Internal error")
      })
  }

    // useEffect(() => {
    //         dispatch(getAllPizzas())    
    // }, [dispatch])
    return (
        <div>
            <Container>
                <Navbar/>
                {loading?(<h1>Loading...</h1>)
                        :error?(<p>{error}</p>)
                        :(
                            <Row>
                            {pizzas.map((piz)=>{
                                return(
                                    <Col md={4}>
                                    <Card style={{ width: '18rem' ,margin:"10px", padding:"10px"}}>
                                        <Card.Img variant="top" src={piz.image} height="200" width="300" />
                                        <Card.Body>
                                            <Card.Title>{piz.name}</Card.Title>
                                            Quantity:<select value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
                                                {[...Array(10).keys()].map((v,i)=>(
                                                    <option value={i+1}>{i+1}</option>
                                                ))}
                                            </select>
                                            <Card.Text>
                                           Rs.{piz.price * quantity}
                                            </Card.Text>
                                            <Button onClick={(e)=>submit(e,piz.name,piz.image,piz.price,quantity)} variant="warning">Add to cart</Button>
                                        </Card.Body>
                                        </Card>
                                    </Col>
                                )
                            })}
                        </Row>
                        )
                
                }
             
            </Container>
        </div>
    )
}

export default Pizzapage
