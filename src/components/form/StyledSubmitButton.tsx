import { ButtonHTMLAttributes } from "react"

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
}

function StyledSubmitButton(props: buttonProps) {
  return (
    <button className="rounded-none p-3 bg-[#FFE5E5]" type="submit" {...props}>{props.text}</button>
  )
}

export default StyledSubmitButton