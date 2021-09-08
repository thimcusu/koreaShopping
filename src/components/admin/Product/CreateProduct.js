import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../common/Button';
import { Row, Column } from '../../common/Grid';
import { ReactComponent as CaretDown } from '../../../assets/images/svg-icon/fi-rr-caret-down.svg';
import {
  ContainerPage,
  HeaderPage,
  TitlePage,
  TopButton,
  NavItem,
} from '../common/WrapperPage';
import TopNavPage from '../common/TopNavPage';
import SearchForm from './SearchForm';
import { statusProduct } from '../../../constants/apiConstants';
import { DEVICE_FIXED_SIZE } from '../../../constants/deviceSizes';
import AddProductForm from './AddProductForm';

function CreateProduct() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderPage>
        <TitlePage>
          <Row
            breakpoints={[DEVICE_FIXED_SIZE.mobileM, DEVICE_FIXED_SIZE.laptop]}
            spacing={[0]}
          >
            <Column cols={[6, 6]}>
              <h2>New Product</h2>
            </Column>
            <Column cols={[6, 3]}></Column>
          </Row>
          <TopButton className="top-button">
            <Button border>
              More actions
              <CaretDown />
            </Button>
            <Button primary active type="submit" form="create-product-form">
              Save
            </Button>
          </TopButton>
        </TitlePage>
        <TopNavPage list={statusProduct}></TopNavPage>
      </HeaderPage>
      <ContainerPage>
        <AddProductForm />
      </ContainerPage>
    </>
  );
}

export default CreateProduct;
