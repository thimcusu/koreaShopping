import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

// import mixins from '../../../assets/style/mixins';
// import { device } from '../../../constants/deviceSizes';
// import {} from '../../../constants/css';

const TableContainer = styled.div``;

const StyledTable = styled.table`
  border-collapse: collapse;
  min-width: 100%;
  font-size: 15px;
  thead tr {
    background-color: ${(props) => props.theme.admin.primary};
    text-align: left;
  }
  th {
    padding: 0.5rem 0;
  }
  td {
    padding: 1rem 0;
  }
  tbody tr:not(:last-child) {
    border-bottom: 1px solid #f0f3f4;
  }
`;

const Table = ({ children }) => {
  return (
    <TableContainer>
      <StyledTable>{children}</StyledTable>
    </TableContainer>
  );
};

export default Table;
