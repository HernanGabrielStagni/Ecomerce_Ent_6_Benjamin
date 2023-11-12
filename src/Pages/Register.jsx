import React from 'react'
import { useForm } from 'react-hook-form'
import useAuthentication from '../HOOKS/useAuthentication'

const Register = () => {


const {register, handleSubmit, reset} = useForm()

const {createNewUser}=useAuthentication()
 
const submit = (data) =>{
  // console.log(data)
  createNewUser(data)

} 

  return (
    <form onSubmit={handleSubmit(submit)}>
    <h1>Create a new</h1>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input {...register('firstName')} type="text"  id='firstName' />
      </div>
    
      <div>
        <label htmlFor="lastName">Last  Name</label>
        <input {...register('lastName')} type="text"  id='lastName' />
      </div>

      <div>
        <label htmlFor="email">Email</label>
        <input {...register('email')} type="email"  id='email' />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input {...register('password')} type="password"  id='password' />
      </div>

      <div>
        <label htmlFor="phone">Phone</label>
        <input {...register('phone')} type="tel"  id='phone' />
      </div>
    
|     <button>Register</button>    
    </form>
    )
}

export default Register