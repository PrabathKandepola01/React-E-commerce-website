import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Breadcrum from '../Componets/Breadcrum/Breadcrum';
import ProductDisplay from '../Componets/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Componets/DescriptionBox/DescriptionBox';
import { ShopContext } from '../Context/ShopContext';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams(); // Note the parentheses here
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div>
      <Breadcrum product={product}/>
      <ProductDisplay product={product}/>
      <DescriptionBox />
    </div>
  );
}

export default Product;

