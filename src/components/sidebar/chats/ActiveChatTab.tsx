import React from 'react'

function ActiveChatTab() {
    return (
        <div className='h-12 flex items-center gap-3 text-ellipsis cursor-pointer border-b border-solid hover:bg-red-50'>
            <img src="https://lh3.googleusercontent.com/a/AAcHTtc5Xzw0s_Cj184TvImbTTTXxq1STyGapoK-7YM8682VgIM=s576-c-no"
                className='h-3/4' />

            <div className='flex flex-col grow truncate text-sm md:text-base'>
                <p>fuud uuid</p>
                <p className='truncate'>hello this is fuudfuudfuudfuudfuudfuudfuudfuudfuudfuud</p>
            </div>

        </div>
    )
}

export default ActiveChatTab