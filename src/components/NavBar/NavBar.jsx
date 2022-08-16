import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service";
import { useState ,useEffect } from "react";
import * as ordersAPI from "../../utilities/orders-api";
import './NavBar.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from "react-bootstrap";

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
 <>
    <Navbar className="navBar">
       <Container>
       <Navbar.Brand href="/">
       <img
              src="https://upload.wikimedia.org/wikipedia/commons/2/24/LEGO_logo.svg"
              width="60"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
            </Navbar.Brand>

            <Nav className="me-auto">
            <Nav.Link href='/shop'>SHOP</Nav.Link>
            <Nav.Link href='/cart'>CART</Nav.Link>
          </Nav>
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link className='logout' to="" onClick={handleLogOut}>
        Log Out
      </Link>
      </Container>
      </Navbar>

    </>
  );
}
