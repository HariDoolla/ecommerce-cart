// src/pages/ProductListing.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import './ProductListingPage.css';

const ProductListingPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Replace this URL with your actual API endpoint
    fetch('https://fakestoreapi.com/products?limit=20')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="product-listing">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductListingPage;
