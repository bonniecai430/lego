import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import ShopPage from "../ShopPage/ShopPage";
import OrderDetail from "../OrderDetail/OrderDetail";
import ProductDetail from '../../components/ProductDetail/ProductDetail'



export default function App() {
  const [user, setUser] = useState(getUser());
  const [data,setData]=useState('')
  const childToParent = (childData) => {
  setData(childData)
}
  return (
    <main className="App">
     
      {user ? (
        <>
        <div>
        <NavBar className="navBar" user={user} setUser={setUser} />
        </div>
          <Routes>
            <Route path="/shop" element={< ShopPage user={user} setUser={setUser} childToParent={childToParent}/>}></Route>
            <Route path="/cart" element={< OrderDetail user={user} setUser={setUser}/>}></Route>
            <Route path="/product/:id" element={<ProductDetail data={data} setData={setData}/>}/>
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
