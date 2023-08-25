import React, { InputHTMLAttributes } from 'react'

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  innerref: React.LegacyRef<HTMLInputElement>
}


function StyledInput(props: inputProps) {
  return (
    <input className='p-2 border-b-2 bg-transparent outline-none focus:border-[#FFE5E5]' ref={props.innerref} {...props} />
  )
}

export default StyledInput