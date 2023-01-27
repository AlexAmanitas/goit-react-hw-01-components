import styled from 'styled-components';

export const FriendsListElement = styled.li`
  height: 70px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  background-color: #eee;
  margin-top: 10px;
`;

export const Status = styled.span`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  margin-left: 20px;
  background-color: ${p => {
    return p.isOnline ? 'green' : 'red';
  }};
`;

export const Avatar = styled.img`
  margin-left: 30px;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-left: 46px;
`;
