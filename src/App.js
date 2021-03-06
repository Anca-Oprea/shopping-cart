import React, {Component} from 'react';
import {Switch,Route} from 
'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js';
import Productlist from './components/Productlist.js';
import Cart from './components/Cart/Cart.js';
import Details from './components/Details.js';
import Default from './components/Default.js';
import Modal from './components/Modal.js'


class App extends Component {
	render(){
		return(
		 <React.Fragment>
		  <Navbar />
		  <Switch>
		   <Route exact path="/"  component={Productlist}/>
		    <Route path="/details" component={Details}/>
			<Route path="/cart" component={Cart}/>
			<Route  component={Default}/>
			
		  </Switch>
	      <Modal />
		 </React.Fragment>
		
	);
 }
}
export default App;
