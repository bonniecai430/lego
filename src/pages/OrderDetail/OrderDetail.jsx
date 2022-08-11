import LineItem from "../components/LineItem/LineItem";
import lineItem from '../../components/LineItem/LineItem'

export default function OrderDetail({ order ,handleChangeQty, handleCheckout}) {
  if (!order) return null;

  const lineItems = order.lineItems.map(item => 
    <LineItem 
    lineItem={item} 
    isPaid={order.isPaid} 
    key={item._id}
    handleChangeQty={handleChangeQty} />
  );

  return (
    <div >
      <div >
        {order.isPaid ? (
          <span>
            ORDER <span >{order.orderId}</span>
          </span>
        ) : (
          <span>NEW ORDER</span>
        )}
        <span>{new Date(order.updatedAt).toLocaleDateString()}</span>
      </div>
      <div >
        {lineItems.length ? (
          <>
            {lineItems}
            <section>
              {order.isPaid ? (
                <span >TOTAL&nbsp;&nbsp;</span>
              ) : (
                <button
                  className="btn-sm"
                  onClick={handleCheckout}
                  disabled={!lineItems.length}
                >
                  CHECKOUT
                </button>
              )}
              <span>{order.totalQty}</span>
              <span className="right">${order.orderTotal.toFixed(2)}</span>
            </section>
          </>
        ) : (
          <div className="hungry">Nothing in the cart?</div>
        )}
      </div>
    </div>
  );
}
