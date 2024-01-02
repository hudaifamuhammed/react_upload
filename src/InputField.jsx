import React from 'react'

function InputField({label,type}) {
    // const {label,type}=props
    // console.log(props);
  return (
    <div>
        <label htmlFor="">{label}</label>
        <input type={type} />
    </div>
  )
}

export default InputField 