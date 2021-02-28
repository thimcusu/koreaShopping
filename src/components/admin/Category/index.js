import React from 'react';
import { useTranslation } from 'react-i18next';

import Button from '../common/Button';
import { ReactComponent as UploadIcon } from '../../../assets/images/fi-rr-upload.svg';
import { ReactComponent as DownloadIcon } from '../../../assets/images/fi-rr-download.svg';

import {} from './StyledCategory';
import {
  ContainerPage,
  HeaderPage,
  TitlePage,
  TopButton,
} from '../common/WrapperPage';

function Category() {
  const { t } = useTranslation();

  return (
    <>
      <HeaderPage>
        <TitlePage>
          <h2>{t('categories')}</h2>
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
      </HeaderPage>
      <ContainerPage>ABC</ContainerPage>
    </>
  );
}

export default Category;
