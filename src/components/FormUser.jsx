import React from 'react'
import {useForm} from "react-hook-form"
import {useEffect} from 'react'
import '../styles/formUser.css'

const FormUser = ({createUser, editUser, updateUser, setEditUser, isDisable, setIsDisable}) => {

  const {handleSubmit, register, reset} = useForm()

    useEffect(() => {
    reset(editUser)
  }, [editUser])


  const submit = (data) => {
    if (editUser) {
      updateUser('/users', editUser.id, data)
      setEditUser()
    } else {
    createUser('/users', data)
    }
    setIsDisable(true)
    reset({
      birthday: '',
      email: '',
      first_name: '',
      last_name: '',
      password: ''
    })
  }

  const handleExit = () => {
    setIsDisable(true)
    reset({
      birthday: '',
      email: '',
      first_name: '',
      last_name: '',
      password: ''
    })
    setEditUser()
  }

  return (
    <div className={`form_container ${isDisable && 'form_disable'}`}>
      <form onSubmit={handleSubmit(submit)} className='form_user'>
        <div className='form_exit' onClick={handleExit}><i className="fa-solid fa-xmark"></i></div>
        <h2 className='form_title'>{editUser ? 'Update User' : 'Create User'}</h2>
        <label htmlFor='first_name' className='form_label'>
          <span className='form_span'>First Name</span>
          <input {...register("first_name")} autoComplete='given-name' id = 'first_name' type='text' placeholder = 'First Name' className='form_input'></input>
        </label>
        <label htmlFor='last_name' className='form_label'>
          <span className='form_span'>Last Name</span>
          <input {...register("last_name")} autoComplete='family-name' id = 'last_name' type='text' placeholder='Last Name' className='form_input'></input>
        </label>
        <label htmlFor='email' className='form_label'>
          <span className='form_span'>Email</span>
          <input {...register("email")} autoComplete='email' id = 'email' type='text' placeholder='john@email.com' className='form_input'></input>
        </label>
        <label htmlFor='password' className='form_label'>
          <span className='form_span'>Password</span>
          <input {...register("password")} autoComplete='new-password' id = 'password' type='password' placeholder='Password' className='form_input'></input>
        </label>
        <label htmlFor='birthday' className='form_label'>
          <span className='form_span'>Birthday</span>
          <input {...register("birthday")} autoComplete='bday' id = 'birthday' type='date' className='form_input'></input>
        </label>
        <button className='form_btn'>{editUser ? 'Update' : 'Create'}</button>
      </form>
    </div>
  )
}

export default FormUser
