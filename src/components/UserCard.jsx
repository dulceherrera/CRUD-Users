import React from 'react'
import '../styles/userCard.css'


const UserCard = ({user, deleteUser, setEditUser, setIsDisable, setIsDelete, setinfoDelete}) => {

  const handleEdit  = () =>{
    setEditUser(user)
    setIsDisable(false)
  }

  const handleDelete = () => {
    deleteUser('/users', user.id)
    setIsDelete(false)
    setinfoDelete(user)
  }

  return (
    <article className='user_card'>
      <h2 className='user_name'>{`${user.first_name} ${user.last_name}`}</h2>
      <hr />
      <ul className='user_list'>
        <li className='user_item'>
          <span className='user_label'>Email </span>
          <span className='user_value'>{user.email}</span>
        </li>
        <li className='user_item'>
          <span className='user_label'>Birthday </span>
          <span className='user_value'><i className="fa-solid fa-gift"></i> {user.birthday}</span>
        </li>
      </ul>
      <hr />
      <div className='user_button'>
        <button onClick={handleDelete} className='user_btn btn_delete'><i className="fa-solid fa-trash"></i></button>
        <button onClick={handleEdit} className='user_btn btn_edit'><i className="fa-solid fa-pencil"></i></button>
      </div>
    </article>
  )
}

export default UserCard
