import "./App.css";
import { useState } from "react";
import { Routes, Route ,Navigate} from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NavBar from "../../components/NavBar/NavBar";
import ShopPage from "../ShopPage/ShopPage";
import OrderDetail from "../OrderDetail/OrderDetail";
import ProductDetail from '../../components/ProductDetail/ProductDetail'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Footer from '../../components/Footer/Footer'


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
        <NavBar user={user} setUser={setUser} />
       
        </div>
          <Routes>
            <Route path="/shop" element={< ShopPage user={user} setUser={setUser} childToParent={childToParent}/>}></Route>
            <Route path="/cart" element={< OrderDetail user={user} setUser={setUser}/>}></Route>
            <Route path="/product/:id" element={<ProductDetail data={data} setData={setData}/>}/>
            <Route path="/*" element={<Navigate to="/shop" />} />
          </Routes>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
       <Footer user={user} setUser={setUser}/>
    </main>
  );
}
