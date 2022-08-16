import LineItem from "../../components/LineItem/LineItem";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as ordersAPI from "../../utilities/orders-api";
import './OrderDetail.css'
export default function OrderDetail() {
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();

  useEffect(function () {
    async function getCart() {
      const cart = await ordersAPI.getCart();
      setCart(cart);
    }
    getCart();
  }, []);

  async function handleChangeQty(itemId, newQty) {
    const updatedCart = await ordersAPI.setItemQtyInCart(itemId, newQty);
    setCart(updatedCart);
  }

  async function handleCheckout() {
    await ordersAPI.checkout();
    navigate("/orders");
  }

  if (!cart) return null;

  const lineItems = cart.lineItems.map((item) => (
    <LineItem
      lineItem={item}
      isPaid={cart.isPaid}
      key={item._id}
      handleChangeQty={handleChangeQty}
    />
  ));
  return (
    <section>
      <div className="cart">
    
        {lineItems.length ? (
          <>
            {lineItems}
          
            <div className="checkout">
              <p className="heading">Price Details</p>
              <div className="price">
                <p>Order Value ({cart.totalQty}) items</p>
                <p>${cart.orderTotal.toFixed(2)}</p>
                </div>
                <div className="delivery">
                        <p>Shipping Fee: </p>{cart.orderTotal.toFixed(2) < 50 ? (<p>5</p>) : (<p>Free</p>)}
                </div>

                <div className="total">
                        <p>Order Total: </p> {cart.orderTotal.toFixed(2) < 50 ? (<p>{parseFloat(cart.orderTotal.toFixed(2))+5}</p>) : (<p>{cart.orderTotal.toFixed(2)}</p>)}
                   </div>

                {cart.isPaid ? (
                  <span>TOTAL&nbsp;&nbsp;</span>
                ) : 
                (
                  <button className="checkout-btn" onClick={handleCheckout} disabled={!lineItems.length}>
                    CHECKOUT
                  </button> 
                )}
              <br /><small>FREE Shipping with orders over $50!*</small>
            </div>
          </>
        ) : (
          <div>Nothing in the cart?</div>
        )}
      </div>
    </section>
  );
}
