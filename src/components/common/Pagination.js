import React from 'react';
import styled from 'styled-components';

import { device } from '../../constants/deviceSizes';
import mixins from '../../assets/style/mixins';

const WrapperPagination = styled.div`
  ${mixins.flex('row', 'space-between', 'center')};
`;

const ContainerPagination = styled.ul`
  ${mixins.flex('row', 'space-between', 'center')};
  margin: 0 auto;
  li {
    margin-right: 3px;
  }
`;

const Pagination = () => {
  return (
    <WrapperPagination>
      <ContainerPagination>
        <li tabIndex="-1">
          <a>Previous</a>
        </li>
        <li>
          <a>1</a>
        </li>
        <li>
          <a>2</a>
        </li>
        <li>
          <a>3</a>
        </li>
      </ContainerPagination>
    </WrapperPagination>
  );
};

export default Pagination;
