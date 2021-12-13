import React,{useState} from 'react'
import {Form, Button, Container } from 'react-bootstrap';
import Navbar from './Navbar';
import {useSelector,useDispatch} from 'react-redux'
import {registerUser} from '../actions/userAction'

function Signup() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    

    const dispatch = useDispatch()

    const registerHandler=(e)=>{
        e.preventDefault()
        if(password !== confirm){
            alert("Password dont match")
        }else{
            const user = {name,email,phone,password}
            dispatch(registerUser(user))
            console.log(user)
        }
    }
    
    return (
        <div>
            <Container>
                <Navbar/>
                <h1>Register</h1>
            <Form>
            <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" value={name} onChange={(e)=>setName(e.target.value)}placeholder="Enter name" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder="Enter phone" />
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" >
                    <Form.Label>Confirm</Form.Label>
                    <Form.Control type="password" value={confirm} onChange={(e)=>setConfirm(e.target.value)} placeholder="Password" />
                </Form.Group>
               
                <Button variant="primary" onClick={registerHandler} type="submit">
                    Submit
                </Button>
            </Form>
            </Container>
        </div>
    )
}

export default Signup

