import React, { useEffect, useMemo, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import useOnClickOutside from '../../common/useOnClickOutside';
import { PanelRightWrapper, PanelRightContainer } from '../common/GlobalModal';
import { StyledCategoryForm } from './StyledCategory';
import Input, {
  WrapperInput,
  Label,
  ErrorInput,
  NoteInput,
} from '../common/Input';
import Chip from '../common/Chip';
import TextField, { LabelTextField } from '../common/TextField';
import { Select, SelectOption, CustomArrow } from '../common/Select';
import Checkbox from '../common/Checkbox';
import { Row, Column } from '../../common/Grid';
import { FlexBox, FlexItem } from '../../common/Flexbox';
import { CATEGORY_VALIDATOR } from '../../../constants/validation';
import Button from '../common/Button';
import { DEVICE_FIXED_SIZE } from '../../../constants/deviceSizes';
import { statusCategory } from '../../../constants/apiConstants';
import { ReactComponent as ArrowDownIcon } from '../../../assets/images/svg-icon/fi-rr-angle-small-down.svg';
import DropDownFilter from '../common/DropDownFilter';
import { toHierarchyCats, getSelectedParents } from '../../../utils/category';
import {
  postCategory,
  updateCategory,
} from '../../../redux/actions/categoryAction';

function CategoryForm({ category, active, hideCategoryForm }) {
  const ref = useRef(null);
  useOnClickOutside(ref, hideCategoryForm);
  const {
    register,
    formState: { isSubmitting, isDirty, isValid, errors },
    getValues,
    setValue,
    clearErrors,
    handleSubmit,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {},
    resolver: undefined,
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: true,
  });
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { categories, apiCallStatus } = useSelector(state => {
    return {
      categories: state.categories,
      apiCallStatus: state.apiCallStatus,
    };
  }, shallowEqual);
  const [pathCategory, setPathCategory] = useState([]);
  const optionsCategory = Array.from(statusCategory);

  const onSubmit = async data => {
    const statusEl = document.querySelector(
      "#category-form select[name='status']"
    );
    let level = 1;
    console.log(pathCategory);
    for (let path of pathCategory) {
      const tempLevel = path.slice(1, -1).split(',').length + 1;
      if (tempLevel > level) {
        level = tempLevel;
      }
    }
    const newCategory = {
      name: data.name,
      description: data.description,
      status: statusEl.value,
      path: pathCategory,
      level: level,
    };

    toast.promise(
      dispatch(
        category
          ? updateCategory({ ...newCategory, _id: category._id })
          : postCategory(newCategory)
      ),
      {
        pending: {
          render() {
            return 'Updating...';
          },
        },
        success: {
          render({ data }) {
            return data.message || 'Success';
          },
        },
        error: {
          render({ data }) {
            return data.message || 'Something was wrong!';
          },
        },
      }
    );
  };

  const setValueCategory = category => {
    console.log(category);
    const formEl = document.getElementById('category-form');
    if (!formEl) return;
    const { name, description, status } = category || {};
    const nameEl = formEl.querySelector("[name='name']");
    const descEl = formEl.querySelector("[name='description']");
    const statusEl = formEl.querySelector("[name='status']");
    if (nameEl) nameEl.value = name || '';
    if (descEl) descEl.value = description || '';
    if (statusEl) statusEl.value = status || 'DRAFT';
  };

  useEffect(() => {
    setValueCategory(category);
    setPathCategory(category ? category.path : []);
    console.log(pathCategory);
    clearErrors();
  }, [category]);

  const handleSelectCategory = _id => {
    let currentPath = pathCategory;
    const selectedCat = categories.find(e => e._id === _id);
    const path =
      selectedCat.level === 1
        ? `,${selectedCat.name},`
        : selectedCat.path + selectedCat.name + ',';
    console.log(path);
    if (pathCategory.length === 0) {
      setPathCategory([path]);
    }
  };

  if (active === undefined) return null;
  return (
    <PanelRightWrapper ref={ref} active={active}>
      <PanelRightContainer>
        <StyledCategoryForm
          id="category-form"
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
          <Row>
            <Column>
              <WrapperInput>
                <Label htmlFor="name">Name Category</Label>
                <Input
                  id="name"
                  defaultValue={category && category.name}
                  {...register('name', CATEGORY_VALIDATOR.NAME)}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
                {errors.name && (
                  <ErrorInput role="alert">{errors.name.message}</ErrorInput>
                )}
              </WrapperInput>
            </Column>
          </Row>
          <Row>
            <Column>
              <WrapperInput>
                <Label htmlFor="description">Desciption </Label>
                <Input
                  as="textarea"
                  id="description"
                  defaultValue={category && category.description}
                  {...register('description', CATEGORY_VALIDATOR.DESCRIPTION)}
                  aria-invalid={errors.description ? 'true' : 'false'}
                />
                {errors.description && (
                  <ErrorInput role="alert">
                    {errors.description.message}
                  </ErrorInput>
                )}
              </WrapperInput>
            </Column>
          </Row>
          {(!category || category.level > 1) && (
            <FlexBox>
              <FlexItem>
                <WrapperInput>
                  <Label>Parent Category</Label>
                  <DropDownFilter
                    filterLabel="Select Category"
                    filters={toHierarchyCats(categories)}
                    defaultFilter={getSelectedParents(pathCategory)}
                    multi={true}
                    onSelectFilter={handleSelectCategory}
                    border
                  />
                </WrapperInput>
              </FlexItem>
            </FlexBox>
          )}
          <Row
            breakpoints={[DEVICE_FIXED_SIZE.mobileM, DEVICE_FIXED_SIZE.tablet]}
          >
            <Column cols={[12, 7]}>
              <Label htmlFor="status">Status</Label>
              <WrapperInput>
                <Select
                  id="status"
                  {...register('status')}
                  defaultValue={category ? category.status : 'DRAFT'}
                >
                  {optionsCategory
                    .filter(opt => opt.key !== 'all')
                    .map((opt, index) => (
                      <SelectOption
                        key={`product-option-${opt.key}`}
                        value={opt.value.toUpperCase()}
                      >
                        {t(opt.key) || opt.value}
                      </SelectOption>
                    ))}
                </Select>
                <CustomArrow>
                  <ArrowDownIcon />
                </CustomArrow>
              </WrapperInput>
            </Column>
          </Row>
          <Button type="submit" primary active>
            {t('save')}
          </Button>
        </StyledCategoryForm>
      </PanelRightContainer>
    </PanelRightWrapper>
  );
}

export default CategoryForm;
