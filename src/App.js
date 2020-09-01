import React from 'react';
import './App.css';
import user from './data/user.json';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import statisticalData from './data/statistical-data.json';
import FriendList from './components/FriendList';
import friendsData from './data/friends.json';
import TransactionHistory from './components/TransactionHistory';
import transactionData from './data/transactions.json';

function App() {
  return (
    <div className="App">
      <div className="wrap">
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats} />
        <Statistics
          title="Upload stats"
          stats={statisticalData} />
      </div>
      <div className="wrap">
        <FriendList friends={friendsData} />
      </div>
      <div className="wrap wrap-out">
        <TransactionHistory items={transactionData} />
      </div>

    </div>
  );
}

export default App;
