import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import { UsersForm } from './components/UsersForm'
import { UsersList } from './components/UsersList'
import { Warning } from './components/Warning'

function App() {

  const [ userList, setUserList ] = useState([])
  const [ form, setForm ] = useState(false)
  const [ userSelected, setUserSelected ] = useState(null)
  const [ warning, setWarning ] = useState(false)
  const [ userDelete, setUserDelete ] = useState(null)

  const getUsers = () =>{
    axios.get('https://users-crud-f2ku.onrender.com/users')
    .then(res => setUserList(res.data))
  }
  
  const selectUsers = (product) => {
    setForm(true)
    setUserSelected(product)
  }

  const getWarning = (product) => {
    setWarning(true)
    setUserDelete(product)
  }

  const cancelDelete = () => {
    setWarning(false)
    setUserDelete(null)
  }

  const deleteUser = (userDelete) => {
    axios.delete(`https://users-crud-f2ku.onrender.com/users/${userDelete?.id}/`)
        .then(() => { 
            getUsers()
          setWarning(false)
          setUserDelete(null)
        })

  } 

  useEffect(() => {
    getUsers()
    console.log(userList)
  }, [])

  return (
    <div className="App">
      {
        form &&
        <UsersForm
        setForm={setForm}
        getUsers={getUsers}
        userSelected={userSelected}
        setUserSelected={setUserSelected}
        />
      }
      <UsersList
      userList = {userList}
      setForm={setForm}
      selectUsers={selectUsers}
      getUsers={getUsers}
      getWarning={getWarning}
      />
      { warning &&
      <Warning
      userDelete={userDelete} 
      cancelDelete={cancelDelete}
      deleteUser={deleteUser}
      />
      }
    </div>
  )
}

export default App
