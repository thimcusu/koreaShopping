import React from 'react';
import { useTranslation } from 'react-i18next';

import useFetch from '../../../api/useFetch';
import Button from '../common/Button';
import { convertIOS } from '../../../utils/day';
import { pathCatToString } from '../../../utils/category';
import { ReactComponent as UploadIcon } from '../../../assets/images/fi-rr-upload.svg';
import { ReactComponent as DownloadIcon } from '../../../assets/images/fi-rr-download.svg';

import {} from './StyledCategory';
import Table from '../common/TableItems';
import {
  ContainerPage,
  HeaderPage,
  TitlePage,
  TopButton,
} from '../common/WrapperPage';
import SearchForm from './SearchForm';

function Category() {
  const { t } = useTranslation();
  const query = 'categories?page=1';
  const [data, isLoading, error] = useFetch(query);
  console.log('📗 data', data);
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
      <ContainerPage>
        <SearchForm />
        <Table>
          <thead>
            <tr>
              <th>{t('t_no')}</th>
              <th>{t('name')}</th>
              <th>{t('hierachy')}</th>
              <th>{t('create_at')}</th>
              <th>{t('update_at')}</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e, i) => (
              <tr key={e._id}>
                <td>{i + 1}</td>
                <td>{e.name}</td>
                <td>{pathCatToString(e.path)}</td>
                <td>{convertIOS(e.created_at)}</td>
                <td>{convertIOS(e.updated_at)}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ContainerPage>
    </>
  );
}

export default Category;
