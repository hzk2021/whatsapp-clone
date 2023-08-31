import React from 'react'

interface chatTabProps {
    photoURL: string,
    displayName: string,
    latestMessage: string,
    onClick?: () => void
}

function ActiveChatTab(props: chatTabProps) {
    return (
        <div className='px-3 h-12 flex items-center gap-3 text-ellipsis cursor-pointer hover:bg-[#FFE5E5] py-8
            border-solid border-gray-300 border-b'
            onClick={props.onClick}>
            <img src={props.photoURL}
                className='h-[45px] rounded-3xl w-[45px] border-none' />

            <div className='flex flex-col grow truncate border-b'>
                <p>{props.displayName}</p>
                <p className='truncate text-gray-500'>{props.latestMessage}</p>
            </div>

        </div>
    )
}

export default ActiveChatTab