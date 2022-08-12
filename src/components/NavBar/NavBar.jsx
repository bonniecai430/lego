import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import { useState ,useEffect } from "react";
import * as ordersAPI from "../../utilities/orders-api";



export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    setUser(null);
    
  }
  const [cart,setCart]=useState(null)
  useEffect(function(){
    async function getCart(){
      const cart = await ordersAPI.getCart()
      setCart(cart)
  }
  getCart()
  }, []);
  return (
    <nav>
      <Link to='/shop'>Shop</Link>
      <Link to='/cart'>Cart</Link>
      {/* <span>{cart.totalQty}</span> */}
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}
