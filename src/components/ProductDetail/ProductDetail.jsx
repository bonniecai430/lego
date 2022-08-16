import {useParams} from 'react-router-dom'
import './ProductDetail.css'
export default function ProductDetail({data,setData}){
    

return(
    <section>
        <div className='details'>
    <img className='details-img' src={data.image} />

    <div>
   <h2 >
    {data.name}
   </h2>
   <h3>
   $ {data.price}
   </h3>
   {/* <button
   onClick={() => handleAddToOrder(productItem._id)}
   >Add To Cart</button> */}
  </div>
  </div>
    </section>
)

}