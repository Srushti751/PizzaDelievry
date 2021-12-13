import logo from './logo.svg';
import './App.css';
import Mainpage from './components/Mainpage';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Pizzapage from './components/Pizzapage';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Finish from './components/Finish';
import Signup from './components/Signup';
import Login from './components/Login';
import Orderdetails from './components/Orderdetails';
import Table from './components/Table';


function App() {
  return (
      <>
      <Router>
            <Switch>
                <Route exact path="/" component={Mainpage}/>
                <Route exact path="/pizzas" component={Pizzapage}/>

                <Route exact path="/register" component={Signup}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/checkout" component={Checkout}/>
                <Route exact path="/final" component={Finish}/>
                <Route exact path="/orderdetails" component={Orderdetails}/>
                <Route exact path="/table" component={Table}/>
            </Switch>
      </Router>
      </>
  );
}

export default App;
