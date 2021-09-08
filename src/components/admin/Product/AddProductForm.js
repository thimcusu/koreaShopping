import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import slug from 'slug';

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

import {
  WrapperProductForm,
  FieldSetSection,
  HeadingSection,
} from './StyledProduct';
import { DEVICE_FIXED_SIZE } from '../../../constants/deviceSizes';
import { statusProduct } from '../../../constants/apiConstants';
import { keywordsProduct } from '../../../utils/products';
import { toHierarchyCats, findIdInTree } from '../../../utils/category';
import {
  PRODUCT_VALIDATOR,
  METADATA_VALIDATOR,
} from '../../../constants/validation';
import { ReactComponent as DotsIcon } from '../../../assets/images/svg-icon/fi-rr-menu-dots-vertical.svg';
import { ReactComponent as ArrowDownIcon } from '../../../assets/images/svg-icon/fi-rr-angle-small-down.svg';

import useFetch from '../../../api/useFetch';
import { loadCategories } from '../../../redux/actions/categoryAction';
import DropDownFilter from '../common/DropDownFilter';

function AddProductForm({ products, isNew = false }) {
  const {
    register,
    formState: { isSubmitting, isDirty, isValid, errors },
    getValues,
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
  const categories = useSelector(state => state.categories);
  const optionsProduct = Array.from(statusProduct);
  const [listTags = data, status, isLoading, error] = useFetch('tags');
  const [catsProduct, setCatsProduct] = useState([]);
  const [tagsProduct, setTagsProduct] = useState([{ label: 'New' }]);
  const [keywords, setKeyWords] = useState([]);
  const [readOnlyInputs, setReadOnlyInputs] = useState([]);
  const templateListTags = listTags.map(tag => ({
    ...tag,
    label: tag.name,
  }));

  useEffect(() => {
    categories.length === 0 && dispatch(loadCategories());
  }, []);
  const onSubmit = data => {
    console.log(errors);
    console.log(data);
  };
  const handleAddTag = newTag => {
    const existedTag = templateListTags.find(e => e.label === newTag.label);
    const newTags = [...tagsProduct, existedTag || newTag];
    setTagsProduct(newTags);
  };

  const handleRemoveTag = tag => {
    const newTags = tagsProduct.filter(e => e.label !== tag.label);
    setTagsProduct(newTags);
  };
  const handleToggleSlug = event => {
    const productNaneElm = document.getElementById('slug');
    console.log(productNaneElm.readOnly);
    productNaneElm.readOnly = !event.target.checked;
    productNaneElm.focus();
  };

  const handleSelectCategory = _id => {
    const filters = cats2ListFilter(categories);
    let filterValue = filters.find(e => e._id === _id);
    if (!filterValue) {
      for (let i = 0; i < filters.length; i++) {
        filterValue = findIdInTree(_id, filters[i]);
        if (filterValue) break;
      }
    }
    setCatsProduct([...catsProduct, filters]);
  };

  return (
    <WrapperProductForm
      id="create-product-form"
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FieldSetSection>
        <FlexBox justifyContent="space-between" style={{ marginTop: '1rem' }}>
          <FlexItem>
            <HeadingSection>General information</HeadingSection>
          </FlexItem>
          <FlexItem>
            <DotsIcon style={{ height: '1rem' }} />
          </FlexItem>
        </FlexBox>
        <Row>
          <Column>
            <WrapperInput>
              <Label htmlFor="name">Displayd name</Label>
              <Input
                id="name"
                autoComplete="nope"
                {...register('name', PRODUCT_VALIDATOR.NAME)}
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
              <Label htmlFor="description">Description</Label>
              <Input
                as="textarea"
                id="description"
                {...register('description', {
                  ...PRODUCT_VALIDATOR.DESCRIPTION,
                })}
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
        <Row
          breakpoints={[DEVICE_FIXED_SIZE.mobileM, DEVICE_FIXED_SIZE.tablet]}
        >
          <Column cols={[6, 3]}>
            <WrapperInput>
              <Label htmlFor="description">Price (VND)</Label>
              <Input
                id="price"
                {...register('price', PRODUCT_VALIDATOR.PRICE)}
                aria-invalid={errors.price ? 'true' : 'false'}
              />
              {errors.price && (
                <ErrorInput role="alert">{errors.price.message}</ErrorInput>
              )}
            </WrapperInput>
          </Column>
          <Column cols={[6, 3]}>
            <WrapperInput>
              <Label htmlFor="description">Quantity</Label>
              <Input
                id="quantity"
                type="number"
                {...register('quantity', PRODUCT_VALIDATOR.QUANTITY)}
                aria-invalid={errors.quantity ? 'true' : 'false'}
              />
              {errors.quantity && (
                <ErrorInput role="alert">{errors.quantity.message}</ErrorInput>
              )}
            </WrapperInput>
          </Column>
          <Column
            cols={[3, 2]}
            offsets={[0, 2]}
            style={{ marginTop: 'auto' }}
            // spacing={[0, 12]}
          >
            <WrapperInput>
              <NoteInput>{`*${t('sku_note_not_required')}`}</NoteInput>
            </WrapperInput>
          </Column>
          <Column cols={[3, 2]} style={{ marginTop: 'auto' }}>
            <WrapperInput>
              <TextField id="sku" {...register('sku')} placeholder="SKU" />
              <LabelTextField htmlFor="sku">SKU</LabelTextField>
            </WrapperInput>
          </Column>
        </Row>

        <Row>
          <Column cols={[6, 6]}>
            <WrapperInput>
              <Label>Category</Label>
              <DropDownFilter
                filterLabel="Select Category"
                filters={toHierarchyCats(categories)}
                onSelectFilter={handleSelectCategory}
                border
              />
            </WrapperInput>
          </Column>
        </Row>

        <Row>
          <Column>
            <WrapperInput>
              <Label htmlFor="seo_keyword">Tags</Label>
              <Chip
                currentList={tagsProduct}
                templateList={templateListTags}
                onAddChip={handleAddTag}
                onRemoveChip={handleRemoveTag}
              />
            </WrapperInput>
          </Column>
        </Row>
      </FieldSetSection>

      <FieldSetSection>
        <FlexBox justifyContent="space-between" style={{ marginTop: '1rem' }}>
          <FlexItem>
            <HeadingSection>Display Interface</HeadingSection>
          </FlexItem>
          <FlexItem>
            <DotsIcon style={{ height: '1rem' }} />
          </FlexItem>
        </FlexBox>
        <Row>
          <Column>
            <WrapperInput>
              <Label htmlFor="description">Slug</Label>
              <Input id="slug" {...register('slug')} readOnly />
              <div class="mt-2">
                <Checkbox
                  id="toggleSlug"
                  name="toggleSlug"
                  onChange={handleToggleSlug}
                  label="Auto generated slug"
                />
              </div>
            </WrapperInput>
          </Column>
        </Row>
      </FieldSetSection>
      <FieldSetSection>
        <FlexBox justifyContent="space-between" style={{ marginTop: '1rem' }}>
          <FlexItem>
            <HeadingSection>SEO</HeadingSection>
          </FlexItem>
          <FlexItem>
            <DotsIcon style={{ height: '1rem' }} />
          </FlexItem>
        </FlexBox>
        <Row>
          <Column>
            <WrapperInput>
              <Label htmlFor="name">SEO Title</Label>
              <Input
                id="title"
                autoComplete="nope"
                {...register('title', METADATA_VALIDATOR.TITLE)}
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.title && (
                <ErrorInput role="alert">{errors.title.message}</ErrorInput>
              )}
            </WrapperInput>
          </Column>
        </Row>
        <Row>
          <Column>
            <WrapperInput>
              <Label htmlFor="seo_description">SEO Description</Label>
              <Input
                as="textarea"
                id="seo_description"
                autoComplete="nope"
                {...register('seo_description', METADATA_VALIDATOR.DESCRIPTION)}
                aria-invalid={errors.seo_description ? 'true' : 'false'}
              />
              {errors.seo_description && (
                <ErrorInput role="alert">
                  {errors.seo_description.message}
                </ErrorInput>
              )}
            </WrapperInput>
          </Column>
        </Row>

        <Row>
          <Column>
            <WrapperInput>
              <Label htmlFor="name">Preview</Label>
              <Input
                id="title"
                autoComplete="nope"
                {...register('title', METADATA_VALIDATOR.TITLE)}
                aria-invalid={errors.name ? 'true' : 'false'}
              />
              {errors.title && (
                <ErrorInput role="alert">{errors.title.message}</ErrorInput>
              )}
            </WrapperInput>
          </Column>
        </Row>
        <Row>
          <Column>
            <WrapperInput>
              <Label htmlFor="seo_keyword">SEO Keywords</Label>
              <Chip
                currentList={keywords}
                onAddChip={newKw => {
                  setKeyWords([...keywords, newKw]);
                }}
                onRemoveChip={kw => {
                  setKeyWords(keywords.filter(e => e.label !== kw.label));
                }}
              />
            </WrapperInput>
          </Column>
        </Row>
      </FieldSetSection>
      <FieldSetSection>
        <FlexBox justifyContent="space-between" style={{ marginTop: '1rem' }}>
          <FlexItem>
            <HeadingSection>{`Status & Publishing`}</HeadingSection>
          </FlexItem>
          <FlexItem>
            <DotsIcon style={{ height: '1rem' }} />
          </FlexItem>
        </FlexBox>
        <Row
          breakpoints={[DEVICE_FIXED_SIZE.mobileM, DEVICE_FIXED_SIZE.tablet]}
        >
          <Column cols={[6, 4]}>
            <WrapperInput>
              <Select
                {...register('status', PRODUCT_VALIDATOR.STATUS)}
                aria-invalid={errors.status ? 'true' : 'false'}
              >
                {optionsProduct
                  .filter(opt => opt.key !== 'all')
                  .map((opt, index) => (
                    <SelectOption
                      key={`product-option-${opt.key}`}
                      value={t(opt.key) || opt.value}
                    >
                      {t(opt.key) || opt.value}
                    </SelectOption>
                  ))}
              </Select>
              {errors.status && (
                <ErrorInput role="alert">{errors.status.message}</ErrorInput>
              )}
              <CustomArrow>
                <ArrowDownIcon />
              </CustomArrow>
            </WrapperInput>
          </Column>
        </Row>
      </FieldSetSection>
    </WrapperProductForm>
  );
}

export default AddProductForm;
