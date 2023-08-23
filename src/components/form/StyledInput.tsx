import React, { InputHTMLAttributes } from 'react'

function StyledInput(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input className='p-2 border-b-2 bg-transparent outline-none focus:border-[#FFE5E5]' {...props} />
  )
}

export default StyledInput