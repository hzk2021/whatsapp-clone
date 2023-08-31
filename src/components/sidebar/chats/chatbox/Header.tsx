import React from 'react'

interface headerProps {
    displayName: string,
    photoURL: string,
}

function Header(props: headerProps) {
    return (
        <div className='flex items-center gap-2 p-2 px-4 border-b border-solid border-gray-500'>
            <img src={props.photoURL}
                className="w-[50px] h-[50px] rounded-3xl bg-[#FFE5E5] p-[1px]" />

            <h1>{props.displayName}</h1>
        </div>
    )
}

export default Header