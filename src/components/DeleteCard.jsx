import React from 'react'
import '../styles/deleteCard.css'

const DeleteCard = ({isDelete, setIsDelete, infoDelete}) => {

  const handleExit = () => {
    setIsDelete(true)
  }

  return (
    <div className={`delete_container ${isDelete && 'delete_disable'}`}>
      <article className='delete_article'>
        <h2 className='delete_title'>Delete User</h2>
        <div onClick={handleExit} className='x-icon'><i className="fa-sharp fa-regular fa-circle-xmark"></i></div>
        <p className='p_delete'>The user <span className='span_delete'>{infoDelete?.first_name} {infoDelete?.last_name}</span> has been delete</p>
        <button className='delete_btn' onClick={handleExit}>Accept</button>
      </article>
    </div>
  )
}

export default DeleteCard
