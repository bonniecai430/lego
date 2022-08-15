import { Link } from "react-router-dom";
import ProductDetail from '../ProductDetail/ProductDetail'

export default function ProductListItem({productItem,handleAddToOrder,childToParent}){

return(
    <div >
        <h3>
            <Link 
            onClick={() => childToParent(productItem)}
            to={`/product/${productItem._id}`}> {productItem.name}</Link>
            </h3>
        <div className="buy">
            {/* <div>{productItem.image}</div> */}
<span>
    ${productItem.price.toFixed(2)}
</span>
<button onClick={()=> handleAddToOrder(productItem._id)}>
    Add to Cart
</button>
        </div>
       
    </div>
   
)
}