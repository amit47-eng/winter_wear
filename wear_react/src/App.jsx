
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Products from './component/product'
import ProductsInfo from './component/productInfo'

function App() {

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Products/>} />
      <Route path="/home" element={<ProductsInfo/>}/>
      {/* <Route path='/about' element={<About/>}/> */}
    </Routes>
    </BrowserRouter> 
  </>
  )
}

export default App
