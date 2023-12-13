import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Product from '../../components/product/product';
import { CategoriesContext } from '../../contexts/categories.context';

const ProductPage = () => {
  const { category, productName } = useParams();
  console.log('Category:', category);
  console.log('ProductName:', productName);

  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category] || []);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="product-page-container">
      <h2>Category: {category}</h2>
      <h2>Product Name: {productName}</h2>
      {products &&
        products
          .filter(
            (product) =>
              product.name.toLowerCase().split(' ').join('-') === productName
          )
          .map((product) => <Product key={product.id} product={product} />)}
    </div>
  );
};

export default ProductPage;
