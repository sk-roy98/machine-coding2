import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductList from "./components/ProductList/ProductList";

function App() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <ProductList products={products} />
    </div>
  );
}

export default App;
