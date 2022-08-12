import { Link } from "react-router-dom";
import ProductDetail from '../ProductDetail/ProductDetail'

export default function ProductListItem({productItem,handleAddToOrder}){
<prductDetail productItem={productItem}/>
return(
    <div >
        <h3>
            <Link to={`/product/${productItem._id}`}> {productItem.name}</Link>
            </h3>
        <div className="buy">
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