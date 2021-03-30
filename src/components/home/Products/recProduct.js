import React from 'react';
import slug from 'slug';

import {
  ContainerProducts,
  ListProduct,
  TitleProducts,
  ProductItem,
  ProductContent,
  ProductTitle,
  ProductPrice,
  ProductTags,
} from './StyledProducts';
import { products } from '../../../utils/products';
function RecProduct() {
  return (
    <ContainerProducts>
      <TitleProducts>
        <h3>Recommend Products</h3>
        <a>See more</a>
      </TitleProducts>
      <ListProduct>
        {products.map((e) => {
          const urlProduct = `/products/${slug(e.name)}`;
          return (
            <ProductItem key={e._id}>
              <figure>
                <a href={urlProduct}>
                  <img src={e.images[0]} />
                </a>
              </figure>
              <ProductTags className="new">
                <a href="">New</a>
              </ProductTags>
              <ProductContent>
                <ProductTitle>
                  <a href={urlProduct}>{e.name}</a>
                </ProductTitle>
                <ProductPrice>{e.price}</ProductPrice>
              </ProductContent>
            </ProductItem>
          );
        })}
      </ListProduct>
    </ContainerProducts>
  );
}

export default RecProduct;
