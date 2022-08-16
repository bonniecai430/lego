import { Link } from "react-router-dom";
import ProductDetail from "../ProductDetail/ProductDetail";
import "./ProductListItem.css";

export default function ProductListItem({
  productItem,
  handleAddToOrder,
  childToParent,
}) {

  return (
    <div className="ProductListItem">
      <div className="products-card">
        <img src={productItem.image} />
        <div className="products-content">
          <div className="name">
            <Link

              onClick={() => childToParent(productItem)}
              to={`/product/${productItem._id}`}
            >
              {" "}
              {productItem.name}
            </Link>
          </div>

          <p>${productItem.price.toFixed(2)}</p>
          <button
            className="btn-sm"
            onClick={() => handleAddToOrder(productItem._id)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
