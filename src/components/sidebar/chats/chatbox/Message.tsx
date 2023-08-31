import { Timestamp } from 'firebase/firestore'
import React from 'react'

interface messageProps {
    owner: boolean,
    date: Timestamp,
    id: string,
    senderId: string,
    text: string,
    photoURL: string | null
}

function Message(props: messageProps) {
    return (
        <div className={`message flex ${props.owner && 'flex-row-reverse'} gap-5 items-center`}>
            <div className="">
                <img src={props.photoURL!} alt=""
                    className="rounded-3xl p-[1px] bg-[#FFE5E5] max-h-10 aspect-auto" />
                <span>{`${props.date.toDate().toLocaleDateString()}`}</span>

            </div>

            <div className="messageContent messageInfo bg-[#A8DF8E] flex rounded-xl px-5 flex place-items-center py-2">
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Message