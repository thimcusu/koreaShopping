import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import mixins from '../../../assets/style/mixins';
import { device } from '../../../constants/deviceSizes';
export const Table = styled.table`
  border-collapse: collapse;
  min-width: 100%;
  font-size: 15px;
  margin-left: -1rem;
  margin-right: -1rem;
`;

export const TableBody = styled.tbody`
  color: ${props => props.theme.admin.lightText};
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  color: ${props => props.theme.admin.lightText};
`;

export const TableTop = styled.div`
  border-top: 1px solid #f0f3f4;
  padding: 1rem 0;
  margin-left: -1rem;
  color: ${props => props.theme.admin.grayText};
  ${mixins.flex('row', 'space-between', 'center')}
`;

export const TableUtilsHead = styled.div`
  ${mixins.flex('row', 'flex-start', 'center')}
  margin-left: auto;
  min-width: 5rem;
  svg {
    margin: 0.5rem;
    width: 2rem;
    fill: ${props => props.theme.admin.primary};
    margin-right: 1rem;
  }
`;

export const BoldMainText = styled.span`
  font-weight: 600;
  color: ${props => props.theme.dark};
`;

export const TableRow = styled.tr`
  border-top: 1px solid #f0f3f4;
  padding: 0 1rem;
  position: relative;
  transform: translateZ(0);
  transition: box-shadow 0.3s ease-in-out, scale 0.1s ease-in;
  cursor: default;
  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: -1;
    transform: scaleX(0);
    transform-origin: 0% 50%;
    background: ${props => props.theme.background};
  }
  &:hover {
    /* background-color: ${props => props.theme.admin.secondary}; */
    transition: box-shadow 0.2s ease-in-out, scale 0.1s ease-in;
    background-color: #fff;
    @media ${device.laptop} {
      /* transform: scale(1.03); */
      transform-origin: left;
    }
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
      rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    margin-left: 1rem;
    margin-right: 1rem;
    &:before {
      transform: scaleX(1);
      transition: transform 0.5s cubic-bezier(0.52, 1.64, 0.37, 0.66);
    }
  }
`;

export const TableHeading = styled.th.attrs({
  role: 'button',
})`
  padding: 2rem 0;
  font-weight: 500;
  cursor: pointer;
  vertical-align: middle;
  ${props =>
    props.fitContent &&
    css`
      width: 1%;
      white-space: nowrap;
    `}
  &:last-child {
    padding-right: 1rem;
  }
  & > svg {
    margin-left: 0.5rem;
    height: 1.2rem;
    align-items: center;
    margin-top: -2px;
    /* display: none; */
    opacity: 0;
    visibility: hidden;
  }
  &.active {
    color: ${props => props.theme.admin.primary};
    svg {
      opacity: 1;
      visibility: visible;
      display: inline-block;
      fill: ${props => props.theme.admin.primary};
    }
  }
`;

export const TableDesc = styled.td`
  padding: 2rem 0;
  ${props =>
    props.fitContent &&
    css`
      width: 1%;
      white-space: nowrap;
    `}
  &:last-child {
    padding-right: 1rem;
  }
`;
export const TableItem = styled.div``;

export const TableCheckBox = styled.td`
  display: flex;
  padding-left: 1rem;
  & > div {
    height: 2rem;
    align-items: center;
  }
  input {
    left: 0;
  }
  svg {
    height: 1.5rem;
    fill: ${props => props.theme.admin.lightText};
    background-color: #fff;
  }
`;

export const StatusTag = styled.div`
  ${mixins.flex('row', 'center', 'center')}
  background-color: ${({ typeStatus, theme }) =>
    typeStatus === 'published'
      ? rgba(theme.admin.primary, 0.25)
      : typeStatus === 'archived'
      ? '#F8F9FB'
      : typeStatus === 'draft'
      ? '#eef1f3'
      : '#e1e9ff'};
  color: ${({ typeStatus, theme }) =>
    typeStatus === 'published'
      ? theme.admin.primary
      : typeStatus === 'archived'
      ? theme.admin.secondary
      : typeStatus === 'draft'
      ? theme.admin.lightText
      : theme.blue500};
  font-weight: 600;
  align-self: center;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  min-width: 3rem;
  text-transform: uppercase;
`;
