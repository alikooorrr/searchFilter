import { useEffect, useState } from 'react';
import './App.css';
import InputSearch from './InputSearch';
import Table from './Table';
import axios from 'axios'

function App() {
  let [user, setUser] = useState('')
  const [data, setData] = useState([])
  useEffect(()=>{
    const fetchUsers = async() => {
      const res = await axios.get(`http://localhost:5000?q=${user}`)
      console.log(res)
      setData(res.data)
    }
    fetchUsers()
  },[user])
  return (
    <>
      <InputSearch user={user} setUser={setUser}/>
      <Table users={data}/>
    </>
  );
}

export default App;