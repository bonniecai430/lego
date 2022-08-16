import ProductListItem from '../../components/ProductListItem/ProductListItem'
import './ProductList.css'
export default function ProductList({productItems,handleAddToOrder,childToParent}){
const items = productItems.map(item=>
    <ProductListItem
    key={item.id}
    productItem={item}
    handleAddToOrder={handleAddToOrder}
    childToParent={childToParent}
    /> 
    )

    return(
        <main className='ProductList'>
            {items}
        </main>
    )
}