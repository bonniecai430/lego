import ProductListItem from '../../components/ProductListItem/ProductListItem'

export default function ProductList({productItems,handleAddToOrder}){
const items = productItems.map(item=>
    <ProductListItem 
    key={item.id}
    productItem={item}
    handleAddToOrder={handleAddToOrder}
    />
    )
    return(
        <main>
            {items}
        </main>
    )
}