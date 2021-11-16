import React from 'react';
import { useGlobalContext } from '../context/Context';
import Logo from '../img/logo.svg';
import Bag from '../img/bag.svg';

function Navbar() {

    const {toggleOpenCloseCart, amount} = useGlobalContext();

    return (
        <nav>
            <div className='navbar-center'>
                <img className='logo' src="https://cdn.dribbble.com/users/3267379/screenshots/6098927/e_shop.jpg" alt='logo' style={{height:"100px",width:"100px"}} />
                <div >
                    <h1 style={{fontSize:"2.5rem"}}><b>Shopping Cart</b></h1>
                    </div>
                <div className='cart-bag' 
                    onClick={_ => toggleOpenCloseCart('OPEN_CART')}>
                   
                    <h4 className='amount'>Cart({amount})</h4>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
