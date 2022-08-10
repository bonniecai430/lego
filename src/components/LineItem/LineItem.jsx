

export default function LineItem({lineItem,isPaid}){
return(
    <>
    <span>{lineItem.item.name}</span>
    <span>{lineItem.item.price.toFixed(2)}</span>
    {!isPaid &&
          <button
            onClick={() => alert('clicked')}
          >−</button>
        }
    <span>{lineItem.qty}</span>
    {!isPaid &&
          <button
            onClick={() => alert('clicked')}
          >+</button>
        }
         <div>${lineItem.extPrice.toFixed(2)}</div>
    </>
)
}