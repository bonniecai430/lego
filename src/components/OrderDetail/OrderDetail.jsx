import LineItem from "../LineItem/LineItem";

export default function OrderDetail({ order }) {
  if (!order) return null;

  const lineItems = order.lineItems.map(item => 
    <LineItem 
    lineItem={item} 
    isPaid={order.isPaid} 
    key={item._id} />
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
                  onClick={() => alert("clicked")}
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
