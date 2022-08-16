import './ProductDetail.css'
import {useState} from 'react'
import { addItemToCart } from '../../utilities/orders-api';
import * as ordersAPI from "../../utilities/orders-api";
export default function ProductDetail({data,setData,handleClick}){
   
const [cart,setCart]=useState(null)

async function handleAddToOrder(itemId){
    const cart = await ordersAPI.addItemToCart(itemId)
    setCart(cart)
    }

return(
    <section1>
        <div className='details'>
            <div className='details-img'>
    <img  src={data.image} />
    </div>
    <div className='details-content'>
   <h2 >{data.name}</h2>
   <h3>$ {data.price}</h3>
   <p>Availale now</p>
   <button
   className='details-addtocart'
   onClick={() => handleAddToOrder(data._id)}
   >Add To Cart</button>
  </div>
  </div>
    </section1>
)
}
