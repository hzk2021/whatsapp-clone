import React from 'react'

interface chatTabProps {
    photoURL: string,
    displayName: string,
    lastMessage?: string,
    onClick?: () => void
}

function ActiveChatTab(props: chatTabProps) {
    return (
        <div className='px-3 h-12 flex items-center gap-3 text-ellipsis cursor-pointer border-b border-solid hover:bg-[#FFE5E5]'
            onClick={props.onClick}>
            <img src={props.photoURL}
                className='h-[35px] rounded-3xl w-[35px] border-none' />

            <div className='flex flex-col grow truncate'>
                <p>{props.displayName}</p>
                <p className='truncate'>hello this is fuudfuudfuudfuudfuudfuudfuudfuudfuudfuud</p>
            </div>

        </div>
    )
}

export default ActiveChatTab