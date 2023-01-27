import './App.css';

import { Profile } from './Profile/Profile';
import user from '../path/user.json';
import { Statistics } from './Statistics/Statistics';
import data from '../path/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from '../path/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from '../path/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
