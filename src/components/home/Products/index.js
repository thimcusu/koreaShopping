import React from 'react'
import { ContainerProducts, TitleProducts } from './StyledProducts';
function Products() {
    return (
        <div className="main-container">
            <ContainerProducts>
                <TitleProducts>
                    <h3>Recommend Products</h3>
                    <a>See more</a>
                </TitleProducts>
            </ContainerProducts>
        </div>
    )
}

export default Products;
