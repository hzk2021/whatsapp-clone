import React, { HTMLAttributes } from 'react'

interface nameProps extends HTMLAttributes<HTMLSpanElement> {
    text: string,
    classes?: string,
    imgsrc?: string
}

function StyledName(props: nameProps) {
    return (
        <div className='flex justify-center items-center flex-col gap-2 md:flex-row md:gap-x-2'>
            {props.imgsrc && <img src={props.imgsrc} className="w-[2rem]" />}
            <span className={`${props.classes} text-xl font-bold`} {...props}>{props.text}</span>
        </div>
    )
}

export default StyledName