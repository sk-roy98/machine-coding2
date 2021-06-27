import React from "react";
import Card from "../Card/Card"
import "./productList.css"

const ProductList = ({ products }) => {
    console.log(products)
  return (
    <div className="displaySection">
      {products?.map((item) => (
        <div key={item.id}>
          <Card
            image={item.image}
            brand={item.brand}
            title={item.title}
            price={item.price}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
