import { useState, useEffect,useRef} from "react";
import * as itemsAPI from "../../utilities/items-api";
import ThemeList from '../../components/ThemeList/ThemeList'
import ProductList from '../../components/ProductList/ProjectList'


export default function ShopPage() {
  const [listItems, setListItems] = useState([]);
  const [activeTheme,setActiveTheme]=useState('')

  const themesRef=useRef([]);
  useEffect(function () {
    async function getItems() {
      const items = await itemsAPI.getAll();
      themesRef.current = items.reduce((ths, item) => {
        const th = item.theme.name;
        return ths.includes(th) ? ths : [...ths, th];
      }, []);
      setListItems(items);
      setActiveTheme((themesRef.current[0]))
    }
    getItems();
  }, []);
  return (
    <main>
        <aside>
            <ThemeList 
            themes={themesRef.current} 
            activeTheme={activeTheme}
            setActiveTheme={setActiveTheme}/>
        </aside>
    <ProductList 
    productItems={listItems.filter(item =>item.theme.name ===activeTheme)}/>
    </main>
  )
}
