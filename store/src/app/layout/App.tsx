import { useEffect, useState } from "react";
import { Product } from "../models/Product";
import Catalog from "../../features/catalog/Catalog";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/ecommerce/products')
    .then(response => response.json())
    .then(data => setProducts(data));
  }, []);

  function addProduct() {
    setProducts(prevState => [...prevState,
      {
        id: prevState.length + 100,
        name: 'product' + (prevState.length + 1), 
        price: (prevState.length * 100) + 100,
        brand: 'pitao',
        description: 'something',
        pictureUrl: 'http://picsum.photos/200'
      }
    ])
  }
  return (
      <div>
        <h1>Re-Store</h1>
        <Catalog products = {products} addProduct = {addProduct}/>
      </div>
  )
}

export default App
