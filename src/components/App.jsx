import { Profile } from './Profile';
import user from '../data/user.json';

import { Statistics } from './Statistics';
import data from '../data/data.json';

import { FriendList } from './FriendList';
import friends from '../data/friends.json';

import { TransactionHistory } from './TransactionHistory';
import transactions from '../data/transactions.json';

import React from 'react';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Statistics" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
