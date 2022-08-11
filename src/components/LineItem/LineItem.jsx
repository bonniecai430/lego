

export default function LineItem({lineItem,isPaid,handleChangeQty}){
return(
    <>
    <span>{lineItem.item.name}</span>
    <span>{lineItem.item.price.toFixed(2)}</span>
    {!isPaid &&
          <button
            onClick={() => handleChangeQty(lineItem.item._id,lineItem.qty-1)}
          >−</button>
        }
    <span>{lineItem.qty}</span>
    {!isPaid &&
          <button
            onClick={() => handleChangeQty(lineItem.item._id,lineItem.qty+1)}
          >+</button>
        }
         <div>${lineItem.extPrice.toFixed(2)}</div>
    </>
)
}