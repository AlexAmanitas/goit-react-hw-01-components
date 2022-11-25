import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';
import { FriendsTable, FriendsListElement } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsTable>
      {friends.map(friend => (
        <FriendsListElement key={friend.id}>
          <FriendListItem friend={friend} />
        </FriendsListElement>
      ))}
    </FriendsTable>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};
