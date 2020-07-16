import React, { Fragment } from 'react';
import Profile from './Profile/User';
import user from './Profile/user.json';
import Statistics from './Statistics/Statistics';
import statisticData from './Statistics/statistics.json';
import FriendList from './Friends/Friends';
import friends from './Friends/friends.json';
import TransactionHistory from './Transaction/Transaction';
import transactions from './Transaction/Transaction.json'


const App = () => (
  <Fragment>
    <Profile
      name = {user.name}
      tag = {user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statisticData} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions}/>

  </Fragment>
)

export default App;
