import MasterLayout from "@/layouts/MasterLayout";
import Checkout from "@/pages/Checkout";
import Homepage from "@/pages/Homepage";
import LoginPage from "@/pages/Login";
import ProductDetailsPage from "@/pages/ProductDetailsPage";
import ProductsByCategory from "@/pages/ProductsByCategory";
import Categories from "@/pages/admin/Categories";
import Dashboard from "@/pages/admin/Dashboard";
import Orders from "@/pages/admin/Orders";
import Products from "@/pages/admin/Products";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <MasterLayout>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/categories/:categoryId" element={<ProductsByCategory />} />
          <Route path="/product/:productId" element={<ProductDetailsPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/login" element={<LoginPage />} />

          {/* admin routes */}
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/products" element={<Products />} />
          <Route path="/admin/categories" element={<Categories />} />
          <Route path="/admin/order" element={<Orders />} />
        </Routes>
      </MasterLayout>
    </>
  );
}

export default App;
