import React from 'react';
import { useLocation, useParams } from 'react-router';
import { default as slugUrl } from 'slug';
import { useSelector } from 'react-redux';

import useFetch from '../../../api/useFetch';
import PageNotFound from '../../PageNotFound';
import httpStatus from '../../../constants/httpStatus';
import Policy from '../ContentBottom/Policy';
import {
  Banner,
  ContainerFilter,
  ContainerSorting,
} from './StyledCategoryPage';
import bannerCat from '../../../assets/images/iphone-6s-wall.jpeg';
import {
  ContainerProducts,
  ListProduct,
  TitleProducts,
  ProductItem,
  ProductContent,
  ProductTitle,
  ProductPrice,
  ProductTags,
} from '../Products/StyledProducts';
import { ReactComponent as ArrowDown } from '../../../assets/images/svg-icon/fi-rr-angle-small-down.svg';
import { products } from '../../../utils/products';
import Pagination from '../../common/Pagination';
import { PAGE_SIZE } from '../../../constants/common';

function ProdutDetail() {
  const { slug } = useParams();
  // console.log('slug: ', slug);

  // const [data, status, isLoading, error] = useFetch(`products/detail/${slug}`);
  const { search } = useLocation();
  const categories = useSelector(state => state.categories);
  if (!categories.find(e => e.id.toLowerCase() === slug)) {
    return <PageNotFound />;
  } else
    return (
      <div className="main-container">
        <Banner src={bannerCat} />
        <ContainerProducts>
          {/* <TitleProducts>AAA</TitleProducts> */}
          <ContainerFilter>
            <div>{`Showing ${products.length} results`}</div>
            <ContainerSorting>
              <span>Sort by</span>
              <ArrowDown />
              <ul>
                <li>Default</li>
                <li>Price</li>
                <li>Name</li>
              </ul>
            </ContainerSorting>
          </ContainerFilter>
          <ListProduct>
            {products.map(e => {
              const urlProduct = `/products/${slugUrl(e.name)}`;
              return (
                <ProductItem key={e._id}>
                  <figure>
                    <a href={urlProduct}>
                      <img loading="lazy" src={e.images[0]} />
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
        <Pagination />
        <Policy />
      </div>
    );
}

export default ProdutDetail;
