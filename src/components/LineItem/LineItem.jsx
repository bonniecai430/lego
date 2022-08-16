import "./LineItem.css";

export default function LineItem({ lineItem, isPaid, handleChangeQty }) {
  return (
    <div className="cart-box">
      <div className="card">
        <img className="card-img" src={lineItem.item.image} />
        <div className="card-content">
          <p>{lineItem.item.name}</p>
          <h3>${lineItem.item.price.toFixed(2)}</h3>

          <div className="amount">
            {!isPaid && (
              <button
                className="count"
                onClick={() =>
                  handleChangeQty(lineItem.item._id, lineItem.qty - 1)
                }
              >
                −
              </button>
            )}
            <span>{lineItem.qty}</span>
            {!isPaid && (
              <button
                className="count"
                onClick={() =>
                  handleChangeQty(lineItem.item._id, lineItem.qty + 1)
                }
              >
                +
              </button>
            )}
            {/* <div>${lineItem.extPrice.toFixed(2)}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
