import React from 'react'

interface messageProps {
    owner: boolean
}

function Message(props: messageProps) {
    return (
        <div className={`message flex ${props.owner && 'flex-row-reverse'} gap-5`}>
            <div className="">
                <img src="https://lh3.googleusercontent.com/a/AAcHTtc5Xzw0s_Cj184TvImbTTTXxq1STyGapoK-7YM8682VgIM=s576-c-no" alt=""
                    width={40}
                    className="rounded-3xl p-1 bg-[#FFE5E5]" />
                <span> just now </span>

            </div>

            <div className="messageContent messageInfo bg-[#A8DF8E] flex rounded-xl px-5 flex place-items-center">
                <p>hellohellohellohellohello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello hello</p>
            </div>
        </div>
    )
}

export default Message