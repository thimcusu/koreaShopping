import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Table,
  TableBody,
  TableTop,
  TableHead,
  TableUtilsHead,
  TableRow,
  TableDesc,
  TableHeading,
  TableCheckBox,
  BoldMainText,
  StatusTag,
} from '../common/Table';
import { convertIOS } from '../../../utils/day';
import { pathCatToString } from '../../../utils/category';
import { ReactComponent as SettingIcon } from '../../../assets/images/svg-icon/fi-rr-settings.svg';
import { ReactComponent as CarretDownIcon } from '../../../assets/images/svg-icon/fi-rr-caret-down.svg';
import { ReactComponent as CarretUpIcon } from '../../../assets/images/svg-icon/fi-rr-caret-up.svg';
import { ReactComponent as SheildIcon } from '../../../assets/images/svg-icon/fi-rr-shield-exclamation.svg';
import Checkbox from '../common/Checkbox';
import { FlexBox, FlexItem } from '../../common/FlexBox';
import { Row, Column } from '../../common/Grid';
import { sortByAlphabet, sortByLevel } from '../../../utils/sort';
import DropDownSelection from '../common/DropDownSelection';
import { statusCategory } from '../../../constants/apiConstants';
import Button from '../common/Button';
import { deleteCategoryById } from '../../../redux/actions/categoryAction';
import {
  GlobalModalOverlay,
  GlobalModalWrapper,
  GlobalModalContent,
  ModalHeading,
  ModalContentText,
} from '../common/GlobalModal';
import useOnClickOutside from '../../common/useOnClickOutside';
import { useDispatch } from 'react-redux';

function CategoryTable({ categories, onOpenCategoryForm = () => {} }) {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [list, setList] = useState(categories);
  const [orderDesc, setOrderDesc] = useState(undefined);
  const [isModalDeleteOpen, setIsModalDeleteOpen] = useState(false);
  const refModal = useRef(null);
  const selectedList = list.filter(e => e.selected);
  useEffect(() => {
    setList(categories.map(e => ({ ...e, selected: false })));
  }, [categories]);

  const handleOrderByName = event => {
    if (activeAnotherHeadingOrder(event.currentTarget)) {
      setList(sortByAlphabet(list, true, 'name'));
      setOrderDesc(true);
    } else {
      setList(sortByAlphabet(list, !orderDesc, 'name'));
      setOrderDesc(!orderDesc);
    }
  };
  const handleOrderByCategories = event => {
    if (activeAnotherHeadingOrder(event.currentTarget)) {
      setList(sortByAlphabet(list, true));
      setOrderDesc(true);
    } else {
      setList(sortByLevel(list, !orderDesc));
      setOrderDesc(!orderDesc);
    }
  };
  const handleOrderCreateAt = event => {
    if (activeAnotherHeadingOrder(event.currentTarget)) {
      setList(sortByAlphabet(list, true, 'created_at'));
      setOrderDesc(true);
    } else {
      setList(sortByAlphabet(list, !orderDesc, 'created_at'));
      setOrderDesc(!orderDesc);
    }
  };
  const handleOrderUpdateAt = event => {
    if (activeAnotherHeadingOrder(event.currentTarget)) {
      setList(sortByAlphabet(list, true, 'updated_at'));
      setOrderDesc(true);
    } else {
      setList(sortByAlphabet(list, !orderDesc, 'updated_at'));
      setOrderDesc(!orderDesc);
    }
  };
  const handleOrderByStatus = event => {
    if (activeAnotherHeadingOrder(event.currentTarget)) {
      setList(sortByAlphabet(list, true, 'status'));
      setOrderDesc(true);
    } else {
      setList(sortByAlphabet(list, !orderDesc, 'status'));
      setOrderDesc(!orderDesc);
    }
  };

  const activeAnotherHeadingOrder = node => {
    if (node.classList.contains('active')) {
      return false;
    }
    let siblingNode = node.parentNode.firstChild;
    while (siblingNode) {
      siblingNode.classList.remove('active');
      siblingNode = siblingNode.nextSibling;
    }
    node.classList.add('active');
    return true;
  };

  const handleSelectAll = event => {
    const checkboxEls = document.querySelectorAll('input[name="category"]');
    checkboxEls.forEach(e => {
      e.checked = event.target.checked;
    });
    setList(categories.map(e => ({ ...e, selected: event.target.checked })));
  };

  const handleSelectCategory = event => {
    event.stopPropagation();
    const { id, checked } = event.target;
    setList(list.map(e => (e._id === id ? { ...e, selected: checked } : e)));
    document.querySelector('input[name="categoryAll"]').checked = false;
  };

  const handleToggleDeleteModal = () => {
    setIsModalDeleteOpen(!isModalDeleteOpen);
  };

  const handleDeleteCategory = event => {
    console.log(selectedList);
    Promise.all(
      selectedList.map(async category => {
        const categoryId = await dispatch(deleteCategoryById(category._id));
        console.log(categoryId);
      })
    );
    setIsModalDeleteOpen(!isModalDeleteOpen);
  };

  useOnClickOutside(refModal, handleToggleDeleteModal);

  return (
    <>
      {list && (
        <>
          <TableTop>
            {selectedList.length > 0 && (
              <FlexBox alignItem="center" gap={12}>
                <FlexItem alignSelf="center">{`Selected ${selectedList.length} categories`}</FlexItem>
                <FlexItem>
                  <DropDownSelection
                    selection={statusCategory}
                    label="Update Status"
                  />
                </FlexItem>
                <Button type="danger" onClick={handleToggleDeleteModal}>
                  Delete All
                </Button>
              </FlexBox>
            )}
            <TableUtilsHead>
              <SettingIcon />
              {/* <Button>Sort by</Button> */}
            </TableUtilsHead>
          </TableTop>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeading>
                  <TableCheckBox>
                    <Checkbox name="categoryAll" onChange={handleSelectAll} />
                  </TableCheckBox>
                </TableHeading>
                <TableHeading onClick={handleOrderByName}>
                  Name
                  {orderDesc ? <CarretUpIcon /> : <CarretDownIcon />}
                </TableHeading>
                <TableHeading onClick={handleOrderByCategories}>
                  Categories
                  {orderDesc ? <CarretUpIcon /> : <CarretDownIcon />}
                </TableHeading>
                <TableHeading onClick={handleOrderCreateAt}>
                  Create
                  {orderDesc ? <CarretUpIcon /> : <CarretDownIcon />}
                </TableHeading>
                <TableHeading onClick={handleOrderUpdateAt}>
                  Update
                  {orderDesc ? <CarretUpIcon /> : <CarretDownIcon />}
                </TableHeading>
                <TableHeading onClick={handleOrderByStatus}>
                  Status
                  {orderDesc ? <CarretUpIcon /> : <CarretDownIcon />}
                </TableHeading>
              </TableRow>
            </TableHead>
            <TableBody>
              {list.map((e, i) => (
                <TableRow
                  key={e._id}
                  role="button"
                  onClick={event => {
                    event.stopPropagation();
                    event.nativeEvent.stopImmediatePropagation();
                    if (event.target.matches('input')) return;
                    onOpenCategoryForm(e);
                  }}
                >
                  <TableDesc>
                    <TableCheckBox>
                      <Checkbox
                        id={e._id}
                        name="category"
                        checked={e.selected}
                        onChange={handleSelectCategory}
                      />
                    </TableCheckBox>
                  </TableDesc>
                  <TableDesc>
                    <FlexBox flexDirection="column">
                      <BoldMainText>{e.name}</BoldMainText>
                      <FlexItem>{`${e.productsCount} products`}</FlexItem>
                    </FlexBox>
                  </TableDesc>
                  <TableDesc>
                    {e.path.length > 0 && (
                      <BoldMainText>Hierachy: </BoldMainText>
                    )}
                    {e.path.map(p => (
                      <span>{pathCatToString(p)}</span>
                    ))}
                  </TableDesc>
                  <TableDesc>{convertIOS(e.created_at)}</TableDesc>
                  <TableDesc>{convertIOS(e.updated_at)}</TableDesc>
                  <TableDesc fitContent>
                    <StatusTag typeStatus={e.status.toLowerCase()}>
                      {e.status}
                    </StatusTag>
                  </TableDesc>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </>
      )}
      {isModalDeleteOpen && (
        <GlobalModalOverlay>
          <GlobalModalWrapper ref={refModal}>
            <GlobalModalContent>
              <SheildIcon />
              <ModalHeading>Are you sure?</ModalHeading>
              <ModalContentText>
                You are going to delete some categories. <br />
                Make sure the category have no product before delete
              </ModalContentText>
              <Row>
                <Column>
                  <Button stretch onClick={handleToggleDeleteModal}>
                    Cancel
                  </Button>
                </Column>
                <Column>
                  <Button primary active stretch onClick={handleDeleteCategory}>
                    Delete
                  </Button>
                </Column>
              </Row>
            </GlobalModalContent>
          </GlobalModalWrapper>
        </GlobalModalOverlay>
      )}
    </>
  );
}

export default CategoryTable;
