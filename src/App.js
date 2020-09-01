import React from 'react';
import './App.css';
import user from './data/user.json';
import Profile from './components/Profile';
import Statistics from './components/Statistics';
import statisticalData from './data/statistical-data.json';

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
