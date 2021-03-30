import React from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import SearchBox from '../common/SearchBox';
import { FormSearchWrapper } from '../common/WrapperPage';

function SearchForm() {
  const { t } = useTranslation();
  const { handleSubmit } = useForm();
  return (
    <FormSearchWrapper>
      <SearchBox
        placeHoder={t('search_cat')}
        filterLabel={t('filter')}
      ></SearchBox>
    </FormSearchWrapper>
  );
}

export default SearchForm;
