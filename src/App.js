import * as React from 'react';
import {UserContext} from './context/userContext'
import Profile from './components/profile'
import Members from './components/members'
import Add from './components/add'
import Side from './components/side'

import './App.css';

function App() {
  const value = React.useContext(UserContext)
  const [user, setUser] = React.useState(value)
  const providerValue = React.useMemo(() => ({user, setUser}), [user, setUser])

  return (
    <UserContext.Provider value={providerValue}>
      <div className="Layout">
      <div className="side">
      <Side/>
      </div>
      <div className="main"> 
        <Profile />
        <Members />
        <Add />
      </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
