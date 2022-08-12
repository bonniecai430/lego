import {useParams} from 'react-router-dom'

export default function ProductDetail({productItem}){
    const {id} =useParams()
   console.log({productItem})
// const productData = productItems.find(product => productItems._id===id)
return(
    <>
    <h3>
        123
 {/* {productData.name} */}
    </h3>
    </>
)

}