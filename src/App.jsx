import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import Khata from "./components/Khata";
import Screen1 from "./components/Screen1";
import Providers from "./context/Providers";
import Admin from "./admin/Admin";
import Customer from "./admin/Customer";
import AddOrder from "./admin/AddOrder";
import AddProduct from "./admin/AddProduct";
import Order from "./admin/Order";
import Analytical from "./admin/Analytical";


function App() {
  return (
    <>
    <Providers>
      <Routes>
        <Route path="/" element={<Screen1 />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/khata" element={<Khata />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin" element={<Admin />}>
        <Route index element={<Order />} />
        <Route path="customer" element={<Customer />} />
        <Route path="addorder" element={<AddOrder />} />
        <Route path="addproduct" element={<AddProduct />} />
        <Route path="order" element={<Order />} />
        <Route path="analysis" element={<Analytical />} />
      </Route>
        </Routes>
        </Providers>
        
    </>
  );
}

export default App;