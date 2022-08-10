
export default function ProductListItem({productItem,handleAddToOrder}){
return(
    <div>
        <div>{productItem.name}</div>
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