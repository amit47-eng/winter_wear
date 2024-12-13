import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductsInfo from "./component/productInfo";
import Products from "./component/product";
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