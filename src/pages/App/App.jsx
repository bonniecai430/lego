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
  

  return (
    <main className="App">
     
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path="/shop" element={< ShopPage user={user} setUser={setUser}/>}></Route>
            <Route path="/cart" element={< OrderDetail user={user} setUser={setUser}/>}></Route>
            <Route path="/product/:id" element={<ProductDetail user={user} setUser={setUser}/>}/>
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}
