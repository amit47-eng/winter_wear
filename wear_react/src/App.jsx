import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsInfo from "./Components/ProductsInfo/ProductsInfo";
import Products from "./Components/Products/Products";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/products/:id" element={<ProductsInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;