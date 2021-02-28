import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../common/Button';
import { ReactComponent as UploadIcon } from '../../../assets/images/fi-rr-upload.svg';
import { ReactComponent as DownloadIcon } from '../../../assets/images/fi-rr-download.svg';
import {} from './StyledProduct';
import {
  ContainerPage,
  HeaderPage,
  TitlePage,
  TopButton,
  NavItem,
} from '../common/WrapperPage';
import TopNavPage from '../common/TopNavPage';
import SearchForm from './SearchForm';
import { statusProduct } from '../../../constants/statusItem';

function ProductPage() {
  const { t } = useTranslation();
  return (
    <>
      <HeaderPage>
        <TitlePage>
          <h2>{t('products')}</h2>
          <TopButton>
            <Button border>
              {t('admin.import')}
              <UploadIcon />
            </Button>
            <Button border>
              {t('admin.export')}
              <DownloadIcon />
            </Button>
          </TopButton>
        </TitlePage>
        <TopNavPage list={[...statusProduct]}></TopNavPage>
      </HeaderPage>

      <ContainerPage>
        <SearchForm />
      </ContainerPage>
    </>
  );
}

export default ProductPage;
