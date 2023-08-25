import React, { HTMLAttributes } from 'react'

interface nameProps extends HTMLAttributes<HTMLSpanElement> {
    text: string,
    classes?: string,
    imgSrc?: string
}

function StyledName(props: nameProps) {
    return (
        <div className='flex justify-center items-center gap-x-2'>
            {props.imgSrc && <img src={props.imgSrc} className="w-[2rem]" />}
            <span className={`${props.classes} text-xl font-bold`} {...props}>{props.text}</span>
        </div>
    )
}

export default StyledName