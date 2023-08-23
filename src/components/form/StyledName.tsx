import React, { HTMLAttributes } from 'react'

interface nameProps extends HTMLAttributes<HTMLSpanElement> {
    text: string,
    classes?: string
}

function StyledName(props: nameProps) {
    return (
        <span className={`${props.classes} text-xl font-bold`} {...props}>{props.text}</span>
    )
}

export default StyledName