import LineItem from "../../components/LineItem/LineItem";
import { useState ,useEffect } from "react";
import {useNavigate} from 'react-router-dom'
import * as ordersAPI from "../../utilities/orders-api";


export default function OrderDetail() {
  const [cart,setCart]=useState(null)
   const navigate=useNavigate()

  useEffect(function(){
  async function getCart(){
    const cart = await ordersAPI.getCart()
    setCart(cart)
}
getCart()
}, []);


async function handleChangeQty(itemId,newQty){
const updatedCart = await ordersAPI.setItemQtyInCart(itemId,newQty)
setCart(updatedCart)
}


async function handleCheckout() {
  await ordersAPI.checkout();
  navigate('/orders');
}


  if (!cart) return null;

  const lineItems = cart.lineItems.map(item => 
    <LineItem 
    lineItem={item} 
    isPaid={cart.isPaid} 
    key={item._id}
    handleChangeQty={handleChangeQty} 
    />
  );

  return (
    <div >
      <div >
        {cart.isPaid ? (
          <span>
            ORDER <span >{cart.orderId}</span>
          </span>
        ) : (
          <span>NEW ORDER</span>
        )}
      </div>
      <div >
        {lineItems.length ? (
          <>
            {lineItems}
            <section>
              {cart.isPaid ? (
                <span >TOTAL&nbsp;&nbsp;</span>
              ) : (
                <button
                 
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >
                  CHECKOUT
                </button>
              )}
              <span>{cart.totalQty}</span>
              <span >${cart.orderTotal.toFixed(2)}</span>
            </section>
          </>
        ) : (
          <div >Nothing in the cart?</div>
        )}
      </div>
    </div>
  );
}
