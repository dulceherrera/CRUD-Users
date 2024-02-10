import { useEffect, useState } from 'react'
import './App.css'
import FormUser from './components/FormUser'
import useCrud from './hooks/useCrud'
import UserCard from './components/UserCard'
import DeleteCard from './components/DeleteCard'

const urlBase = 'https://users-crud.academlo.tech/'

function App() {

  const [editUser, setEditUser] = useState()
  const [isDisable, setIsDisable] = useState(true)
  const [isDelete, setIsDelete] = useState(true)
  const [infoDelete, setinfoDelete] = useState()
  const [users, getUsers, createUser, deleteUser, updateUser] = useCrud(urlBase)

  useEffect(() => {
    getUsers('/users')
  }, [])

  const handleAddUser = () => {
    setIsDisable(false)
  }

  return (
    <div className='container_principal'>
      <header className='header'>
        <h1>Users</h1>
        <button onClick={handleAddUser} className='btn_adduser'>+ Add User</button>
      </header>
      <DeleteCard
        isDelete = {isDelete}
        setIsDelete = {setIsDelete}
        infoDelete = {infoDelete}
      />
        <FormUser
          createUser = {createUser}
          editUser = {editUser}
          updateUser = {updateUser}
          setEditUser = {setEditUser}
          isDisable = {isDisable}
          setIsDisable = {setIsDisable}
        />
      <div className='user_card_container'>
        {
          users?.map(user => (
            <UserCard
              key = {user.id}
              user = {user}
              deleteUser = {deleteUser}
              setEditUser = {setEditUser}
              setIsDisable = {setIsDisable}
              setIsDelete = {setIsDelete}
              setinfoDelete = {setinfoDelete}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
