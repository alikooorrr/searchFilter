import { useState } from 'react';
import './App.css';
import InputSearch from './InputSearch';
import Table from './Table';
import Users from './Users'

function App() {
  let [user, setUser] = useState('')
  let searchFunc = (data) => {
    return data.filter(item => item.first_name.toLowerCase().includes(user.toLowerCase()))
  }
  return (
    <>
      <InputSearch user={user} setUser={setUser}/>
      <Table users={searchFunc(Users)}/>
    </>
  );
}

export default App;
