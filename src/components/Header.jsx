import React, { useState, useContext } from 'react';
import '@styles/Header.scss';
import Menu from '@components/Menu';
import MyOrder from '../containers/MyOrder';
import menu from '@icons/icon_menu.svg'
import logo from '@logos/logo_yard_sale.svg'
import AppContext from "../context/AppContext";
import shoppingCart from '@icons/icon_shopping_cart.svg'
import firebaseApp from "../Callfirebase/firebase";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp)

const Header = ({cart}) => {
	const [toggle, setToggle] = useState(false);
	const [toggleOrders, setToggleOrders] = useState(false);
	const { state } = useContext(AppContext)

	

	const handleToggle = () => {
		setToggle(!toggle);
	}
	return (
		<nav>
			<img src={menu} className="menu" />
			<div className="navbar-left">
				<img src={logo} alt="logo" className="nav-logo" />
				{ <ul>
					
					<li  onClick={() => signOut(auth)}>
					<a>Cerrar Sesión </a> 
					</li>
					
					<li>
						
					</li>
				</ul> }
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email" onClick={handleToggle}>
						miguelangelcastillo947@gmail.com
					</li>
					<li
						className="navbar-shopping-cart"
						onClick={() => setToggleOrders(!toggleOrders)}
					>
						<img src={shoppingCart} alt="shopping cart" />
						
						{state.cart.length > 0 ? <div>{state.cart.length}</div> : null} 
					</li>
				</ul>
			</div>
			{toggle && <Menu />}
			{toggleOrders && <MyOrder />}
		</nav>
	);
}

export default Header;