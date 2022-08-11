import { useState, useEffect,useRef} from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as ordersAPI from "../../utilities/orders-api";
import ThemeList from '../../components/ThemeList/ThemeList'
import ProductList from '../../components/ProductList/ProjectList'
import OrderDetail from '../OrderDetail'
import UserLogOut from '../../components/UserLogOut/UserLogOut'
import {useNavigate} from 'react-router-dom'

export default function ShopPage({user,setUser}) {
  const [listItems, setListItems] = useState([]);
  const [activeTheme,setActiveTheme]=useState('')
  const [cart,setCart]=useState(null)
  const themesRef=useRef([]);
   const navigate=useNavigate()

  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      themesRef.current = [...new Set(items.map (item=>item.theme.name))]
      setListItems(items);
      setActiveTheme((themesRef.current[0]))
    }
    getItems();

    async function getCart(){
        const cart = await ordersAPI.getCart()
        setCart(cart)
    }
    getCart()
  }, []);

async function handleAddToOrder(itemId){
const cart = await ordersAPI.addItemToCart(itemId)
setCart(cart)
}
async function handleChangeQty(itemId,newQty){
const updatedCart = await ordersAPI.setItemQtyInCart(itemId,newQty)
setCart(updatedCart)
}
async function handleCheckout(){
    await ordersAPI.checkout();
    navigate('/orders');
}

  return (
    <main>
        <aside>
            <ThemeList 
            themes={themesRef.current} 
            activeTheme={activeTheme}
            setActiveTheme={setActiveTheme}/>
            <UserLogOut user={user} setUser={setUser} />
        </aside>
    <ProductList 
    productItems={listItems.filter(item =>item.theme.name ===activeTheme)}
     handleAddToOrder={handleAddToOrder} 
     
    />
    < OrderDetail 
    order={cart} 
    handleChangeQty={handleChangeQty} 
    handleCheckout={handleCheckout}/>
    </main>
  )
}
