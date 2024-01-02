import React from 'react'
import './loginBox.css'
import InputField from './InputField'
import Button from './Button'

function LoginBox() {
  return (
    <div className='box'>
      
      <InputField label={'Full Name'} type={'text'}/>
      <InputField label={'Email'} type={'email'}/>
      <InputField label={'Age'} type={'number'}/>
      <InputField/>
      <InputField/>



      <Button/>
    </div>
  )
} 

export default LoginBox    