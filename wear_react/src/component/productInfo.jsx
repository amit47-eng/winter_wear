import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductsInfo() {
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((res) => console.log(res.data));
  }, []);
  return <h3>Products{id}</h3>;
}

export default ProductsInfo;