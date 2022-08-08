
export default function ProductListItem({productItem}){
return(
    <div>
        <div>{productItem.name}</div>
        <div className="buy">
<span>
    ${productItem.price.toFixed(2)}
</span>
<button onClick={()=> console.log('clicked')}>
    Add to Cart
</button>
        </div>
    </div>
)
}