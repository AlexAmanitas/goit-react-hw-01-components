import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 400px;
  margin: 20px auto;
  background-color: #fdfdfd;
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
`;

export const Title = styled.h2`
  text-transform: uppercase;
  text-align: center;
  padding: 20px 0;
`;

export const List = styled.ul`
  display: flex;
  justify-content: space-around;
  background-color: #eee;
  border-radius: 0 0 5px 5px;
`;

export const Element = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #ddd;
  border-right: 1px solid #ddd;
  justify-content: center;
  padding: 10px 0 10px 0;
`;

export const Label = styled.span`
  margin-bottom: 10px;
`;

export const Value = styled.span`
  font-size: 20px;
`;
