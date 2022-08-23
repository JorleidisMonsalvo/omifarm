import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from './'
import { useStateContext } from "../context/StateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities, changeLine } = useStateContext() 
  return (
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">OMI FARM</Link>
      </p>
      <p className="navbar-link">
        <a href="/products" onClick={()=> changeLine('')}>Productos</a>
      </p>
      <p className="navbar-link">
        <Link href="/testimonios">Testimonios</Link>
      </p>
      <p className="navbar-link">
        <Link href="/aboutUs">Sobre nosotros</Link>
      </p>
      {/* <button type="button" className="cart-icon" onClick={()=>setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />} */}
    </div>
  );
};

export default Navbar;
