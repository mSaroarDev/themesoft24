import MasterLayout from "@/layouts/MasterLayout";
import Homepage from "@/pages/Homepage";
import { Route, Routes } from "react-router-dom";
import Checkout from "./pages/Checkout";
import LoginPage from "./pages/Login";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ProductsByCategory from "./pages/ProductsByCategory";

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
        </Routes>
      </MasterLayout>
    </>
  );
}

export default App;
