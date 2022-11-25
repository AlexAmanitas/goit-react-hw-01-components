import styled from 'styled-components';

export const ProfileCard = styled.div`
  margin: 50px auto 0 auto;
  width: 400px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 1px 4px 6px rgba(0, 0, 0, 0.16);
`;

export const Description = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 75px;
`;

export const Avatar = styled.img`
  width: 150px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 25px;
  margin-top: 20px;
`;

export const Tag = styled.p`
  color: #777;
  margin-top: 15px;
`;

export const Location = styled.p`
  color: #777;
  margin-top: 15px;
`;

export const Stats = styled.ul`
  background-color: #eee;
  height: 100px;
  width: 100%;
  display: flex;
  border-top: 1px solid #aaa;
  border-radius: 0 0 5px 5px;
`;

export const StatsItem = styled.li`
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:nth-child(2) {
    border-left: 1px solid #aaa;
    border-right: 1px solid #aaa;
  }
`;

export const Label = styled.span`
  color: #777;
  font-size: 17px;
`;

export const Quantity = styled.span`
  font-size: 20px;
  padding-top: 7px;
  font-weight: 700;
`;
