import ProductListItem from '../../components/ProductListItem/ProductListItem'

export default function ProductList({productItems}){
const items = productItems.map(item=>
    <ProductListItem 
    key={item.id}
    productItem={item}
    />
    )
    return(
        <main>
            {items}
        </main>
    )
}