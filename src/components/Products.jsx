import React, { useState } from "react";

const Products = () => {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Product 1", price: 100 },
    { id: 2, name: "Product 2", price: 150 },
    { id: 3, name: "Product 3", price: 200 },
    // Add more products here
  ];

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const buyNow = () => {
    // Implement buy now functionality here
    console.log("Buy Now clicked");
  };

  return (
    <div className="max-container">
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">Price: Rs. {product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-2"
            >
              Add to Cart
            </button>
            <button
              onClick={buyNow}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
