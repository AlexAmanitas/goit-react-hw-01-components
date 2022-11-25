import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 400px;
  margin: 0 auto;
`;

export const Head = styled.tr`
  height: 30px;
  background-color: #7481fa;
  color: #eee;
`;

export const Line = styled.tr`
  height: 30px;
  background-color: #ddd;

  &:nth-child(2n) {
    background-color: #eee;
  }
`;

export const Type = styled.td`
  text-align: center;
  text-transform: capitalize;
`;

export const Td = styled.td`
  text-align: center;
`;
