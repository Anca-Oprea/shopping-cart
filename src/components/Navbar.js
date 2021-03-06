import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import {ButtonContainer} from "./Button.js";
import styled from 'styled-components';


export default class Navbar extends Component{
	render(){
		return(
		
		<NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
		{/* 
      https://cdn3.iconfinder.com/data/icons/outline-style-1/512/phone-512.png
	   */}
	     <Link to="/">
	   <img src={logo} alt="store" className="navbar-brand "/>
	     </Link>
         <ul className="navbar-nav align-items-center">
		 <li className="nav-item ml-5">
		 <Link to="/" className="nav-Link">
		 products
		 </Link>
		 </li>
		 </ul>
		 <Link to="/cart" className="ml-auto">
		 <ButtonContainer>
		 <span className="mr-2">
		  <i className="fas fa-cart-plus" />
		  </span>
		  my cart
		 </ButtonContainer>
		 </Link>
		</NavWrapper>
		 
		
		);
	}
}
  const NavWrapper = styled.nav`
 background: var(--mainBlue);
 .nav-Link{
	 color:var(--mainWhite)!important;
	 font-size:1.3rem;
	 text-transform: capitalize !important;
 }
 `;
 
