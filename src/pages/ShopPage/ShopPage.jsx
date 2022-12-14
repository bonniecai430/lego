import { useState, useEffect,useRef} from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import ThemeList from '../../components/ThemeList/ThemeList'
import ProductList from '../../components/ProductList/ProjectList'
// import UserLogOut from '../../components/UserLogOut/UserLogOut'



export default function ShopPage({user,setUser,childToParent}) {
  const [listItems, setListItems] = useState([]);
  const [activeTheme,setActiveTheme]=useState('')
  const [cart,setCart]=useState(null)
  const themesRef=useRef([]);


  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      themesRef.current = [...new Set(items.map (item=>item.theme.name))]
      setListItems(items);
      setActiveTheme((themesRef.current[0]))
    }
    getItems();
},[])
async function handleAddToOrder(itemId){
    const cart = await ordersAPI.addItemToCart(itemId)
    setCart(cart)
    }


return (
    <main>
        <aside>
            <ThemeList 
            themes={themesRef.current} 
            activeTheme={activeTheme}
            setActiveTheme={setActiveTheme}/>
        </aside>
    <ProductList 
    productItems={listItems.filter(item =>item.theme.name ===activeTheme)}
     handleAddToOrder={handleAddToOrder} childToParent={childToParent}
    />
    </main>
  )
}
