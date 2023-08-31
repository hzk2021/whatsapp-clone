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
        <div className={`message flex ${props.owner && 'flex-row-reverse'} gap-5`}>
            <div className="">
                <img src={props.photoURL!} alt=""
                    width={40}
                    className="rounded-3xl p-1 bg-[#FFE5E5]" />
                <span>just now</span>

            </div>

            <div className="messageContent messageInfo bg-[#A8DF8E] flex rounded-xl px-5 flex place-items-center">
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default Message